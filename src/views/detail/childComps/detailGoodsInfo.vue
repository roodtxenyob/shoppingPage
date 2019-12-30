<template>
  <div>
    <div class="title"><b>{{goodsInfo.title}}</b></div>
    <div class="price">
      <span class="newPrice">{{goodsInfo.newPrice}}</span>
      <span class="nowPrice">{{goodsInfo.nowPrice}}</span>
      <span class="discount">{{goodsInfo.discount}}</span>
    </div>
    <div class="columns">
      <span v-for="item in goodsInfo.columns">{{item}}</span>
    </div>

  </div>
</template>

<script>
  export default {
    name: "detailGoodsInfo",
    props:{
      goodsInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    created() {
      /*setTimeout(() => {
        console.log(this.goodsInfo)
      },3000)*/
      //监听总线事件
      this.$Bus.$on("detailImgLoad",() => {
        /*console.log(Object.keys(this.goodsInfo.services).length)*/
        if (!this.goodsInfo.services){
          //未完成的业务
        }
      })
    }
  }
</script>

<style scoped>
  .title{
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 3px;
    margin-left: 6px;
    color: rgba(73, 21, 2, 0.92);
  }
  .price{
    margin-top: 3px;
    margin-left: 6px;
    margin-right: 3px;
  }
  .newPrice{
    font-size: 22px;
    color: rgba(255,12,107,0.92);
  }
  .nowPrice{
    padding-left: 3px;
    padding-right: 3px;
    font-size: 12px;
    color: #999999;
    text-decoration: line-through;
  }
  .discount{
    background-color: #ff5777;
    font-size: 12px;
    padding: 3px;
    color: #fcfcfc;
    border-radius: 10px;
    position: relative;
    top: -3px;
  }
  .columns{
    margin-left: 6px;
    margin-right: 15px;
    margin-top: 15px;
    line-height: 30px;
    display: flex;
    font-size: 13px;
    border-bottom: 1px solid rgba(100,100,100,.1);
    justify-content: space-between;
  }
</style>
