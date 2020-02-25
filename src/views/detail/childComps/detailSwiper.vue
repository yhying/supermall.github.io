<template>
  <div>
    <Swiper class="detail-swiper">
      <swiper-item v-for="item in TopImages">
          <img :src="item">
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
      TopImages: {
        type: Array,
        default () {
          /* 必须为函数 */
          return []
        }
      }
    },
    data() {
      return {
      }
    },
    methods: {
    },
  }

</script>
<style scoped>
    .detail-swiper {
        height: 300px;
        overflow: hidden;
    }
</style>
