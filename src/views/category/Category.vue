<template>
  <div class="category">
    <nav-bar class="category-nav">
      <div slot="center">分类</div>
    </nav-bar>
    <scroll class="content1" ref="scroll" @scroll="contentScroll" :probeType="3">
      <tab-menu :categories="categories" @selectItem="selectItem"></tab-menu>
    </scroll>
    <scroll class="content2" ref="scroll" @scroll="contentScroll" :probeType="3">
        <tab-content :subcategories="subcategories" @imgLoad="imgLoad"></tab-content>
    </scroll>
  </div>
</template>
<script>
  import NavBar from 'components/common/navbar/NavBar'
  import TabMenu from './childComps/tabMenu.vue'
  import Scroll from 'components/common/scroll/Scroll.vue'
  import TabContent from './childComps/TabContent.vue'
  import {
    getCategory,
    getSubcategory
  } from "network/category";
  export default {
    components: {
      NavBar,
      TabMenu,
      TabContent,
      Scroll
    },
    data() {
      return {
        categories: [],
        categoryData: [],
        currentIndex: -1,
        subcategories:{}
      }
    },
    created() {
      this.getCategory()
    },
    methods: {
      /* 
      事件监听相关方法
      */
      // 监听分类菜单切换
      selectItem(index){
        this.getSubcategory(index)
      },
      // 监听图片加载完成
      imgLoad(){
        this.$refs.scroll.refresh();
        // console.log('刷新滚动距离');
      },
      contentScroll(){

      },
      /* 
      网络请求相关方法
      */
      getCategory() {
        getCategory().then(res => {
          // 1.获取分类数据
          console.log(res);
          this.categories = res.data.category.list
          // 2.初始化每个类别的子数据
          // for (let i = 0; i < this.categories.length; i++) {
          //   this.categoryData[i] = {
          //     subcategories: {},
          //   }
          // }
          this.getSubcategory(0)
        })
      },
      getSubcategory(index) {
        this.currentIndex = index
        const maitKey = this.categories[index].maitKey
        getSubcategory(maitKey).then(res => {
          // console.log(res);
          this.subcategories=res.data
        })
      }
    },
  }

</script>
<style scoped>
  .category {
    position: relative;
    height: 100vh;
  }
  .category-nav {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }
  .content1 {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom:49px;
    left:0;
    right: 0;
    width: 100px;
  }
  .content2 {
    overflow-y: hidden;
    position: absolute;
    top: 44px;
    bottom:49px;
    left:100px;
    right: 0;
  }
</style>
