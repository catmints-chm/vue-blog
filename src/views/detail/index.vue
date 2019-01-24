<template>
  <div>
    <awei-head/>
    <div class="index">
      <div>
        <h1>{{data.title}}</h1>
      </div>
      <br>
      <br>
      <div v-html="data.content" class="markdown-body"></div>
    </div>
    <awei-footer/>
  </div>
</template>

<script>
  import Head from '@/components/Head'
  import Footer from '@/components/Footer'
  import qs from 'qs'

  export default {
    components: {
      'awei-head': Head,
      'awei-footer': Footer,
    },
    data() {
      return {
        id: this.$route.query.id,
        data: {},
      }
    },
    methods: {
      getDetail() {
        let dat = {
          id: this.id,
        };
        this.$Axios.get(`/yun/blog/detail?${qs.stringify(dat)}`).then(res => {
          if (res.code === 200) {
            this.data = res.data;
          } else {
            console.log(res.message);
          }
        });
      },
    },
    created() {
      this.getDetail();
    }
  }
</script>
<style lang="less" scoped>
  * {
    transition: all .3s;
  }

  .index {
    width: 1240px;
    margin: 0 auto;
    padding: 100px 0;
  }
</style>
