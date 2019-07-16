<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
$fa-font-path: "~font-awesome/fonts/";
@import "./styles/reset.css";
@import "./styles/style.css";
@import "~font-awesome/scss/font-awesome";
html, body, #app {
  width: 100%;
  height: 100%;
}
main.main{
  padding-top: 3.125rem;
  padding-bottom: 3.125rem;
  overflow: hidden;
  overflow-x: auto;
}
.mint-tab-item-icon {
  width: 24px;
  height: 24px;
  margin: 0 auto 0;
}
</style>
