import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import toast from 'components/common/toast'
// 解决移动端300 延迟
import FastClick from 'fastclick'
Vue.config.productionTip = false
// 给$bus赋值vue实例才能发射事件
// 兄弟间的事件传递
Vue.prototype.$bus=new Vue()
//安装toast插件
//安装好后,就会调用toast里install方法
Vue.use(toast)
FastClick.attach(document.body)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
