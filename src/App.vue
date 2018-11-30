<template>
  <div id="app">
    <div class="container">
      <m-header></m-header>
      <div class="content">
        <div class="content-con flex">
          <m-slide @cc="curObj"></m-slide>
          <div class="main" @click="change">
            <m-tab></m-tab>
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

  import mHeader from './base/m-header';
  import mSlide from './base/m-slide';
  import mTab from './base/m-tab';

  export default {
    name: 'App',
    components: {
      'm-header': mHeader,
      'm-slide': mSlide,
      'm-tab': mTab
    },
    data() {
      return {}
    },
    methods: {
      change() {
        eventBus.$emit('test', new Date().getTime());
      },
      curObj(obj) {
        console.log(obj);  //这样通过自定义事件  ==>感觉貌似不好使
      }
    }
  }

</script>

<style lang="less">

  @import "./common/common.css";

  #app, .container {
    width: 100%;
    height: 100%;
  }

  .container {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex: auto;
    flex: auto;
    background: #f0f2f5;
  }

  .content {
    flex: auto;
    padding: 0 50px;
    .content-con {
      background: #ffffff;
      padding: 24px 0;
      -ms-flex-direction: row;
      flex-direction: row;
      .main {
        padding: 0 24px;
        width: 100%;
      }
    }
  }


</style>
