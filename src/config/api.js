const url    = 'http://api.article.test';
const suffix = 'api';
const api = {
  captcha: url+'/'+suffix+'/captcha',
  register: url+'/'+suffix+'/register',
  login: url+'/'+suffix+'/login',
  categories: url+'/'+suffix+'/categories',
  articles: url+'/'+suffix+'/articles',
};

export default api
