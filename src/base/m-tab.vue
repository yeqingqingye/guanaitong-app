<template>
  <div class="tab-list">
    <ul class="flex">
      <li class="tab-item flex flex_center" v-for="(item,index) in tabList" @click="choose(index)"
          :class="((curIndex === index || item.status === 1)?'active':'')">
        <span>{{item.title}}</span>
        <i class="close-arrow" @click.stop="reduce(item)"></i>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: 'm-tab',
    data() {
      return {
        curIndex: null
      }
    },
    computed: {
      tabList() {
        return this.$store.state.tabList
      }
    },
    methods: {
      reduce(obj) {
        this.$store.commit('reduce', obj);
      },
      choose(curIndex) {
        this.tabList.map(function (item) {
          return item.status = 0;
        });
        this.curIndex = curIndex;
      }
    },
    created() {
      eventBus.$on('eventBusName', function (val) {
        //console.log(val);
      });

      eventBus.$on('abcd', function (val) {
        //console.log(val);
      })
    }
  }

</script>

<style scoped lang="less">

  .tab-list {
    border-bottom: 1px solid #e8e8e8;
    .tab-item {

      margin-right: 2px;
      border: 1px solid #e8e8e8;
      border-bottom: 0;
      border-radius: 4px 4px 0 0;
      background: #fafafa;
      padding: 0 16px;
      line-height: 38px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.65);
      transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      cursor: pointer;

      &.active {
        background: #ffffff;
        margin-bottom: -1px;
        color: #1890ff;
      }

      &:hover {
        color: #1890ff;
      }

      .close-arrow {
        background: url("../common/alert-close.png") no-repeat left;
        display: inline-block;
        background-size: contain;
        width: 15px;
        height: 15px;
        margin-left: 5px;
      }
    }
  }

</style>
