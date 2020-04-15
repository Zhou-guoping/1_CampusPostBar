// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/icon/iconfont.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import md5 from 'js-md5'
import cookies from 'vue-cookies'
import axios from 'axios'
import 'lib-flexible'
import Util from './common/util'
import 'mint-ui/lib/style.css';
import Mint from 'mint-ui';
import {Button,Toast} from "mint-ui";

Vue.prototype.util=Util
Vue.prototype.$cookies=cookies

Vue.use(Mint);
Vue.component(Button.name,Button) //<mt-button>
axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.withCredentials=true
axios.defaults.headers.post['Content-Type']='application/json;charset=UTF-8'
Vue.prototype.$http=axios  // 这样设置就可以在组件内用 this.$http 使用axios了

Vue.prototype.$md5=md5
/* eslint-disable no-new */
Vue.use(Element)
new Vue({
  el: '#app',
  render:h=>h(App),
  router,//使用vue-router
  store,//使用vuex

})
router.beforeEach(function(to, from, next) {
  if (to.meta.requireLogin) {
    //页面是否登录
    if (localStorage.getItem("token")) {
      //本地存储中是否有token(uid)数据
      next(); //表示已经登录
    } else {
      Toast('请先登录')
      //next可以传递一个路由对象作为参数 表示需要跳转到的页面
      next({
        path: "/login"
      });
    }
  } else {
    //表示不需要登录
    next(); //继续往后走
  }
});
