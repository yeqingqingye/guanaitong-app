<template>
  <div class="slide">
    <div class="slide-children">
      <ul class="slide-menu">
        <li class="slide-menu-item" :data-id="item.id" v-for="(item,index) in slideData">
          <div class="menu-item-title" @click="jump(item)">
            <router-link :to="item.src" class="flex">
              <span class="iconfont icon-shebei">{{item.title}}</span>
              <i class="arrow"></i>
            </router-link>
          </div>
          <ul class=""></ul>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'm-slide',
    data() {
      return {
        slideData: [
          {id: 1, title: '设备管理', status: 0, src: '/device'},
          {id: 2, title: '商品管理', status: 0, src: '/example'},
          {id: 3, title: '订单管理', status: 0, src: '/example'},
          {id: 4, title: '数据统计', status: 0, src: '/example'},
          {id: 5, title: '系统管理', status: 0, src: '/'},
        ]
      }
    },
    methods: {
      jump(obj) {
        eventBus.$emit('eventBusName', obj);
        this.$store.commit('increase', obj);
        eventBus.$emit('abcd', new Date().getTime());

        let curTime = new Date().getTime();
        this.$store.commit('addTimeStamp', curTime);

        console.log(this.$store.getters.isS);
      }
    },
    created() {
    }
  }


</script>

<style scoped lang="less">

  /*@import "../common/iconfont.css";*/

  .slide {
    background: #ffffff;
    width: 200px;
    min-width: 200px;
    max-width: 200px;
    flex: 0 0 200px;
    position: relative;
    transition: all 0.2s;

    .slide-children {
      width: 100%;
      height: 100%;

      .slide-menu {
        border-right: 1px solid #e8e8e8;
        .slide-menu-item {

          .menu-item-title {
            padding-left: 24px;
            height: 40px;
            line-height: 40px;
            padding-right: 34px;
            position: relative;
            font-size: 14px;
            margin-top: 4px;
            margin-bottom: 4px;
            overflow: hidden;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            cursor: pointer;
            white-space: normal;
            display: block;
          }
        }
      }
    }
  }


</style>
