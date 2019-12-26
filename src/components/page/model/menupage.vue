<template>
  <div>
    <ul>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </ul>
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

        ...mapGetters('menu',{
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
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
