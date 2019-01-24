<template>
  <div class="head">
    <div class="bg">
      <div class="mask"></div>
    </div>
    <div class="cont">
      <div class="bar">

        <div class="logo">
          <router-link to="/">
            <img src="./img/logo.png" alt="">
            <h1 style="display: none">布什兔</h1>
          </router-link>
        </div>

        <div class="menu">
          <router-link class="active" to="/">博客</router-link>
          <router-link to="/">聊天室</router-link>
          <router-link to="/">吉姆音乐厅</router-link>
          <router-link to="/">在线云盘</router-link>
          <router-link to="/">更多想法~</router-link>
        </div>
      </div>

      <div class="motto">
        <h2>Event Classic Sidebar</h2>
        <!--<h2>没有与生俱来的智慧，就要积极进取的学习</h2>-->
      </div>

      <div class="nav">
        <router-link class="active" to="/">首页</router-link>&ensp;/&ensp;
        <router-link to="/">时间轴</router-link>&ensp;/&ensp;
        <router-link to="/">关于</router-link>
      </div>

    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="less" scoped>
  * {
    transition: all .3s;
  }

  .head {
    min-width: 1240px;
    width: 100%;
    height: 400px;
    .bg {
      width: 100%;
      height: 400px;
      background: url('./img/bg.jpg') no-repeat center;
      background-size: 1920px auto;
      .mask {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .4);
      }
    }
    .cont {
      width: 1240px;
      height: 400px;
      margin: 0 auto;
      position: absolute;
      top: 0;
      left: calc(50% - 620px);
      .bar {
        display: flex;
        .logo {
          flex: 1;
          img {
            width: 40px;
            margin-top: 25px;
          }
        }
        .menu {
          margin-top: 35px;
          a {
            font-size: 14px;
            font-family: Montserrat-Medium;
            font-weight: 500;
            color: rgba(255, 255, 255, .5);
            margin: 0 10px;
            text-decoration: none;
            &:hover, &.active {
              position: relative;
              color: rgba(255, 255, 255, 1);
              &:after {
                position: absolute;
                left: calc(50% - 10px);
                bottom: -10px;
                content: '';
                display: block;
                width: 20px;
                height: 1px;
                background-color: #ffffff;
              }
            }
          }
        }
      }
      .motto {
        margin-top: 100px;
        text-align: center;
        h2 {
          margin: 0;
          font-size: 36px;
          font-family: Montserrat-Regular;
          font-weight: 600;
          color: rgba(255, 255, 255, 1);
        }
      }
      .nav {
        margin-top: 20px;
        text-align: center;
        color: rgba(255, 255, 255, .5);

        a {
          display: inline-block;
          color: rgba(255, 255, 255, .5);
          text-decoration: none;
          font-size: 14px;
          &:hover, &.active {
            position: relative;
            color: rgba(255, 255, 255, 1);
          }
        }
      }
    }
  }
</style>
