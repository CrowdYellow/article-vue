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
@import "./styles/reset.css";
@import "./styles/style.css";
html, body, #app {
  width: 100%;
  height: 100%;
}
</style>
