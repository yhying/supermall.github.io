<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <Swiper :banners="banners">
    </Swiper>
    <RecommendView :recomends="recomends"></RecommendView>
  </div>
</template>
<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Swiper from './childComps/HomeSwiper.vue'
  import RecommendView from './childComps/RecommendView.vue'
  import {
    getHomeMuticata
  } from 'network/home.js'
  export default {
    components: {
      NavBar,
      Swiper,
      RecommendView
    },
    data() {
      return {
        banners: [],
        recomends: []
      }
    },
    created() {
      getHomeMuticata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list /*轮播图数据*/
        this.recomends = res.data.recommend.list /*  */
      })
    },
  }

</script>
<style scope>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }

  /* img {
      width: 100%;
  } */

</style>
