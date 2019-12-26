import Vue from 'vue'
import Router from 'vue-router'

/*自components文件夹下的vue文件为父级写于此处其余写于内部*/
import loginPage from '@/components/page/login/loginpage'
import menuPage from '@/components/page/model/menupage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',//登录页面的路由要定义为/，这样在项目运行时就可以直接加载
      name: 'loginPage',
      component: loginPage
    },{
      path: '/menu',
      name: 'menuPage',
      component: menuPage
    }
  ]
})
