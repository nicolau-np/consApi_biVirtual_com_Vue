import vue from 'vue'

import Router from 'vue-router'

import Leitors from './components/Leitors'

vue.use(Router)

const routes = [
    {
    name: 'home',
    path: '/',
    component: Leitors
    }
]

const router = new Router({routes})

export default router