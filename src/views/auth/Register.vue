<template>
  <div>
    <TheHeader/>
    <main class="main">
      <RegisterForm/>
    </main>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '@/layouts/TheHeader'
import TheFooter from '@/layouts/TheFooter'
import RegisterForm from './RegisterForm'
export default {
  name: "Register",
  components: {
    TheHeader,
    TheFooter,
    RegisterForm,
  }
}
</script>

<style scoped>

</style>
