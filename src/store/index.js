import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tabList: [],
    ccList: []
  },
  mutations: {  //在mutations定义方法 由commit触发这个方法
    increase(state, newObj) {
      let isRepeat = state.tabList.find(function (item, index) {
        return item.id === newObj.id
      });
      //如果当前tab页有 则去跳转 否则新增
      state.tabList.map(function (item) {
        return item.status = 0;
      });
      if (isRepeat) {
        //这里是有存在tab页的
        state.tabList.map(function (item) {
          if (item.id === isRepeat.id) {
            return item.status = 1
          }
        });
      } else {
        //这里是新增的tab
        newObj.status = 1;
        state.tabList = [...state.tabList, newObj];
      }
    },
    reduce(state, newObj) {
      state.tabList = state.tabList.filter(function (item, index) {
        return item.id !== newObj.id;
      })
    },
    addTimeStamp(state, newTime) {
      state.ccList = [...state.ccList, newTime];
    }
  },
  getters: { //相当于计算属性
    isS(state) {
      return state.ccList.length;
    }
  },
  actions: {} //执行异步操作   有dispatch触发
});

export default store
