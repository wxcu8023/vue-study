<template>
    <div class="jsqbox1">
        <div class="jsq1">
            <HelloWorld4 v-bind:msg="postState.result"/>
            <HelloWorld4 v-bind:msg="postState.process"/>
            <showButton  v-on:listenToChildEvent="getsj($event)" showTxt="1"/>
            <showButton  v-on:listenToChildEvent="getsj($event)" showTxt="2"/>
            <showButton  v-on:listenToChildEvent="getsj($event)" showTxt="3"/>
            <showButton  v-on:listenToChildEvent="getsj($event)" showTxt="+"/>
            

            <button v-on:click="getjg">=</button>
            <button v-on:click="cleartStorage" showTxt="clear">clear</button>
            <button v-on:click="progress(0)" style="font-size:12px;">第一步</button>
            <button v-on:click="progress(1)" style="font-size:12px;">第二步</button>
            <button v-on:click="progress(2)" style="font-size:12px;">第三步</button>
            <p>
                {{getState.result}}    
            </p>
            <p>
                {{getState.process}}
            </p>
        </div>
    </div>

</template>

<script>
// @ is an alias to /src
import showButton from '@/components/sz1.vue'
import HelloWorld4 from '@/components/xsq.vue'
// import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
export default {
    components: {
        showButton,
        HelloWorld4,
    },
    computed: {
        ...mapGetters(['getState']),
    },
    asyncData({ store, route }) {
        // return store.dispatch('hw/getAllWords', route.name)
    },
    data() {
        return {
            wordsA: [],
            result:'',
            process:'',
            sss:'0',
            rrr:"",
            postState:{
                // id:'1',
                process:'',
                result:"",
            },
        }
    },
    mounted: function() {
        this.$nextTick(function() {
            if (this.dataPromise) {
                console.log('11')
            }
            // Code that will run only after the
            // entire view has been rendered
        })
    },
    methods:{
        cleartStorage:function(){
            localStorage.clear();
        },
        progress(e){
            var myStorage = JSON.parse(localStorage.getItem('mydata'));
            console.log(myStorage[e])
            if(myStorage[e] == undefined || myStorage[e] == null){
                alert("数据不存在")
            }else{
                this.postState = myStorage[e]
                console.log(this.postState)
            }
        },
        fh:function(e){

        },
        clear:function(){

        },
        enter:function(){

        },
        getsj(e){
            this.postState.process = this.postState.process + e;
        },
        getjg(){
            this.postState.result = eval(this.postState.process)   
            // this.$store.commit('setUser',this.postState)
            this.storageState(this.postState)
        },
        ...mapMutations(['storageState'])
    }

}
</script>
<style>
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
body {
  color: var(--mainColor);
  font-family: system-ui;
  overflow-wrap: break-word;
  background:--mainColor;
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
</style>
