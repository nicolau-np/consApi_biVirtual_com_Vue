import vue from 'vue'

import Router from 'vue-router'

import Leitors from './components/Leitors'
import Page2 from './components/Page2'

vue.use(Router)

const routes = [
    {
    name: 'home',
    path: '/',
    component: Leitors
    },{
        name: 'page2',
        path: '/page2',
        component: Page2
        }
]

const router = new Router({routes})

export default router