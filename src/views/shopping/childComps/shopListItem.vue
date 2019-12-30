<template>
  <div class="shopBox">
    <div class="isSelect" @click="clickIsSelect()">
      <img src="~assets/img/cart/tick.svg" :class="{isSelectActive:item.checked}" alt="">
    </div>
    <div class="goodsCover">
      <img :src="item.img" alt="">
    </div>
    <div class="right">
      <div class="goodsTitle">
        <p>{{item.titel}}</p>
      </div>
      <div class="goodsDesc">
        <p>{{item.desc}}</p>
      </div>
      <div class="priceAndNumber">
        <div class="price">
          <p>${{item.price}}</p>
        </div>
        <div class="number">
          <button class="sub" @click="sub()">-</button>
          <p>{{item.count}}</p>
          <button class="add" @click="add()">+</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

  export default {
    name: "shopListItem",
    props:{
      item:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      clickIsSelect(){
        this.item.checked = !this.item.checked;
      },
      sub(){
        if (this.item.count > 1){
          this.item.count--
        }

      },
      add(){
        this.item.count++
      }
    }
  }
</script>

<style scoped>
  .shopBox{
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
  }
  .right{
    flex: 1;
    min-width:0;
    align-self:flex-start;
    padding: 8px 10px;
  }
  .isSelect img{
    height: 20px;
    border: #c0c0c0 2px solid;
    border-radius: 14px;
    margin: 4px;
  }
  .goodsCover img {
    margin: 4px;
    height: 100px;
    border-radius: 8px;
  }
  .goodsTitle p , .goodsDesc p{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .goodsTitle p{
     font-size: 20px;
  }
  .goodsDesc p {
     font-size: 12px;
     margin: 15px 0;
  }
  .priceAndNumber {
    display:flex;
    justify-content: space-between;
  }
  .price p{
     color: #ff3724;
     font-size: 20px;
  }
  .number {
    display:flex;
  }
  .sub , .add{
    margin: 0;
    border: 1px solid #bcbcbc;
    outline: none;
    background-color: #ffffff;
    color: #bcbcbc;
  }
  .sub{
    border-radius: 5px 0px 0px 5px;
    padding: 0 7px;
  }
  .add{
    border-radius: 0px 5px 5px 0px;
    padding: 0 5px;
  }
  .number p{
    color: #515151;
    line-height: 20px;
    padding: 0 5px;
    border-top: 1px solid #bcbcbc;
    border-bottom: 1px solid #bcbcbc;
  }
  .isSelectActive{
    background-color: #ff2673;
  }
</style>
