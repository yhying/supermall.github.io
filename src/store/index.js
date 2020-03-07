import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './action'
import getters from './getters'
Vue.use(Vuex)

// 创建store对象
const car=JSON.parse(localStorage.getItem('car') || '[]')
const state={
    carList:car,
}
const store=new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
})
// 挂载vue实例上
export default store