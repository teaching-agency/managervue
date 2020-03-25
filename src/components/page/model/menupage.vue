<template>
  <div class="container">
    <!--布局②-->
    <el-container style="height: 100%" direction="vertical">
      <el-header>
        <el-menu
          :default-active="horizontalIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <!-- 一级菜单 -->
          <el-menu-item v-for="(item,index) in firstMenus" :index="index.toString()" v-if="item.parentId == null">
            <template >
              <i :class="item.icon"></i>
              <span >{{item.name}}</span>
            </template>
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="202px">
          <el-menu
            :default-active="verticalIndex"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item :index="index.toString()" v-for="(item, index) in verticalData">
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{item.name}}</span>
              </template>
            </el-menu-item>
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
  import {mapGetters,mapActions,mapState} from 'vuex'; //先要引入
  export default {
    name: "menuPage",
    props:[],
    components:{},
    created() {
      this.$store.dispatch('menus/getFirstMenus');
    },
    mounted() {
    },
    data(){
      return{
        horizontalIndex:"0",
        verticalIndex:"0",
        //verticalData:[],
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
      }),
      /*...mapState({ menus: state => state.menus.firstMenus })*/
    },
    methods:{
      handleSelect(key, keyPath) {
        this.verticalData.splice(0);
        for (let i = 0; i < this.firstMenus.length; i++){
          if(this.firstMenus[key].menuId == this. firstMenus[i].parentId){
            this.verticalData.push(this. firstMenus[i]);
          }
        }
      },
      handleOpen(key, keyPath) {
        debugger
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
