export default [
  {
    path: '/auth/register',
    name: 'Register',
    component: () => import('@/views/auth/Register')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Index')
  },
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: () => import('@/views/auth/Login')
  },
]
