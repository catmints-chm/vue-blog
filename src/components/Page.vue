<template>
  <div class="page">

    <a class="prev" :href="`/?pageIndex=${pageIndex - 1}`" v-if="pageIndex !== 1">
      <i class="iconfont a-blog-left"></i>
      <span>前一页</span>
    </a>

    <a href="/?pageIndex=1" v-if="prev" :class="{active: 1 === pageIndex}">{{1}}</a>

    <a class="ban" href="javascript:;" v-if="left">...</a>

    <a :href="`/?pageIndex=${index}`" :class="{active: index === pageIndex}" v-for="(index, i) in showPage()" :key="i">{{index}}</a>

    <a class="ban" href="javascript:;" v-if="right">...</a>

    <a :href="`/?pageIndex=${pageCount}`" v-if="next" :class="{active: this.pageCount === pageIndex}">{{this.pageCount}}</a>

    <a class="next" :href="`/?pageIndex=${pageIndex + 1}`" v-if="pageCount !== pageIndex">
      <span>后一页</span>
      <i class="iconfont a-blog-right"></i>
    </a>

  </div>
</template>
<script>
  export default {
    props: {
      pageCount: Number,
      pageIndex: Number,
    },
    data() {
      return {
        left: false,
        right: false,
        prev: false,
        next: false,
      }
    },
    methods: {
      showPage() {
        this.left = this.pageIndex - 3 > 1;
        this.right = this.pageIndex + 3 < this.pageCount;
        this.prev = this.pageIndex - 3 >= 1;
        this.next = this.pageIndex + 3 <= this.pageCount;
        let list = [];
        for (let i = 1; i <= this.pageCount; i++) {
          (i > this.pageIndex - 3 && i < this.pageIndex + 3) && list.push(i);
        }
        return list;
      }
    },
  }
</script>
<style lang="less" scoped>
  * {
    transition: all .3s;
  }

  .page {
    text-align: center;
    a {
      text-align: center;
      width: 30px;
      font-family: Montserrat-Medium;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 14px;
      display: inline-block;
      margin: 10px 5px;
      position: relative;
      text-decoration: none;
      &.active {
        color: #35CC62;
        font-weight: bold;
        &:after {
          content: '';
          display: block;
          width: 30px;
          height: 2px;
          background-color: #35CC62;
          position: absolute;
          bottom: -10px;
          left: calc(50% - 15px);
        }
      }
      &:hover:not(.ban) {
        color: #35CC62;
        span {
          color: #35CC62;
        }
        i {
          color: #35CC62;
        }
      }
      span {
        font-size: 14px;
        font-family: Montserrat-Medium;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 14px;
      }
      i {
        font-size: 30px;
        vertical-align: middle;
      }
    }
    .prev, .next {
      width: 100px;
    }
    .ban {
      cursor: initial;
    }
  }

</style>
