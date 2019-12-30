export default {
  cartLength(state){
    //state需要传过来！！！
    return state.cartList.length;
  },
  cartList (state){
    return state.cartList;
  }
}
