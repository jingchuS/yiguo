import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import rice from '../pages/classify/rice.vue';
import classify from '../pages/classify/classify.vue';
import home from '../common/content.vue';
import shopcar from '../pages/classify/shopcar.vue';
import mine from '../pages/classify/mine.vue';
import city from '../pages/city/city.vue';

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        name: 'classify',
        path: '/classify',
        component: classify
    },
    {
        name: 'home',
        path: '/home',
        component: home,
    },
    {
        name: 'rice',
        path: '/rice',
        component: rice,
    },
    {
        name: 'home',
        path: '/home',
        component: home,
    },
    {
        name: 'shopcar',
        path: '/shopcar',
        component: shopcar,
    },
    {
        name: 'mine',
        path: '/mine',
        component: mine,
    },
    {
        name: 'city',
        path: '/city',
        component: city,
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router