/**
 *登录的值、方法封装
 *
 **/

import url from './../../url'

export default {
  //登录接口
  loginParameter(userName,userCode){
    return this.$post(url.login,{
      userName:userName,
      userCode:userCode
    })
  },
}
