<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*,
body {
  margin: 0;
  padding: 0;
}
html,
body {
  font-family: "微软雅黑";
  width: 100%;
  height: 100%;
  font-size: 14px;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}
img {
  border: 0 none;
  width: 100%;
  height: auto;
  margin: auto;
  letter-spacing: 0;
}
a {
  text-decoration: none;
}
a:link {
  color: #37a;
}
a:visited {
  color: #666699;
}
ul {
  list-style-type: none;
}
span {
  display: inline-block;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body .page {
  max-width: 650px;
}
.page {
  padding: 4rem 5% 0;
  background: #fff;
  margin: 0 auto;
  overflow-x: hidden;
}
.tip-text{
  color: #999;
  text-align: center;
  width: 100%;
  line-height: 40px;
}
</style>
