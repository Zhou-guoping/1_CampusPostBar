import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Bar from '../pages/Bar/Bar.vue'
import Recommend from '../pages/Bar/Recommend.vue'
import Search from '../pages/Search/Search.vue'
import News from '../pages/News/Message.vue'
import Message from '../pages/News/News.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
import Sign from '../pages/Sign/Sign.vue'

import Attention from '../pages/Home/Attention/Attention.vue'
import Materials from '../pages/Home/Materials/Material.vue'
import Topic from '../pages/Home/Topic/Topic.vue'

//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  //所有路由
  routes: [
    {
      path: '/home',
      component: Home,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/bar',
      component: Bar,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/bar/recommend',
      component: Recommend,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/news',
      component: News,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/news/message',
      component: Message,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/sign',
      component: Sign
    },
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home/attention',
      component: Attention,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/home/topic',
      component: Topic,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/home/materials',
      component: Materials,
      meta:{
        showFooter:true
      }
    }
  ]
})
