// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

/*引入messageBox*/
import messageBox from './components/common/util/messageBoxValidate'
Vue.prototype.$MessageBox = messageBox;

Vue.use(Element);

//统一全局变量配置
import GLOBAL from './components/common/util/global'
Vue.prototype.$GLOBAL = GLOBAL;

import store from './store/store'//引入store

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//使用store
  components: { App },
  template: '<App/>'
});

