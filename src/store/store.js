/*
*
* vuex布局
* */

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import menus from './modules/menus'

const store = new Vuex.Store({
  modules:{
    menus
  }
});

export default store;
