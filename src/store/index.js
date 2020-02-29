import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './action'
Vue.use(Vuex)

// 创建store对象
const state={
    carList:[]
}
const store=new Vuex.Store({
    state,
    mutations,
    actions,
})
// 挂载vue实例上
export default store