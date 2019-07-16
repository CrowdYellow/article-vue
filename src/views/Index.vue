<template>
  <div>
    <TheHeader title="首页"/>
    <main class="main">
      <div v-for="n in 100">这是第{{ n }} 行</div>
    </main>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '@/layouts/TheHeader'
import TheFooter from '@/layouts/TheFooter'
export default {
  name: 'Index',
  components: {
    TheHeader,
    TheFooter,
  }
}
</script>
