import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建store对象
const store=new Vuex.Store({
    state:{
        carList:[]
    },
    mutations:{
        addCart(state,payload){
            let olditem=null
            let aa=null
            for (let item of state.carList) {
                if(item.iid===payload.iid){
                    olditem=item
                }
            }
            if(olditem){
                olditem.count +=1
            }else {
                payload.count=1
                state.carList.push(payload)
            }

        }
    }
})
// 挂载vue实例上
export default store