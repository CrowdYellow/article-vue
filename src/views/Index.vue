<template>
  <div>
    <TheHeader/>
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
