<template>
    <div class="jsqbox1">
        <div class="jsq1">
            <!-- <showStyle/> -->
            <showStyle v-bind:msg="postState.process"/>
            <numberStyle v-on:listenToChildEvent="getsj($event)" showTxt="CE"/>
            <numberStyle v-on:listenToChildEvent="getsj($event)" showTxt="C"/>
            <numberStyle v-on:listenToChildEvent="getsj($event)" showTxt="←"/>
            <numberStyle v-on:listenToChildEvent="getsj($event)" showTxt="+"/>
            <numberStyle v-on:listenToChildEvent="getsj($event)" showTxt="7"/>
            <numberStyle v-on:listenToChildEvent="getsj($event)" showTxt="8"/>
            <numberStyle v-on:listenToChildEvent="getsj($event)" showTxt="9"/>
            <numberStyle v-on:listenToChildEvent="getsj($event)" showTxt="-"/>
            <numberStyle v-on:listenToChildEvent="getsj($event)" showTxt="4"/>
            <numberStyle v-on:listenToChildEvent="getsj($event)" showTxt="5"/>
            <numberStyle v-on:listenToChildEvent="getsj($event)" showTxt="6"/>
            <numberStyle v-on:listenToChildEvent="getsj($event)" showTxt="x"/>
            <numberStyle v-on:listenToChildEvent="getsj($event)" showTxt="1"/>
            <numberStyle v-on:listenToChildEvent="getsj($event)" showTxt="2"/>
            <numberStyle v-on:listenToChildEvent="getsj($event)" showTxt="3"/>
            <numberStyle v-on:listenToChildEvent="getsj($event)" showTxt="÷"/>
            <numberStyle v-on:listenToChildEvent="getsj($event)" showTxt="00"/>
            <numberStyle v-on:listenToChildEvent="getsj($event)" showTxt="0"/>
            <numberStyle v-on:listenToChildEvent="getsj($event)" showTxt="."/>
            <numberStyle v-on:listenToChildEvent="getsj($event)" showTxt="="/>
            <!-- <buttonStyle showTxt="清空历史记录"/> -->
            <!-- <buttonStyle showTxt="历史记录"/> -->
        </div>
    </div>


</template>

<script>
// @ is an alias to /src
import showStyle from '@/components/showStyle.vue'
import numberStyle from '@/components/numberStyle.vue'
import buttonStyle from '@/components/buttonStyle.vue'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
export default {
    components: {
        showStyle,
        numberStyle,
        buttonStyle
    },
    computed: {
    },
    asyncData({ store, route }) {
        // return store.dispatch('hw/getAllWords', route.name)
    },
    data() {
        return {
           postState:{
                process:'',
                result:"",
            },
        }
    },
    mounted: function() {
    },
    methods:{
        getsj(e){
            this.postState.process = this.postState.process + e;
            console.log(this.postState.process)
        },
    }
}
</script>
<style>

</style>
