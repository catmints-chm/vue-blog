<template>
  <div>
    <awei-head/>
    <div class="index">
      <div class="cont">
        <div class="left">
          <div class="list">
            <div class="item" v-for="(item, i) in data.list" :key="i">
              <div class="img">
                <router-link :to="`/detail?id=${item.id}`">
                  <img :src="item.img || 'https://source.unsplash.com/random/442x294'" alt="">
                </router-link>
              </div>
              <div class="txt">
                <div class="info">
                  <i class="iconfont a-blog-date"></i>
                  <span>{{item.create_time}}</span>
                  <i class="iconfont a-blog-address"></i>
                  <span>重庆</span>
                </div>
                <div class="title">
                  <router-link :to="`/detail?id=${item.id}`">{{item.title}}</router-link>
                </div>
                <div class="more">
                  <router-link :to="`/detail?id=${item.id}`">阅读更多</router-link>
                  <i class="iconfont a-blog-right"></i>
                </div>
              </div>
            </div>
          </div>
          <awei-page :pageCount="data.pageCount" :pageIndex="data.pageIndex"/>
        </div>
        <div class="right">
          <img src="./img/2.png" alt="">
        </div>
      </div>
    </div>

    <awei-footer/>
  </div>
</template>

<script>
  import Head from '@/components/Head'
  import Footer from '@/components/Footer'
  import Page from '@/components/Page'
  import qs from 'qs'

  export default {
    components: {
      'awei-head': Head,
      'awei-footer': Footer,
      'awei-page': Page,
    },
    data() {
      return {
        pageIndex: this.$route.query.pageIndex || 1,
        pageSize: this.$route.query.pageSize || 8,
        data: {
          list: [],
          pageCount: 0,
          pageIndex: 0,
        },
      }
    },
    methods: {
      getList() {
        let dat = {
          pageIndex: this.pageIndex,
          pageSize: this.pageSize,
        };
        this.$Axios.get(`/yun/blog/list?${qs.stringify(dat)}`).then(res => {
          if (res.code === 200) {
            this.data = res.data;
          } else {
            console.log(res.message);
          }
        });
      },
    },
    created() {
      this.getList();
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
    .cont {
      display: flex;
      .left {
        width: 916px;
        .list {
          &:after {
            content: '';
            display: block;
            clear: both;
          }
          .item {
            padding: 0 0 20px 0;
            background: rgba(249, 250, 252, 1);
            float: left;
            margin-right: 32px;
            margin-bottom: 40px;
            &:nth-child(2n) {
              margin-right: 0;
            }
            .img {
              width: 442px;
              height: 294px;
              img {
                width: 442px;
                height: 294px;
              }
            }
            .txt {
              padding: 0 20px;
              width: 442px;
              .info {
                margin-top: 20px;
                margin-left: -8px;
                span {
                  font-size: 14px;
                  font-family: Montserrat-Medium;
                  font-weight: 500;
                  color: rgba(153, 153, 153, 1);
                  line-height: 23px;
                  vertical-align: middle;
                }
                i {
                  font-size: 30px;
                  vertical-align: middle;
                }
              }
              .title {
                margin-top: 10px;
                a {
                  font-size: 20px;
                  font-family: Montserrat-Regular;
                  font-weight: 400;
                  color: rgba(51, 51, 51, 1);
                  line-height: 32px;
                  text-decoration: none;
                  &:hover {
                    color: #35CC62;
                  }
                }
              }
              .more {
                display: inline-block;
                margin-top: 20px;
                &:hover {
                  a, i {
                    color: #35CC62;
                  }
                }
                a {
                  font-size: 14px;
                  font-family: Montserrat-Medium;
                  font-weight: 500;
                  line-height: 14px;
                  color: #999999;
                  vertical-align: middle;
                }
                i {
                  color: #999999;
                  font-size: 20px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
      .right {
        flex: 1;
        margin-left: 50px;
        img {
          width: 274px;
        }
      }
    }
  }
</style>
