<template>
    <div class="jsqbox1">
        <div class="jsq1">
            <showStyle v-bind:msg="getState.result"/>
            <showStyle v-bind:msg="postState.process"/>
            <numberStyle v-on:listenToChildEvent="clear()" showTxt="CE"/>
            <numberStyle v-on:listenToChildEvent="clear()" showTxt="C"/>
            <numberStyle v-on:listenToChildEvent="del()" showTxt="←"/>

            <numberStyle v-on:listenToChildEvent="getFh('+')" showTxt="+"/>
            <numberStyle v-on:listenToChildEvent="getsj($event)" showTxt="7"/>
            <numberStyle v-on:listenToChildEvent="getsj($event)" showTxt="8"/>
            <numberStyle v-on:listenToChildEvent="getsj($event)" showTxt="9"/>

            <numberStyle v-on:listenToChildEvent="getFh('-')" showTxt="-"/>
            <numberStyle v-on:listenToChildEvent="getsj($event)" showTxt="4"/>
            <numberStyle v-on:listenToChildEvent="getsj($event)" showTxt="5"/>
            <numberStyle v-on:listenToChildEvent="getsj($event)" showTxt="6"/>

            <numberStyle v-on:listenToChildEvent="getFh('*')" showTxt="x"/>
            <numberStyle v-on:listenToChildEvent="getsj($event)" showTxt="1"/>
            <numberStyle v-on:listenToChildEvent="getsj($event)" showTxt="2"/>
            <numberStyle v-on:listenToChildEvent="getsj($event)" showTxt="3"/>

            <numberStyle v-on:listenToChildEvent="getFh('/')" showTxt="÷"/>
            <numberStyle v-on:listenToChildEvent="getsj($event)" showTxt="000"/>
            <numberStyle v-on:listenToChildEvent="getsj($event)" showTxt="00"/>
            <numberStyle v-on:listenToChildEvent="getsj($event)" showTxt="0"/>
            <numberStyle v-on:listenToChildEvent="getResult()" showTxt="="/>
            <buttonStyle showTxt="清空历史"/>
            <buttonStyle showTxt="历史记录"/>
            <!-- <historyBox/> -->
            <ul>
                <li v-for="(hisList, index) in hisLists" :key='index'>{{hisList.text}}</li>
            </ul>
        </div>
    </div>


</template>

<script>
// @ is an alias to /src
import showStyle from '@/components/showStyle.vue'
import numberStyle from '@/components/numberStyle.vue'
import buttonStyle from '@/components/buttonStyle.vue'
// import historyBox from '@/components/historyBox.vue'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
export default {
    components: {
        showStyle,
        numberStyle,
        buttonStyle,
        // historyBox
    },
    computed: {
        ...mapGetters(['getState']),
    },
    asyncData({ storeJsq, route }) {
        // return store.dispatch('hw/getAllWords', route.name)
    },
    data() {
        return {
           postState:{
                showProcess:"",
                process:'',
                result:"",
            },
            hisLists:[
                {text:"1"},
                {text:"2"},
                {text:"3"}
            ]
        }
    },
    mounted: function() {
    },
    methods:{
        getsj(e){
            this.postState.process = this.postState.process + e;
            // console.log(this.postState.process)
        },
        clear(){
            this.postState.process = ""
            this.postState.result = ""
        },
        del(){
            this.postState.process =  this.postState.process.slice(0,-1)
        },
        getFh(e){
            var regPos = /^\d+(\.\d+)?$/;
            var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;
            var process = this.postState.process
            if(regPos.test(process.slice(-1)) || regNeg.test(process.slice(-1))){
                console.log("y")
                this.postState.process = process + e
            }else{
                console.log("n")
                this.postState.process = process.slice(0,-1) + e
            }
        },
        getResult(){
            var regPos = /^\d+(\.\d+)?$/;
            var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;
            var process = this.postState.process
             if(regPos.test(process.slice(-1)) || regNeg.test(process.slice(-1))){
                 this.storageState(this.postState);
                 this.$store.commit('storageState',this.postState.process)
                //   this.postState.result = eval(this.postState.process)
             }else{
                 alert("格式错误")
             }
        },
         ...mapMutations(['storageState'])
    }
}
</script>
<style scoped>
:root {
  --mainColor:red;
  --onewidth:100%;
  --oneheight:500px;
  --boxBgColor:#ccc;
  --btnBColor:#fff;
  --btnBRcolor:#ccc;
  --pJbColor1:#fff;
  --pJbcolor2:color(#000 alpha(50%));
  --PColor:#000;
}
.jsqbox1{
  width:var(--onewidth);
  height:var(--oneheight);
  display: flex;
  justify-content: center;
  align-items:center
}
.jsq1{
  width:240px;
  height:400px;
  background:var(--boxBgColor);
  overflow: hidden;
}
 
.jsq1 button{
  width:60px;
  height:38px;
  line-height:38px;
  text-align:center;
  background-color:var(--btnBColor);
  border:1px solid var(--btnBRcolor);
  font-size:20px;
}
 
.jsq1 p{
  color:var(--PColor);
  width:100%;
  height:40px;
  line-height:40px;
  font-size:22px;
  font-weight:bold;
  text-align:right;
  padding:0;
  margin:0;
  background:linear-gradient(to left,var(--pJbColor1), var(--pJbcolor2));
  margin-bottom:5px;
}
</style>
