<template>
  <div class="star">
    <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item"></span>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    props: {
      score: {
        type: Number,
        default () {
          return 3.8
        }
      }
    },
    computed: {
      itemClasses() {
        const LENGTH = 5; //定义星星个数
        const CLS_ON = 'on'; //定义全星的类名
        const CLS_HALF = 'half'; //定义半星的类名
        const CLS_OFF = 'off'; //定义灰色全星的类名
        let result = []; //首先我们定义一个数组用来存放星星的个数
        let score = Math.floor(this.score * 2) / 2; /*评分乘以2向下取整再除以2就可以算出是否有半星,比如评分是3.6 套用公式就是Math.floor(3.6*2)/2=3.5  */
        let hasDecimal = score % 1 !== 0; //根据变量score返回的值，上面的值是3.5 套用该公式可知hasDecimal ！==0
        let interger = Math.floor(score); //根绝变量score返回的值向下取整得到整数部分的值，也就是全星的个数
        for (let i = 0; i < interger; i++) {
          result.push(CLS_ON); //根据条件遍历interger的值返回响应的全星个数，然后push到result数组中
        }
        if (hasDecimal) {
          result.push(CLS_HALF); //根据hasDecimal返回的值判断是否有半星，有就push到result数组
        }
        while (result.length < LENGTH) { //判断result数组的长度是否小于星星长度，小于就显示灰色全星
          result.push(CLS_OFF);
        }
        return result; //最后返回result数组
      }
    }
  }

</script>
<style scoped>
    .star {
        height: 20px;
    }
  .star span {
      display: inline-block;
      width: 20px;
      height: 20px;
  }
  .on {
    background-image: url(~assets/img/range/all.png);
    background-size:contain;
  }

  .half {
    background-image: url(~assets/img/range/half.png);
    background-size:contain;
  }

  .off {
    background-image: url(~assets/img/range/gray.png);
    background-size:contain;
  }

</style>
