import Vue from 'vue'
import Router from 'vue-router'

import Login from '../pages/login'
import ZhuCe from '../pages/zhuce'
import Home from '../pages/home'
import DianYing from '../pages/dianying'
import GuangBo from '../pages/guangbo'
import FaXian from '../pages/faxian'
import TuShu from '../pages/tushu'
import XiaoZu from '../pages/xiaozu'
import Detailed from '../pages/detailed'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '*',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/zhuce',
      name: 'ZhuCe',
      component: ZhuCe
    },
    {
      path: '/dianying',
      name: 'DianYing',
      component: DianYing
    },
    {
      path: '/guangbo',
      name: 'GuangBo',
      component: GuangBo
    },
    {
      path: '/faxian',
      name: 'FaXian',
      component: FaXian
    },
    {
      path: '/tushu',
      name: 'TuShu',
      component: TuShu
    },
    {
      path: '/xiaozu',
      name: 'XiaoZu',
      component: XiaoZu
    },
    {
      path: '/detailed',
      name: 'detailed',
      component: Detailed
    }
  ]
})
