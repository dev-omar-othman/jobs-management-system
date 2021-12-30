import Vue from 'vue';
import VueRouter from 'vue-router';
import signin from '../views/signin.vue';
import signup from '../views/signup.vue';
import home from '../views/home.vue';
import jobpage from '../views/job.vue';

Vue.use (VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
  },
  {
    path: '/signin',
    name: 'signin',
    component: signin,
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup,
  },
  {
    path: '/job',
    name: 'jobpage',
    component: jobpage,
  },
];

const router = new VueRouter ({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
