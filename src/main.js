import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import router from './router'

// 事件总线
Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// 解决多次点击同一个报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
