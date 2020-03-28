import Vue from 'vue'
import Router from 'vue-router'

/*自components文件夹下的vue文件为父级写于此处其余写于内部*/
import loginPage from '@/components/page/login/loginpage'
import menuPage from '@/components/page/model/menupage'
import userPage from '@/components/page/user/userPage'
import memberPage from '@/components/page/member/memberPage'
import feedBack from '@/components/page/feedback/feedback'
import feedBackPage from '@/components/page/feedback/feedBackManager/feedBackPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',//登录页面的路由要定义为/，这样在项目运行时就可以直接加载
      name: 'loginPage',
      component: loginPage
    },{
      path: '/menuPage',
      name: 'menuPage',
      component: menuPage,
      children:[{
        path:"",
        redirect:"/user/userPage"  //指定默认进入位置
      },{
        path: '/user/userPage',
        name: 'userPage',
        component: userPage
      },{
        path: '/member/memberPage',
        name: 'memberPage',
        component: memberPage
      },{
        path: '/feedback',
        name: 'feedBack',
        component: feedBack,
        children: [{
          path:"",
          redirect:"/feedback/feedBackPage"  //指定默认进入位置
        },{
          path: '/feedback/feedBackPage',
          name: 'feedBackPage',
          component: feedBackPage,
        }]
      }]
    }
  ]
})
