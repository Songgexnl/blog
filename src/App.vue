<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
* {
  padding: 0;
  margin: 0;
  font-family: "微软雅黑";
  box-sizing: border-box;
}
body{
 background-color: #f6f6f6;
  overflow-x: hidden;

}
a {
  text-decoration: none;
}
ul,
ol {
  list-style: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
