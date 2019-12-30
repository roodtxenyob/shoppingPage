<template>
  <div class="foot">
    <div class="isSelect" @click="clickAllSelect()">
      <img src="~assets/img/cart/tick.svg" :class="{isSelectActive:isAllSelectActive}" alt="">
      <p>全选</p>
    </div>
    <div class="Total">
      <p>合计:</p>
      <p>${{totalPrice}}</p>
    </div>
    <button>结算({{selectNumber}})</button>
  </div>
</template>

<script>
  export default {
    name: "foot",
    props:{
      purchaseGoods:{
        type:Array,
        default(){
          return []
        }
      }
    },
    computed:{
      isAllSelectActive(){
        let noActiveNumber = this.purchaseGoods.filter((item) => {
          return item.checked == false
        });
        if (noActiveNumber.length != 0){
          return false
        }else {
          return true
        }
      },
      selectNumber(){
        return this.purchaseGoods.filter((item) => {
          return item.checked == true
        }).length;
      },
      totalPrice(){
        let sum = 0;
        if (this.purchaseGoods.length != 0){
          for (let item of this.purchaseGoods){
            sum += item.count * item.price;
          }
        }else {
          return 0
        }
        return sum
      }
    },
    methods:{
      clickAllSelect(){
        if(this.isAllSelectActive){
          //为真全选状态，为假不全选
          this.purchaseGoods.forEach((item) => {
            item.checked = false;
          });
        }else {
          this.purchaseGoods.forEach((item) => {
            item.checked = true;
          });
        }
      }
    }
  }
</script>

<style scoped>
  .foot{
    width: 100%;
    height: 40px;
    background-color: #e7e7e7;
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 49px;
    display: flex;
    justify-content:space-between;
  }
  .isSelect{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .isSelect img{
    height: 20px;
    border: #c0c0c0 2px solid;
    border-radius: 14px;
    margin: 4px;
  }
  .Total{
    display: flex;
    align-items: center;
  }
  button{
    padding: 0 30px;
    border: 0;
    background-color: #ff2673;
    outline: none;
    color: #e7e7e7;
  }
  .isSelectActive{
    background-color: #ff2673;
  }
</style>
