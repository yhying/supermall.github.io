<template>
  <div class="detail">
    <detail-nav></detail-nav>
    <scroll class="content" ref="scroll">
      <detail-swiper :TopImages="Topimages"></detail-swiper>
      <detailbase-info :goods="goods"></detailbase-info>
      <Detailshop-Info :shop="shop"></Detailshop-Info>
      <DetailGoods-Info :detailInfo="detailInfo" @imageLoad="DetailImageLoad"></DetailGoods-Info>
      <DetailParams-Info :paramInfo="paramInfo"></DetailParams-Info>
    </scroll>
  </div>
</template>
<script>
  import DetailNav from './childComps/detailNav.vue';
  import DetailSwiper from './childComps/detailSwiper.vue';
  import DetailbaseInfo from './childComps/DetailBaseInfo.vue'
  import DetailshopInfo from './childComps/DetailShopInfo.vue'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamsInfo from './childComps/DetailParamInfo.vue'
  import Scroll from 'components/common/scroll/Scroll'
  import {
    getdetail,
    goods,
    Shop,
    GoodsParam
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
      Scroll

    },
    data() {
      return {
        iid: ' ',
        Topimages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo:{}

      }
    },
    created() {
      this.iid = this.$route.params.id
      this.getdetail(this.iid)
    },
    methods: {
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
        })
      },
      DetailImageLoad() {
        // console.log(111);
        this.$refs.scroll.refresh()
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
