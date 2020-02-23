<template>
  <div>
    <Swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" @load="imgLoad">
        </a>
      </swiper-item>
    </Swiper>
  </div>
</template>
<script>
  import {
    Swiper,
    SwiperItem
  } from 'components/common/swiper/index.js'
  export default {
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      banners: {
        type: Array,
        default () {
          /* 必须为函数 */
          return []
        }
      }
    },
    data() {
      return {
        isload: false,
      }
    },
    methods: {
      imgLoad() {
        if (!this.isload) {
          this.$emit('imgLoad')
          this.isload=true
        }
      }
    },
  }

</script>
<style scope>
</style>
