/**
 *登录的值、方法封装
 *
 **/

import url from './../../url'

import {get,post,put,deletePrams,patch} from './../../http'

export default {
  //登录接口
  loginParameter(userName,userCode){
    return post(url.login,{
      userName:userName,
      userCode:userCode
    })
  },
}
