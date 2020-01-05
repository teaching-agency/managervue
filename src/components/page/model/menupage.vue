<template>
  <div class="container">
    <!--布局②-->
    <el-container style="height: 100%" direction="vertical">
      <el-header>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">客户管理</el-menu-item>
          <el-menu-item index="2">资源维护</el-menu-item>
          <el-menu-item index="3">下载中心</el-menu-item>
          <el-menu-item index="4">个人中心</el-menu-item>
          <el-menu-item index="5">系统设置</el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="202px">
              <el-menu
                :default-active="index"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-submenu index="1" v-if="this.index.substring(0,1) == 1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>客户管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">客户列表</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2" v-if="this.index.substring(0,1) == 2">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>下载中心</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="2-1">标签查询</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
        </el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'; //先要引入
    export default {
      name: "menuPage",
      props:[],
      components:{},
      created() {},
      mounted() {},
      data(){
        return{
          activeIndex2:"1",
          index:"1-1"
        }
      },
      computed:{
        /*
          ...mapState({  //这里的...是超引用，ES6的语法，意思是state里有多少属性值我可以在这里放多少属性值
          isShow:state=>state.footerStatus.showFooter //注意这些与上面的区别就是state.footerStatus,
                                                      //里面定义的showFooter是指footerStatus.js里state的showFooter
          }),
        */
        //你也可以用下面的mapGetters来获取isShow的值，貌似下面的更简洁
        /*~~~~推荐使用getter
        ...mapGetters('footerStatus',{ //footerStatus指的是modules文件夹下的footerStatus.js模块
             isShow:'isShow' //第一个isShow是我自定义的只要对应template里v-if="isShow"就行，
                             //第二个isShow是对应的footerStatus.js里的getters里的isShow
        */

        /*
        * ...mapActions('collection',[ //collection是指modules文件夹下的collection.js
        * 'invokePushItems'  //collection.js文件中的actions里的方法，在上面的@click中执行并传入实参])
        * */

        ...mapGetters('menus',{
          firstMenus:'renderMenus'
        }),
    },
    methods:{
      handleSelect(key, keyPath) {
        this.index = key.toString() + "-" + "1";
        console.log(key, keyPath,this.index);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }

    },
    watch:{

    },
    filters:{

    }
  }
</script>

<style scoped lang="scss">
  @import "../../common/util/common";
</style>
