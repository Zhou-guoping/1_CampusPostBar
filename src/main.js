// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/icon/iconfont.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import preventReClick from './store/preventReClick'
import md5 from 'js-md5'
import cookies from 'vue-cookies'
import axios from 'axios'

Vue.prototype.$cookies=cookies
axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.withCredentials=true
Vue.prototype.$http=axios  // 这样设置就可以在组件内用 this.$http 使用axios了

Vue.prototype.$md5=md5
/* eslint-disable no-new */
Vue.use(Element)
new Vue({
  el: '#app',
  render:h=>h(App),
  router
})
