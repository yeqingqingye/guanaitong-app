<template>

  <div class="device">

    {{data}}

    112222111111111111111111111

    <button @click="jump">点我啊</button>

  </div>

</template>

<script>

  //import axios from 'axios';
  import {getParameter} from '../common/index';
  import qs from 'qs';

  export default {
    name: "device",
    data() {
      return {obj: {}, data: []}
    },
    created() {

      let _this = this;
      eventBus.$on('eventBusName', function (val) {
        _this.obj = val;
      });

      this.$axios({
        method: 'post',
        url: '/api/s/essay/appArticle/catlogs',
        data: qs.stringify({channel: 'HUAXIA'}),
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded'
      })
        .then(function (res) {

          let {data} = res;
          _this.data = data.data;
        })
        .then(function (err) {
          //console.log(err);
        });

      /*this.$axios({
        method: 'post',
        url: '/examination/enterpriseMng/queryGatCustomerList',
        data: qs.stringify({pageNo: 1, pageSize: 10}),
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded'
      })
        .then(function (res) {

          let {data} = res;
          _this.data = data.data;
        })
        .then(function (err) {
          //console.log(err);
        });

      this.$axios({
        method: 'post',
        url: '/orderMng/queryGatCenterSubOption',
        //data: qs.stringify({pageNo: 1, pageSize: 10}),
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded'
      })
        .then(function (res) {

          let {data} = res;
          _this.data = data.data;
        })
        .then(function (err) {
          //console.log(err);
        });*/

    },
    methods: {
      jump() {
        //window.location.href = 'http://mint-ui.github.io/#!/zh-cn'
      }
    }
  }

</script>

<style scoped></style>
