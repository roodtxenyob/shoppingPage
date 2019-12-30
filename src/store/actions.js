export default {
  addCart(context,payload){
    return new Promise((resolve,reject) => {
      let oldProduct = null;
      for (let item of context.state.cartList){
        if (item.iid === payload.iid){
          oldProduct = item;
        }
      }
      if (oldProduct){
        context.commit("COUNTPLUS",oldProduct);
        resolve("购物车商品 + 1")
      }else {
        payload.count = 1;
        context.commit("ADD_CART_LIST",payload);
        resolve("成功添加到购物车")
      }
    })
    //这么优雅的代码为什么我想不出来
    /*if (state.cartList.length === 0){
      state.cartList.push(payload)
    }else {
      for (let item of state.cartList){
        if (item.iid === payload.iid){
          item.count++;
        }else {
          payload.count = 1;
          state.cartList.push(payload);
        }
      }
    }*/
  }
}
