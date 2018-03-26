import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Login from './components/Login.vue';
import VueRouter from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
];

const router = new VueRouter({ routes });

router.beforeEach((to, from, next) => {
  console.log(to);
});

export default router;
