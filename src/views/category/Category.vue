<template>
  <div class="category">
    <nav-bar class="category-nav">
      <div slot="center">分类</div>
    </nav-bar>
    <div class="content">
      <!-- <tab-menu :categories="categories"></tab-menu> -->

    </div>
  </div>
</template>
<script>
  import NavBar from 'components/common/navbar/NavBar'

  import {getCategory, getSubcategory} from "network/category";
  export default {
    components: {
      NavBar
    },
    data() {
      return {
        categories:[],
        subcategories:{},
        categoryData:[]
      }
    },
    created() {
      this._getCategory()
    },
    methods: {
            /* 
      事件监听相关方法
      */

            /* 
      网络请求相关方法
      */
      _getCategory() {
		  getCategory().then(res => {
        // 1.获取分类数据
        console.log(res);
		    this.categories = res.data.category.list
        // 2.初始化每个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
          }
        }
        console.log(this.categoryData);
        console.log(this.subcategories);
        // this._getSubcategories(0)
      })
    },
    },
  }

</script>
<style scoped>
  .category-nav {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }

</style>
