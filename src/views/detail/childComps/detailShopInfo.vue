<template>
  <div class="shopInfo">
    <div class="shopLogoAndName">
      <img :src="shopInfo.logo" alt="">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="box">
      <div class="Management">
        <div class="text">
          <p>销量</p>
          <p>宝贝</p>
          <p>粉丝</p>
        </div>
        <div class="data">
          <p>{{shopInfo.sells | wFilter}}</p>
          <p>{{shopInfo.goodsCount | wFilter}}</p>
          <p>{{shopInfo.fans | wFilter}}</p>
        </div>
      </div>
      <div class="score">
        <div v-for="items in shopInfo.score">
          <span>{{items.name}}</span>
          <span
            :class="{dataMassGood:items.isBetter,dataMassBad:!items.isBetter}"
          >{{items.score | toFix}}</span>
          <span
            class="fff" :class="{textMassGood:items.isBetter,textMassBad:!items.isBetter}"
          >{{items.isBetter | goodAndBad}}</span>
        </div>
      </div>
    </div>
    <div class="btn">进店看看</div>
  </div>
</template>

<script>
  export default {
    name: "detailShopInfo",
    props:{
      shopInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    // created() {
    //   setTimeout(() => {
    //     console.log(this.shopInfo)
    //   },2000)
    // },
    filters:{
      wFilter(value){
        if (value > 10000) {
          return (value/10000).toFixed(1) + "万";
        }else {
          return value
        }
      },
      toFix(value){
        return value.toFixed(2);
      },
      goodAndBad(value){
        if (value){
          return "高"
        }else {
          return "低"
        }
      }
    }
  }
</script>

<style scoped>
  .shopInfo {
    padding: 25px 8px;
    border-bottom: 5px solid #f2f5f8;
  }
  .shopLogoAndName{
    line-height: 45px;
    /* 让元素垂直中心对齐 */
    display: flex;
    align-items: center;
  }
  .shopLogoAndName img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0px 0px 6px #888888;
    margin: 10px;
  }
  .shopLogoAndName span{
    margin-left: 10px;
    vertical-align: center;
  }
  .box{
    display: flex;
    padding: 0 10px;
  }
  .Management{
    flex: 1;
    display: flex;
    margin-right: 14px;
    border-right: 1px #e5e5e5 solid;
  }
  .text{
    flex: 1;
    font-size: 14px;
    line-height: 26px;
  }
  .data{
    flex: 1;
    font-size: 14px;
    line-height: 26px;
  }
  .score{
    flex: 1;
    font-size: 14px;
    line-height: 26px;
  }
  .score span {
    margin: 0 2px;
  }
  .fff{
    color: #ffffff;
    border-radius: 2px;
  }
  .dataMassGood{
    color: red;
  }
  .dataMassBad{
    color: green;
  }
  .textMassGood{
    background-color: red;
  }
  .textMassBad{
    background-color: green;
  }
  .btn{
    background-color: #e5e5e5;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 28px;
    margin: 10px auto;
    border-radius: 10px;
  }
</style>
