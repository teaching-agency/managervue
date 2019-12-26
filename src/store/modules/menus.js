/**
 * 全局菜单调用
 *
 */

import * as types from './../mutation_type'

import menusParameter from './../../components/api/parameter/menu/menusparameter'

/**
 *
 * @type {{firstMenus: Array, collects: Array}}
 */
const state={
  collects:[],  //初始化一个colects数组
  firstMenus:[]
};

//监听state中的值
const getters={
  renderCollects(state){ //承载变化的collects
    return state.collects;
  },

  renderMenus(state){
    return state.firstMenus;
  }
};

//同步改变值，及不同组件调用获取的值是一样的
const mutations={
  pushCollects(state,items){ //如何变化collects,插入items
    state.collects.push(items)
  },

  [types.GET_FIRST_MENUS](state,value){
    state.firstMenus.push(value);
  }
};

//异步触发mutations中的值
const actions={
  invokePushItems(context,item){ //触发mutations里面的pushCollects ,传入数据形参item 对应到items
    context.commit('pushCollects',item);
  },
  //获取一级标签
  getFirstMenus(content,value){
    menusParameter.getMenus().then(date=>{
      content.commit("GET_FIRST_MENUS",date)
    })
  }
};


export default {
  namespaced:true,//用于在全局引用此文件里的方法时标识这一个的文件名
  state,
  getters,
  mutations,
  actions
}
