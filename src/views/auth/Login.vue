<template>
  <div>
    <TheHeader/>
    <main class="main">
      <LoginForm/>
    </main>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '@/layouts/TheHeader'
import TheFooter from '@/layouts/TheFooter'
import LoginForm from './LoginForm'
export default {
  name: "Login",
  components: {
    TheHeader,
    TheFooter,
    LoginForm,
  }
}
</script>

<style scoped>

</style>
