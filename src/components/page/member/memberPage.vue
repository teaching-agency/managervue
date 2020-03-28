<template>
  <div style="background-color: #fff;padding-right: 0.2rem;padding-left: 0.2rem">
    <!--新增、查询条件-->
    <div style="height: 4rem;line-height: 4rem;padding-left: 0.1rem;padding-right: 0.1rem;">
      <div class="spanLeftCss">
        <span class="spanLeftCss">sda名称:</span>
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
        <el-button type="primary" plain icon="el-icon-circle-plus-outline" style="height: 2.45rem">
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
        :row-class-name="tableRowClassName"
        height="465"
        border
        style="width: 100%;">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
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
      <div style="margin-top: 0.84rem;text-align: right;padding-right: 1rem">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "memberPage",
    created(){},
    mounted(){},
    data(){
      return{
        value1: '',
        value2: '',
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
        }]
      }
    },
    methods:{
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      tableRowClassName({row, rowIndex}) {
        if (rowIndex % 2 ===1) {
          return 'warning-row';
        }
        return '';
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../common/util/common";
</style>
