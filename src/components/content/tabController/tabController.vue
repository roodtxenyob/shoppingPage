<template>
  <div class="tabController">
    <div v-for="(item,index) in title" class="tabControllerItem" @click="itemClick(index)" >
      <span :class="{active:index===flag}">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabController",
    props: {
      title:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        flag:0,

      }
    },
    methods:{
      itemClick(index){
        this.flag = index;
        this.$emit("goodTypeEvent",index)
      }
    }
  }
</script>

<style scoped>
.tabController{
  display: flex;
  background-color: #ffffff;
}
.tabControllerItem{
  flex: 1;
  text-align: center;
  font-size: 15px;
}
.tabControllerItem span{
  height: 40px;
  line-height: 40px;
}
.active{
  border-bottom: deeppink 2px solid;
  color: deeppink;
}
</style>
