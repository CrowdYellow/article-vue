<template>
  <mt-tabbar v-model="selected">
    <mt-tab-item id="tab-1">
      外卖
    </mt-tab-item>
    <mt-tab-item id="tab-2">
      订单
    </mt-tab-item>
    <mt-tab-item id="tab-3">
      发现
    </mt-tab-item>
    <mt-tab-item id="tab-4">
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
