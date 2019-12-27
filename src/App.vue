<template>
  <div id="app">
    <!--去除不要的原vue图片-->
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Microsoft YaHei UI Light";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/*去除body存在的边距*/
body{
  margin: 0;
  padding: 0;
}
/*沾满全屏*/
html,body,#app{
  height: 100%;
  width: 100%;
}
</style>
