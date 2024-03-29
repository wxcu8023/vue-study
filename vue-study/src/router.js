import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import About from './views/About.vue'

Vue.use(Router)

export default function() {
    return new Router({
        routes: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/about',
                name: 'about',
                component: () =>
                    import(
                        /* webpackChunkName: "group-foo" */ './views/About.vue'
                    )
            },
            {
                path: '/calculator',
                name: 'calculator',
                component: () =>
                    import(
                        /* webpackChunkName: "group-foo" */ './views/calculator.vue'
                    )
            }
        ]
    })
}
