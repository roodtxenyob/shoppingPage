<template>
  <div class="goodsListItem" @click="goodsListItemClick()">
    <img v-lazy="goodimg" class="goodsListItemShow" alt="" @load="imgload()">
    <div class="fonter">
      <p>{{goodItem.title}}</p>
      <div class="goodinfo">
        <span class="price">￥{{goodItem.price}}</span>
        <span class=""><img src="~assets/img/common/collect.svg" class="goodsListItemStar" alt="">{{goodItem.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "goodsListItem",
    props:{
      goodItem:{
        type: Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      goodimg(){
        if (this.goodItem.show) {
          return this.goodItem.show.img
        }else if (this.goodItem.image) {
          return this.goodItem.image
        }
      }
    },
    methods:{
      imgload(){
        this.$Bus.$emit("busimgload" , () => {
        });
      },
      goodsListItemClick(){
        this.$router.push({
          path: 'detail',
          query: {
            iid: this.goodItem.iid
          }
        });
      }
    }
  }
</script>

<style scoped>
  .goodsListItem{
    width: 50%;
    height: 50%;
    padding: 4px;
  }
  .goodsListItemShow{
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
  .goodsListItemStar{
    width: 14px;
    height: 14px;
  }
  .fonter p{
    white-space:nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
    font-size: 12px;
  }
  .goodinfo{
    text-align: center;
  }
  .price{
    color: #ff6fb3;
  }
</style>
