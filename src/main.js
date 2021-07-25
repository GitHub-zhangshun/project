import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/reset.css'
import '@/assets/css/public.css'
import '@/assets/css/iconfont.css'
import 'lib-flexible'
import axios from 'axios'
import Cookies from 'js-cookie'

Vue.prototype.$axios = axios
Vue.prototype.$cookies = Cookies

// axios.defaults.baseURL = '/api';
axios.defaults.baseURL = 'http://api.zhynb.com/';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头信息。

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if(to.meta.requireAuth && !localStorage.getItem('userInfo')){
    next({path:'/login'})
  }else{
    next()
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
