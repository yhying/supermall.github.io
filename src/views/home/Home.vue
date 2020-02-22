<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <Scroll class="content" ref="scroll" :probe-type="0" :pull-up-load="true" @scroll="contentScroll" @pullingUp="loadmore">
      <Swiper :banners="banners">
      </Swiper>
      <Recommend-View :recomends="recomends"></Recommend-View>
      <feature-view></feature-view>
      <tab-Control class="tab-control" :title="titleList" @tabclick="tabClick"></tab-Control>
      <Good-List :goods="goods[currtype].list"></Good-List>
    </Scroll>
    <Back-Top @click.native="backTopClick" v-show="isBackTop"></Back-Top>
  </div>
</template>
<script>
  import NavBar from 'components/common/navbar/NavBar'
  import tabControl from 'components/content/tabControl.vue'
  import GoodList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'
  import Swiper from './childComps/HomeSwiper.vue'
  import RecommendView from './childComps/RecommendView.vue'
  import FeatureView from './childComps/FeatureView.vue'
  import {
    getHomeMuticata,
    getHomegoods
  } from 'network/home.js'
  export default {
    components: {
      NavBar,
      Swiper,
      RecommendView,
      FeatureView,
      tabControl,
      GoodList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recomends: [],
        titleList: [],
        isBackTop: false,
        goods: {
          'pop': {
            page: 0,
            list: []
          },
          'new': {
            page: 0,
            list: []
          },
          'sell': {
            page: 0,
            list: []
          }
        },
        currtype: 'pop'
      }
    },
    created() {
      this.getHomeMuticata()
      this.getHomegoods('pop')
      this.getHomegoods('new')
      this.getHomegoods('sell')
    },
    methods: {
      /* 
      事件监听相关方法
      */
      tabClick(index) {
        // console.log(index);
        switch (index) {
          case 0:
            this.currtype = 'pop'
            break;
          case 1:
            this.currtype = 'new'
            break;
          case 2:
            this.currtype = 'sell'
            break;
        }
      },
      backTopClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      contentScroll(position) {
        console.log(position.y);
        this.isBackTop =(-position.y) > 1000
      },
      loadmore(){
        this.getHomegoods(this.currtype)
        console.log('上拉加载等更多');
      },
      /* 
      网络请求相关方法
      */
      getHomeMuticata() {
        getHomeMuticata().then(res => {
          // console.log(res);
          this.banners = res.data.banner.list /*轮播图数据*/
          this.recomends = res.data.recommend.list /*  */
        })
      },
      // 商品goods数据
      getHomegoods(type) {
        const page = this.goods[type].page + 1
        getHomegoods(type, page).then(res => {
          // console.log(res);
          this.titleList = res.data.filter.list
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page+=1
          this.$refs.scroll.finishPullUp()
        })
      },
    },
  }

</script>
<style scoped>
  .home {
    position: relative;
    height: 100vh;
    /* padding-top: 44px; */
  }

  .home-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background-color: var(--color-tint);
    color: #fff;
  }

  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  /* img {
      width: 100%;
  } */

</style>
