import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/reset.css'
import '@/assets/css/public.css'
import '@/assets/css/iconfont.css'
import 'lib-flexible'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
  // to and from are both route objects. must call `next`.
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
