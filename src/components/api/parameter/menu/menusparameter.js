/**
 *菜单栏
 *
 **/

import url from './../../url'

import {get,post,put,deletePrams,patch} from './../../http'

export default {
  //登录接口
  getMenus(){
    return post(url.getMenu)
  },
}
