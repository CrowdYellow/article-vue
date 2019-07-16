<template>
  <mt-tabbar v-model="selected" fixed>
    <mt-tab-item id="tab-1">
      <i slot="icon" class="fa fa-home"></i>
      首页
    </mt-tab-item>
    <mt-tab-item id="tab-2">
      <i slot="icon" class="fa fa-star"></i>
      动态
    </mt-tab-item>
    <mt-tab-item id="tab-3">
      <i slot="icon" class="fa fa-comment"></i>
      消息
    </mt-tab-item>
    <mt-tab-item id="tab-4">
      <i slot="icon" class="fa fa-user"></i>
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  name: "TheFooter",
  data () {
    return {
      selected: "tab-1",
    }
  }
}
</script>

<style scoped>

</style>
