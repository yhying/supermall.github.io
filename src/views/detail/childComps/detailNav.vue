<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="goback">
            <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" :class="currentIndex===index?'actived':' '" @click="tabTitleClick(index)">
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
        currentIndex:0,
      }
    },
    methods: {
      goback(){
        this.$router.back()
      },
      tabTitleClick(index){
        this.currentIndex=index;
        this.$emit('titleClick',index)
      }
    },
  }
</script>
<style>
  .back {
    /* line-height: 44px; */
  }
  .back img {
    vertical-align: middle;
  }
    .title {
        display: flex;
        font-size: 14px;
    }
    .title>div {
      flex:auto;
    }
    .actived {
      color: var(--color-tint);
    }
</style>

