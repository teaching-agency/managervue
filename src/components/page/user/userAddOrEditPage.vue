<template>
  <el-drawer
    title="我嵌套了 Form !"
    :before-close="handleClose"
    :visible.sync="closeOrOpenFlag"
    direction="rtl"
    :show-close="false"
    custom-class="demo-drawer"
    :wrapperClosable="false"
    ref="drawer"
  >
    <div class="demo-drawer__content">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div class="demo-drawer__footer">
        <el-button @click="cancelForm">取 消</el-button>
        <el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? '提交中 ...' : '确 定' }}</el-button>
      </div>
    </div>
  </el-drawer>

</template>

<script>
    export default {
      props:['closeOrOpenFlag'],
      components:{},
      name: "userAddOrEditPage",
      created(){},
      mounted(){},
      data(){
        return{
          loading: false,
          form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
          },
          formLabelWidth: '80px',
          timer: null,
        }
      },
      methods:{
        //关闭本页面
        cancelForm() {
          this.loading = false;
          this.$emit('closeUserAddOrEditPage',false);
          clearTimeout(this.timer);
        },
        //确定
        handleClose(done) {
          if (this.loading) {
            return;
          }
          this.$MessageBox.messageBoxType('确定要提交表单吗？',"warning").then(res =>{
            this.loading = true;
            this.timer = setTimeout(() => {
              // 动画关闭需要一定的时间
              setTimeout(() => {
                this.cancelForm();
                this.$emit('saveUserInfo',"123445")
              }, 400);
            }, 2000);
          }).catch(err => {
          });
        },
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
