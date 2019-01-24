<template>

  <div>
    <div style="position: fixed;z-index: 9999">
      <input type="text" v-model="val">
      <button @click="message">message</button>
    </div>
    <router-view/>
  </div>

</template>

<script>
  import io from 'socket.io-client'

  export default {
    data() {
      return {
        socket: '',
        val: '',
      }
    },
    methods: {
      message() {
        console.log(this.socket);
        this.socket.emit('message', this.val);
        this.val = '';
      },
    },
    created() {
      this.socket = io.connect('http://localhost:4002');

      // console.log(socket);

      // socket.emmit()用户客户端向服务端发送消息，服务端与之对应的是socket.on()来接收信息。
      // socket.emmit('client message', {msg: 'hi, server'});

      // socket.on()用于接收服务端发来的消息
      this.socket.on('id', res => {
        console.log('client connect server', res);
      });
      this.socket.on('message', res => {
        console.log('client disconnect', res);
      });
      this.socket.on('number', res => {
        console.log('client disconnect', res);
      });
    }
  }
</script>

<style lang="less">
  @import "./assets/less/def.less";
</style>
