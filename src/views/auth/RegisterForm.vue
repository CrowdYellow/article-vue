<template>
  <form action="">
    <mt-field label="用户名" placeholder="请输入用户名" v-model="name"></mt-field>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <mt-field label="确认密码" placeholder="请确认密码" type="password" v-model="password_confirmation"></mt-field>
    <mt-field label="验证码" placeholder="请输入验证码" v-model="captcha_code"><img :src="captcha_image" alt="" @click="getCaptcha"></mt-field>
    <div class="mint-cell-wrapper" style="margin-top: .5rem">
      <mt-button type="primary" size="large" @click="register">注册</mt-button>
    </div>
  </form>
</template>

<script>
export default {
  name: "RegisterForm",
  data() {
    return {
      name: '',
      phone: '',
      password: '',
      password_confirmation: '',
      captcha_key: '',
      captcha_code: '',
      captcha_image: '',
    }
  },
  methods: {
    getCaptcha() {
      this.$axios.get(this.api.captcha).then(response => {
        let data = response.data.data;
        this.captcha_key = data.captcha_key;
        this.captcha_image = data.captcha_image;
      })
    },
    register() {
      this.$axios({
        method:'post',
        url:this.api.register,
        data:this.qs.stringify({
          name: this.name,
          phone: this.phone,
          password: this.password,
          password_confirmation: this.password_confirmation,
          captcha_key: this.captcha_key,
          captcha_code: this.captcha_code,
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
  },
  mounted() {
    this.getCaptcha();
  }
}
</script>

<style scoped>

</style>
