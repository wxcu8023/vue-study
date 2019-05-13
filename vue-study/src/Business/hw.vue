<template>
    <div>
        <HelloWorld msg="Welcome111 to Your Vue.js App" />
        <div>{{ words }}</div>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState } from 'vuex'
export default {
    components: {
        HelloWorld
    },
    computed: {
        // 使用对象展开运算符将 getter 混入 computed 对象中
        ...mapState('hw', {
            words: state => state
        }),
        demo() {
            return this.$store
        }
    },
    asyncData({ store, route }) {
        return store.dispatch('hw/getAllWords', route.name)
    },
    data() {
        return {
            wordsA: [],
            sss:'',
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
        sz:function(){
            console.log(111)
        }
    }
}
</script>
