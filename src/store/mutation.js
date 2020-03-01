import {
    ADD_COUNTER,
    ADD_IN_CART
} from './mutation.type'
export default {
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  [ADD_IN_CART](state, payload) {
    payload.check=true
    state.carList.push(payload)
  }
}
