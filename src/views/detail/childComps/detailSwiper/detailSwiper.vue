<template>
  <Swiper class="swiperHeigt300">
    <SwiperItem v-for="(item,index) in topImages" :key="index+1">
        <img :src="item" alt="" @load="detailImgLoad()">
    </SwiperItem>
  </Swiper>
</template>

<script>
  import {Swiper,SwiperItem} from "components/common/swiper";
  export default {
    name: "detailSwiper",
    data(){
      return {
        isdetailImgLoad:true,
      }
    },
    props:{
      topImages:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      Swiper,
      SwiperItem
    },
    methods:{
      detailImgLoad(){
        if (this.isdetailImgLoad){
          this.$Bus.$emit("detailImgLoad", () => {});
        }
        this.isdetailImgLoad = false;
      }
    }
  }
</script>

<style scoped>
  .swiperHeigt300{
    height: 300px;
  }
</style>
