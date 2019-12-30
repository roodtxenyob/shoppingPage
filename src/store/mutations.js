import {ADD_CART_LIST,COUNTPLUS} from './mutationTypes'
export default {
  [ADD_CART_LIST](state,payload){
    payload.checked = false
    state.cartList.push(payload);
  },
  [COUNTPLUS](state,oldProduct){
    oldProduct.count ++;
  }
}
