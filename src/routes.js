import vue from 'vue'

import Router from 'vue-router'

import Leitors from './components/Leitors'
import NewLeitors from './components/NewLeitors'

vue.use(Router)

const routes = [
    {
    name: 'home',
    path: '/',
    component: Leitors
    },
    {
        name: 'newleitors',
        path: '/newleitors',
        component: NewLeitors
    }
]

const router = new Router({routes})

export default router