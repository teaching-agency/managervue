<template>
  <div class="container">
    <!--布局②-->
    <el-container style="height: 100%" direction="vertical">
      <el-header>
        <el-image :src="imgUrl" class="logoClass" />
        <el-menu
          :default-active="horizontalIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#00213a"
          text-color="#b0bed9"
          style="margin-left: 300px"
          active-text-color="#fff">
          <!-- 一级菜单 -->
          <el-menu-item v-for="(item,index) in firstMenus" :index="index.toString()" v-if="item.parentId == null" :key="index">
            <template >
              <i :class="item.icon"></i>
              <span >{{item.name}}</span>
            </template>
          </el-menu-item>
          <!--名称-->
          <el-submenu :index="firstMenus.length.toString()" style="float: right;">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span>王明智</span>
            </template>
              <template>
                <div align="center">
                  <p ><span style="color: #409EFF">机构名: </span><span style="color: #fff">教育机构公司</span></p>
                  <span class="spanStatus" @click="dropOut">退出登录</span>
                </div>
              </template>
          </el-submenu>
        </el-menu>
      </el-header>
      <!--容器部位-->
      <el-container>
        <!--左部位-->
        <el-aside width="202px">
          <el-menu
            :default-active="$route.path"
            router
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#00214a"
            text-color="#b0bed9"
            active-text-color="#fff">
            <el-menu-item :index="item.path" v-for="(item, index) in verticalData" :key="index">
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{item.name}}</span>
              </template>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <!--右部位-->
        <el-container>
          <!--主部位-->
          <el-main style="padding-right: 10px">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </el-main>
          <el-footer>©安心教育股份有限公司</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'; //先要引入
  import imgUrl from '@/assets/image/logo.jpg'   //图片使用导入
  export default {
    name: "menuPage",
    props:[],
    components:{},
    created() {
      console.log(this.$route.path)
      this.$store.dispatch('menus/getFirstMenus');
    },
    mounted() {
    },
    data(){
      return{
        horizontalIndex:"0",
        verticalIndex:"0",
        imgUrl,
      }
    },
    computed:{
      /*...mapState({  //这里的...是超引用，ES6的语法，意思是state里有多少属性值我可以在这里放多少属性值
      isShow:state=>state.menus.firstMenus //注意这些与上面的区别就是state.footerStatus,
                                                  //里面定义的showFooter是指footerStatus.js里state的showFooter
      }),*/
      //你也可以用下面的mapGetters来获取isShow的值，貌似下面的更简洁
      /*~~~~推荐使用getter
      ...mapGetters('footerStatus',{ //footerStatus指的是modules文件夹下的footerStatus.js模块
           isShow:'isShow' //第一个isShow是我自定义的只要对应template里v-if="isShow"就行，
                           //第二个isShow是对应的footerStatus.js里的getters里的isShow
      */

      ...mapGetters('menus',{
        firstMenus:'renderMenus',
        verticalData:'SecondDefaultMenus'
      })
    },
    methods:{
      ...mapActions('menus',[ //collection是指modules文件夹下的collection.js
        'getFirstMenus'  //collection.js文件中的actions里的方法，在上面的@click中执行并传入实参
      ]),
      handleSelect(key, keyPath) {
        let menuList = [];
        this.verticalData.splice(0);
        for (let i = 0; i < this.firstMenus.length; i++){
          if(this.firstMenus[i].parentId == this.firstMenus[Number(key)].menuId){
            menuList.push(this.firstMenus[i].path);
          }
        }
        this.getFirstMenus(key);
        this.$router.push(menuList[0])
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      /*退出*/
      dropOut(){
        this.$MessageBox.messageBoxType(this.$GLOBAL.DROP_OUT_WARNING).then(res =>{
          this.$router.replace("/");
          this.$MessageBox.messageType(this.$GLOBAL.SUCCESS_DROP_OUT,'success')
        }).catch(err => {
          })//这个.catch()删除掉就会打印Uncaught (in promise) cancel
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
<style lang="scss">
  .spanRightCss{
    .el-range-separator{
      color: #999;
    }
  }
  .el-table .warning-row {
    background: #eee;
  }

  .el-menu--horizontal>.el-menu-item.is-active:focus{
     background-color: #229fff !important
   }
  .el-menu-item.is-active:focus{
    background-color: #229fff !important
  }
  .el-menu--horizontal>.el-menu-item.is-active{
    background-color: #229fff !important
  }
  .el-menu-item.is-active{
    background-color: #229fff !important
  }
  .el-menu--horizontal>.el-menu-item{
    border-bottom:  #229fff !important;
  }
  .el-menu-item:hover{
    color: #fff !important;
  }
</style>
