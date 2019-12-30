<template>
  <div>
    <navbar letfColor="#ffffff" centerColor="#ffffff" rightColor="#ffffff" textColor="#3E3640">
      <div class="backContainer" slot="left" @click="back()">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center">
        <ul>
          <li v-for="(item,index) in title"
              :key="index"
              @click="titleItemClick(index)"
              :class="{active:flag == index}"
          >{{item}}</li>
        </ul>
      </div>
    </navbar>
  </div>
</template>

<script>
  import navbar from "components/common/navbar/navbar";
  export default {
    name: "detailTabController",
    props:{
      title:{
        type:Array,
        default(){
          return []
        }
      },
    },
    data(){
      return {
        flag:0
      }
    },
    components:{
      navbar
    },
    methods:{
      back(){
        this.$router.go(-1);
      },
      titleItemClick(index){
        this.flag = index;
        //控制激活属性
        this.$emit("tabControllerClick",{index});
      }
    },

  }
</script>

<style scoped>
  ul{
    display: flex;
  }
  li{
    flex: 1;
    list-style: none;
    font-size: 14px;
  }
  .backContainer{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .backContainer img{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  .active{
    color: deeppink;
  }
</style>
