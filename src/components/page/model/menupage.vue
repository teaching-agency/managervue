<template>
  <div class="container">
    <!--布局②-->
    <el-container style="height: 100%" direction="vertical">
      <el-header>Header{{firstMenus}}</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
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
