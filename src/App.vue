<template>
  <div id="app">
    <nav-bar class="home-nav" v-show="!(path.indexOf('/detail')!=-1)">
      <div slot="center">购物街</div>
    </nav-bar>
    <transition>
      <keep-alive exclude="Detail">
        <router-view />
      </keep-alive>
    </transition>
    <main-tab-bar />
  </div>
</template>
<script>
  import NavBar from 'components/common/navbar/NavBar'
  import MainTabBar from 'components/content/mainTabbar/MainTabBar'
  export default {
    name: 'app',
    components: {
      MainTabBar,
      NavBar
    },
    data() {
      return {
        path: ''
      }
    },
    updated() {
      // console.log(this.$route.path);
    },
    mounted() {
      this.path = this.$route.path;
      // console.log(this.$route.path)
    },
    watch: {
      $route(to, from) {
        this.path = to.path
      }
    }
  }

</script>
<style>
  #app {
    overflow-x: hidden;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }

  @import 'assets/css/base.css'

</style>
