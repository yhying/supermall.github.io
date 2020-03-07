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
    return new Promise((resolve, reject) => {
      let olditem = null
      let aa = null
      for (let item of state.carList) {
        if (item.iid === payload.iid) {
          olditem = item
        }
      }
      if (olditem) {
        commit(ADD_COUNTER, olditem)
        resolve('加入购物车成功')
      } else {
        payload.count = 1
        // state.carList.push(payload)
        commit(ADD_IN_CART, payload)
        resolve('加入购物车成功')
      }
      // 数据保存到本地存储
      localStorage.setItem('car', JSON.stringify(state.carList))
    })
  },
  removeCar({
    state,
    commit
  }, payload) {
    return new Promise((resolve, reject) => {
      commit('remove_in_cart', payload)
      // 数据保存到本地存储
      localStorage.setItem('car', JSON.stringify(state.carList))
    })
  }
}
