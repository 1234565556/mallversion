<template>
  <div id="app">
    <div class="title">认识一下，伏兵我学的</div>
    <p class="content">Vant 是一个面向移动端的组件库，因此默认只适配了移动端设备，这意味着组件只监听了移动端的 touch 事件，没有监听桌面端的 mouse 事件。
  如果你需要在桌面端使用 Vant，可以引入我们提供的 @vant/touch-emulator，这个库会在桌面端自动将 mouse 事件转换成对应的 touch 事件，使得组件能够在桌面端使用。</p>

  <van-button type="primary">主要按钮</van-button>
  <van-button type="success">成功按钮</van-button>
  <van-button type="default">默认按钮</van-button>
  <van-button type="warning">警告按钮</van-button>
  <van-button type="danger">危险按钮</van-button>

  <van-button plain hairline type="primary">细边框按钮</van-button>
  <van-button plain hairline type="success">细边框按钮</van-button>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .title{
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  }
  .content{
    font-size: 24px;
    line-height: 2;
  }
</style>
