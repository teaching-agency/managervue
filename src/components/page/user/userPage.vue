<template>
  <div style="background-color: #fff;padding-right: 0.2rem;padding-left: 0.2rem">
    <!--新增、查询条件-->
    <div style="height: 4rem;line-height: 4rem;padding-left: 0.1rem;padding-right: 0.1rem;">
      <div class="spanLeftCss">
        <span class="spanLeftCss">名称:</span>
        <span class="spanRightInputCss">
                  <el-input v-model="input" placeholder="请输入名称" clearable></el-input>
                </span>
        <span class="spanLeftCss">企业:</span>
        <span class="spanRightInputCss">

                  <el-input v-model="input" placeholder="请输入企业" clearable></el-input>
                </span>
        <span class="spanLeftCss">状态:</span>
        <span class="spanRightInputCss">

                  <el-input v-model="input" placeholder="请输入状态" clearable></el-input>
                </span>
        <span class="spanLeftCss">筛选日期:</span>
        <span class="spanRightCss">
                  <el-date-picker
                    v-model="value1"
                    style="width: 14rem;color: #999"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                  </el-date-picker>
                  </span>
      </div>
      <div style="display:inline;float: right;padding-right: 0.6rem">
        <el-button type="primary" plain icon="el-icon-search" style="height: 2.45rem">
          搜索
        </el-button>
        <el-button type="primary" @click="closeOrOpenUserPage()" plain icon="el-icon-circle-plus-outline" style="height: 2.45rem">
          新增
        </el-button>
      </div>
    </div>
    <div class="borderLine"></div>
    <!--主内容-->
    <div style="padding: 0.6rem;line-height: normal">
      <el-table
        :header-cell-style="{background:'#e9f3ff'}"
        :data="tableData"
        empty-text="正在加载中..."
        :row-class-name="tableRowClassName"
        height="455"
        border
        style="width: 100%;">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
            <template slot-scope="scope">
              <!-- 悬浮提示 -->
              <el-tooltip>
                <div slot="content">{{scope.row.date}}</div>
                <div>{{scope.row.date}}</div>
              </el-tooltip>
            </template>
          </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
          <template slot-scope="scope">
            <!-- 悬浮提示 -->
            <el-tooltip>
              <div slot="content">{{scope.row.name}}</div>
              <div>{{scope.row.name}}</div>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
          <template slot-scope="scope">
            <!-- 悬浮提示 -->
            <el-tooltip>
              <div slot="content">{{scope.row.address}}</div>
              <div>{{scope.row.address}}</div>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--分页-->
      <div style="margin-top: 0.7rem;text-align: right;padding-right: 1rem">
        <!-- 底部分页 -->
        <div class="pagination">
          <el-pagination @size-change="handleSizeChange"
                         @current-change="currentChange"
                         :current-page="currentPage"
                         :page-sizes="[10,  30, 50]"
                         :page-size="10"
                         layout="total, sizes, prev, pager, next, jumper"
                         :total="total">
          </el-pagination>
          </div>
      </div>
    </div>
    <!--渲染子页面区域-->
      <userAddOrEditPage :closeOrOpenFlag = 'userAddOrEditPageFlag' @saveUserInfo="successUserInfo" v-on:closeUserAddOrEditPage="closeOrOpenUserPage"></userAddOrEditPage>
  </div>
</template>

<script>
  import userAddOrEditPage from'@/components/page/user/userAddOrEditPage'
    export default {
      name: "userPage",
      created(){
        this.total = 200
      },
      mounted(){},
      props:[],
      components:{
        userAddOrEditPage
      },
      data(){
        return{
          fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          currentPage: 1, //当前页
          pageRows:10,    //每页显示数
          total:0,         //数据总条数
          userAddOrEditPageFlag:false,
          value1: '',
          input:"",
          tableData: [{
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-08',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-06',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-07',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-07',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-07',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-07',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },{
            date: '2016-05-07',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },{
            date: '2016-05-07',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }]
        }
      },
      methods:{
        /**页码切换**/
        currentChange(page) {
          this.currentPage= page
          //this.getDistributorList();
        },
        /**分页条数**/
        handleSizeChange(val){
          this.pageRows = val;
          //this.getDistributorList();
        },
        /**修改**/
        handleEdit(index, row) {
          console.log(index, row);
        },
        /**删除**/
        handleDelete(index, row) {
          console.log(index, row);
        },
        /**隔行加色**/
        tableRowClassName({row, rowIndex}) {
          if (rowIndex % 2 ===1) {
            return 'warning-row';
          }
          return '';
        },
        /**开关新增/修改页面**/
        closeOrOpenUserPage(){
          this.userAddOrEditPageFlag = !this.userAddOrEditPageFlag;
        },
        /**子页面成功操作之后，可传值方法**/
        successUserInfo(value){
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "../../common/util/common";
</style>
