<!--
  登录页
-->
<template>
    <div>
      成功进入登录页面！！！！！
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
          //this.login();
        },
        //页面初始之后调用
        mounted(){

        },
        //全局值
        data(){
          return{
            name:"",
          }
        },
        //普通方法
        methods:{
          //登录方法
          login(){
            //严格要求接口方法体只能写传入值的别名，不得通过this等方法指向值
            var userName = "";
            var userCode = "";

            loginParameter(userName,userCode).then(data => {
              console.log(data);
            })
          },

        },
        //监听
        watch:{

        },
        //过滤
        filters:{

        }
    }
</script>

<style scoped>

</style>
