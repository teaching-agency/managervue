import Vue from 'vue'
import Router from 'vue-router'

/*自components文件夹下的vue文件为父级写于此处其余写于内部*/
import loginPage from '@/components/page/login/loginpage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'loginPage',
      component: loginPage
    }
  ]
})
