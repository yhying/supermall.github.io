<template>
  <div>
    <nav-bar>
      <div slot="left" class="back">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="item in titles">
            {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    components:{
        NavBar
    },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
      }
    },
  }
</script>
<style>
    .title {
        display: flex;
    }
</style>
