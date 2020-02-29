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
    let olditem = null
    let aa = null
    for (let item of state.carList) {
      if (item.iid === payload.iid) {
        olditem = item
      }
    }
    if (olditem) {
      commit(ADD_COUNTER, olditem)
    } else {
      payload.count = 1
      // state.carList.push(payload)
      commit(ADD_IN_CART, payload)
    }

  }
}
