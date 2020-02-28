<template>
  <div class="detail">
    <detail-nav @titleClick="titleClick" ref="nav"></detail-nav>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probeType="3">
      <detail-swiper :TopImages="Topimages"></detail-swiper>
      <detailbase-info :goods="goods"></detailbase-info>
      <Detailshop-Info :shop="shop"></Detailshop-Info>
      <DetailGoods-Info :detailInfo="detailInfo" @imageLoad="DetailImageLoad"></DetailGoods-Info>
      <DetailParams-Info ref="Titleparams" :paramInfo="paramInfo"></DetailParams-Info>
      <DetailComment-Info ref="Titlecomment" :commentInfo="commentInfo"></DetailComment-Info>
      <Good-List ref="TitleList" :goods="recommendList"></Good-List>
    </scroll>
    <Detail-Button></Detail-Button>
  </div>
</template>
<script>
  import DetailNav from './childComps/detailNav.vue';
  import DetailSwiper from './childComps/detailSwiper.vue';
  import DetailbaseInfo from './childComps/DetailBaseInfo.vue'
  import DetailshopInfo from './childComps/DetailShopInfo.vue'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamsInfo from './childComps/DetailParamInfo.vue'
  import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
  import GoodList from 'components/content/goods/GoodsList'
  import DetailButton from './childComps/DetailBotton.vue'
  import Scroll from 'components/common/scroll/Scroll'
  import {
    itemMixin
  } from 'common/mixin.js'
  import {
    getdetail,
    goods,
    Shop,
    GoodsParam,
    getrecommend
  } from 'network/detail.js'
  export default {
    name: "Detail",
    components: {
      DetailNav,
      DetailSwiper,
      DetailbaseInfo,
      DetailshopInfo,
      DetailGoodsInfo,
      DetailParamsInfo,
      DetailCommentInfo,
      GoodList,
      DetailButton,
      Scroll
    },
    mixins: [itemMixin],
    data() {
      return {
        iid: ' ',
        Topimages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: [],
        recommendList: [],
        itemLister: ' ',
        titleTopoffset: [],
        currentindex:0,
      }
    },
    created() {
      this.iid = this.$route.params.id
      this.getdetail(this.iid)
      this.getrecommend()
    },
    mounted() {},
    destroyed() {
      // 取消itemLister事件
      this.$bus.$off('ImgLoad', this.itemLister) /* 第二个参数必须传入一个函数 */
    },
    methods: {
      /* 
      事件监听相关方法
      */
      DetailImageLoad() {
        // console.log(111);
        this.$refs.scroll.refresh()
        this.titleTopoffset.push(0)
        this.titleTopoffset.push(this.$refs.Titleparams.$el.offsetTop)
        this.titleTopoffset.push(this.$refs.Titlecomment.$el.offsetTop)
        this.titleTopoffset.push(this.$refs.TitleList.$el.offsetTop)
        // console.log(this.titleTopoffset);
      },
      titleClick(index) {
        this.$refs.scroll.scrollTo(0, -this.titleTopoffset[index], 200)
      },
      // 监听滚动事件
      contentScroll(position) {
        // console.log(position);
        // console.log(this.titleTopoffset);
        const positionY = -position.y
        // console.log(positionY);
        const length = this.titleTopoffset.length
        for (let i in this.titleTopoffset) {
          // console.log(positionY);
          i=parseInt(i)
          if (this.currentindex!==i && (i < length - 1 && positionY >= this.titleTopoffset[i] && positionY <= this.titleTopoffset[i+1]) || (i ==
              length - 1 && positionY >= this.titleTopoffset[i])){
                // console.log(i);
                this.currentindex=i
                // console.log(this.$refs.nav);
                this.$refs.nav.currentIndex=this.currentindex
              }
        }
      },
      /* 
      网络请求相关方法
      */
      getdetail(iid) {
        getdetail(iid).then(res => {
          console.log(res);
          const data = res.result
          this.Topimages = data.itemInfo.topImages
          // console.log(this.Topimages);
          // 获取商品信息
          this.goods = new goods(data.itemInfo, data.columns, data.shopInfo.services)
          // 获取店铺信息
          this.shop = new Shop(data.shopInfo)
          // console.log(this.shop);
          // 4.保存商品的详情数据
          this.detailInfo = data.detailInfo;
          // 5.获取参数的信息
          this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
          // 获取评论信息
          if (data.rate.cRate !== 0) {
            this.commentInfo = data.rate.list
            console.log(this.commentInfo);
          }
        })
      },
      // 获取推荐数据
      getrecommend() {
        getrecommend().then(res => {
          // console.log(res);
          this.recommendList = res.data.list
          // console.log(this.recommendList);
        })
      }
    },

  }

</script>
<style scoped>
  .detail {
    position: relative;
    z-index: 11;
    background-color: #fff;
    height: 100vh;
  }

  .content {
    /* height: calc(100% - 44px); */
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 0;
    left: 0;
    right: 0;
  }

</style>
