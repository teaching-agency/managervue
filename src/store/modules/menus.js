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
  firstMenus:[],
  SecondDefaultMenus:[]
};

//监听state中的值
const getters={
  renderCollects(state){ //承载变化的collects
    return state.collects;
  },

  renderMenus(state){
    return state.firstMenus;
  },
  SecondDefaultMenus(state){
    return state.SecondDefaultMenus;
  }
};

//同步改变值，及不同组件调用获取的值是一样的
const mutations={
  pushCollects(state,items){ //如何变化collects,插入items
    state.collects.push(items)
  },

  [types.GET_FIRST_MENUS](state,value){
    state.firstMenus = value //区分=与push的区别
  },
  [types.GET_SECOND_DEFAULT_MENUS](state,value){
    state.SecondDefaultMenus = value //区分=与push的区别
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
      let SecondMenus = [];
      for (let i = 0; i < date.records.length; i ++){
        let menuId;
        if(value != undefined){
          menuId = date.records[Number(value)].menuId;
        }else {
          menuId = date.records[0].menuId;
        }
        if(date.records[i].parentId == menuId){
          SecondMenus.push(date.records[i]);
        }
      }
      content.commit("GET_FIRST_MENUS",date.records);
      content.commit("GET_SECOND_DEFAULT_MENUS",SecondMenus)
    }).catch(error =>{
      this.$MessageBox.messageType((this.$GLOBAL.CATCH_API + error),'error')
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
