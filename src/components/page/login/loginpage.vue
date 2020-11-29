<!--
  登录页
-->
<template>
  <div class="login-box">
    <!-- 通过:rules="loginFormRules"来绑定输入内容的校验规则 -->
    <el-form :rules="loginFormRules" ref="loginForm" :model="loginForm" label-position="right" label-width="auto" show-message>
      <span class="login-title">欢迎登录</span>
      <div style="margin-top: 5px"></div>
      <el-form-item label="账号" prop="loginName">
        <el-col :span="22">
          <el-input type="text" v-model="loginForm.loginName" placeholder="请输入手机号/身份证号" ></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="密码" prop="loginPassword">
        <el-col :span="22">
          <el-input type="password" v-model="loginForm.loginPassword" placeholder="请输入密码" ></el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="loginSubmit('loginForm')">登录</el-button>
        <el-button type="primary" @click="onRegit('loginForm')">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import loginParameter from "@/components/api/parameter/login/loginparameter"
    export default {
        name: "loginPage",
        props:[],
        components:{},
        //创建之初调用
        created(){
        },
        //页面初始之后调用
        mounted(){

        },
        //全局值
        data(){
          return{
            loginForm: {
              loginName: '',
              loginPassword: ''
            },
            // 表单验证，需要在 el-form-item 元素中增加 prop 属性
            loginFormRules: {
              loginName: [
                {required: true, message: '账号不可为空', trigger: 'blur'}
              ],
              loginPassword: [
                {required: true, message: '密码不可为空', trigger: 'blur'}
              ]
            }
          }
        },
        //普通方法
        methods:{
          //登录方法
          loginSubmit(formName) {
            // 为表单绑定验证功能
            this.$refs[formName].validate((valid) => {
              if (valid) {
                // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
                const userName = this.loginForm.loginName;
                const userCode = this.loginForm.loginPassword;
                loginParameter.loginParameter(userName, userCode).then(res =>{
                  debugger
                  if (res.code == '0000') {
                    this.$router.replace("/menuPage");
                  }
                })
              } else {
                return false;
              }
            });
          }
        },
        //监听
        watch:{

        },
        //过滤
        filters:{

        }
    }
</script>

<style lang="scss" scoped>
  @import "../../common/util/common";

</style>
