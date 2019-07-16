import Vue from 'vue'
import Router from 'vue-router'
import Index from "../views/Index";
import Register from "../views/auth/Register";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
