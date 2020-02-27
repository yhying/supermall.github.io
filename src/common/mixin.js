import {
  debounce
} from 'common/utils.js'
export const itemMixin = {
  data() {
    return {

    }
  },
  mounted() {
    //监听图片加载完成事件 
    const refresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemLister = () => {
    //   console.log(111);
      refresh()
    }
    this.$bus.$on('ImgLoad', this.itemLister)
  },
}
