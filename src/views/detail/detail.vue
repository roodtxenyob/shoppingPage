<template>
  <div class="container">
    <detailTabController :title="title" @tabControllerClick="tabControllerClick($event)" ref="tabCoter"></detailTabController>
    <scroll class="scroll" ref="scroll" :tabControllerflag="tabControllerflag" @gundong="gd($event)" @showevent="showevent($event)">
      <detailSwiper :topImages="topImages"></detailSwiper>
      <detailGoodsInfo :goodsInfo="goodsInfo"></detailGoodsInfo>
      <detailShopInfo :shopInfo="shopInfo"></detailShopInfo>

      <detailMoreGoodsInfo :detailInfo="detailInfo" ></detailMoreGoodsInfo>
      <detail-param-info ref="param" :paramInfo="paramInfo"></detail-param-info>
      <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
      <goodsList :good="recommend" ref="good"></goodsList>
    </scroll>
    <DetailBottomBar class="btmbar" @addCart="addCart()"></DetailBottomBar>
    <backTop @click.native="topclick()" v-show="isBackTopShow"></backTop>

  </div>
</template>

<script>
  import detailTabController from "./childComps/detailTabController";
  import detailSwiper from "./childComps/detailSwiper/detailSwiper";
  import detailGoodsInfo from "./childComps/detailGoodsInfo";
  import detailShopInfo from "./childComps/detailShopInfo";
  import DetailBottomBar from "./childComps/DetailBottomBar"

  import detailMoreGoodsInfo from "./childComps/detailMoreGoodsInfo"
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import backTop from "components/content/backTop/backTop";
  import {testMixin} from "common/mixin";

  import goodsList from "components/content/goods/goodsList";

  import {getDetail,Goods,Shop,GoodsParam,getRecommend} from "network/detail";
  import scroll from "components/common/scroll/scroll";

  export default {
    name: "detail",
    data(){
      return {
        iid:"",
        title:["商品","参数","评论","推荐"],
        iidResult:{},
        //请求的结果
        topImages:[],
        //轮播图url
        goodsInfo:{},
        //商品信息
        shopInfo:{},
        detailInfo:{},
        paramInfo:{},
        commentInfo:{},
        recommend:[],
        eventDetailImgLoadContainer:null,
        tabControllerflag:[],
        tabflag04:0
      }
    },
    created() {
      this.iid = this.$route.query.iid
      //接收路由传递过来的iid
      getDetail(this.iid).then(res => {
        this.iidResult = res.result;
        //请求的结果
        this.topImages = res.result.itemInfo.topImages;
        //轮播图
        this.goodsInfo = new Goods(res.result.itemInfo,res.result.columns,res.result.services);
        //商品信息
        this.shopInfo = new Shop(res.result.shopInfo);
        //店铺信息
        this.detailInfo = res.result.detailInfo;
        //更详细的信息
        this.paramInfo = new GoodsParam(res.result.itemParams.info, res.result.itemParams.rule);
        // 保存评论信息
        if (res.result.rate.list) {
          this.commentInfo = res.result.rate.list[0];
        }
        this.$nextTick(() => {

        })
      });
      getRecommend().then((res) => {
        //推荐信息
        this.recommend = res.data.list;
      });

    },
    components:{
      scroll,
      detailTabController,
      detailSwiper,
      detailGoodsInfo,
      detailShopInfo,
      detailMoreGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar,
      goodsList,
      backTop,
    },
    mounted(){
      this.eventDetailImgLoadContainer = () => {
        this.$refs.scroll.BScroll.refresh();
      }
      this.$Bus.$on("detailImgLoad", () => {
        this.eventDetailImgLoadContainer();
        this.tabControllerflag = []
        this.tabControllerflag.push(0)
        this.tabControllerflag.push(this.$refs.param.$el.offsetTop)
        this.tabControllerflag.push(this.$refs.comment.$el.offsetTop)
        this.tabControllerflag.push(this.$refs.good.$el.offsetTop)
      });

    },
    methods:{
      tabControllerClick(event){
        this.$refs.scroll.BScroll.scrollTo(0,-this.tabControllerflag[event.index],300)
      },
      gd(event) {
        if (-event.y >= 0 && -event.y <= this.tabControllerflag[1]){
          this.$refs.tabCoter._data.flag = 0;
        }else if (-event.y >= this.tabControllerflag[1] && -event.y <= this.tabControllerflag[2]){
          this.$refs.tabCoter._data.flag = 1;
        }else if (-event.y >= this.tabControllerflag[2] && -event.y <= this.tabControllerflag[3]){
          this.$refs.tabCoter._data.flag = 2;
        }else if (-event.y >= this.tabControllerflag[3] && -event.y <= Number.MAX_VALUE){
          this.$refs.tabCoter._data.flag = 3;
        }
      },
      addCart(){
        const product = {};
        product.img = this.topImages[0];
        product.titel = this.goodsInfo.title;
        product.desc = this.goodsInfo.desc;
        //描述
        product.price = this.goodsInfo.nowPrice;
        product.iid = this.iid;
        product.count = 1;
        this.$store.dispatch("addCart",product).then((res) => {
          this.$toast.showTosat(2000,res);
        })
      }
    },
    destroyed() {
      this.$off("detailImgLoad", this.eventDetailImgLoadContainer);
    },
    mixins:[testMixin]
  }
</script>

<style scoped>
  .container{
    width: 100%;
    position: relative;
    z-index: 8;
    background-color: #ffffff;
    height: 100vh;
  }
  .scroll{
    position: absolute;
    top: 40px;
    bottom: 49px;
    right: 0px;
    left: 0px;
    overflow: hidden;
  }
  .btmbar{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: calc(100% - 49px);
  }
</style>
