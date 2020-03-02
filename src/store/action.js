import {
  ADD_COUNTER,
  ADD_IN_CART
} from './mutation.type'
export default {
  // addCart(context,payload){
  addCart({
    state,
    commit
  }, payload) {
    /* 对象结构 */
    return new Promise((resolve,reject)=>{
      let olditem = null
      let aa = null
      for (let item of state.carList) {
        if (item.iid === payload.iid) {
          olditem = item
        }
      }
      if (olditem) {
        commit(ADD_COUNTER, olditem)
        resolve('当前数量加1')
      } else {
        payload.count = 1
        // state.carList.push(payload)
        commit(ADD_IN_CART, payload)
        resolve('当前商品加1')
      }
    })
  }
}
