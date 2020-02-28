import {
  debounce
} from 'common/utils.js'
import BackTop from 'components/content/backTop/BackTop'
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
export const backTop = {
  components: {
    BackTop
  },
  data() {
    return {
      isBackTop: false,
    }
  },
  methods: {
    // 监听回到顶部事件
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
  },
}
