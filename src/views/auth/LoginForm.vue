<template>
  <form action="">
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <div class="mint-cell-wrapper" style="margin-top: .5rem">
      <mt-button type="primary" size="large" @click="login">登陆</mt-button>
    </div>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      phone: '',
      password: '',
    }
  },
  methods: {
    login() {
      this.$axios({
        method:'post',
        url:this.api.login,
        data:this.qs.stringify({
          phone: this.phone,
          password: this.password,
        })
      }).then((response) =>{
        let status = response.data.status;
        let message = response.data.message;
        let data = response.data.data;
        console.log(data);
      }).catch((error) =>{
        console.log(error)
      });
    }
  }
}
</script>

<style scoped>

</style>
