<template>
  <div class="bottomBar">
    <div class="left">
      <div class="kf"><i></i><p>客服</p></div>
      <div class="dp"><i></i><p>店铺</p></div>
      <div class="sc"><i></i><p>收藏</p></div>
    </div>
    <div class="right">
      <div class="addcart" @click="addCart()"><p>加入购物车</p></div>
      <div class="buy"><p>购买</p></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods:{
      addCart(){
        //将商品添加到购物车
          this.$emit("addCart");
      }
    }
  }
</script>

<style scoped>
.bottomBar{
  width: 100%;
  height: 49px;
  background-color: #000000;
  display: flex;
}
.bottomBar .left,.bottomBar .right{
  flex: 1;
}
.left,.right{
  background-color: white;
  display: flex;
}
.left div,.right div{
  flex: 1;
}
i{
  width: 28px;
  height: 28px;
  display: block;
  background-size: 70%;
  background-image: url("~assets\img\detail\detail_bottom.png");
  background-repeat: no-repeat;
  margin: 0 auto;
}
.kf i{
  background-position: 3px -43px;
}
.dp i{
  background-position: 3px -84px;
}
.sc i{
  background-position: 3px 4px;
}
.left p{
  text-align: center;
  line-height: 14px;
}
.addcart{
  background-color: yellow;
  color: black;
  text-align: center;
}
.buy{
  background-color: deeppink;
  color: white;
  text-align: center;
}
.right p{
  width: 100%;
  height: 100%;
  line-height: 49px;
}
</style>
