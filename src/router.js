import Vue from 'vue';
import Router from 'vue-router';
import Diary from './views/Diary.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'diary',
      component: Diary,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/Backlog.vue'),
    },
    {
      path: '/stats',
      name: 'stats',
      component: () => import(/* webpackChunkName: "stats" */ './views/Stats.vue'),
    },
    {
      path: '/pattern',
      name: 'pattern',
      component: () => import(/* webpackChunkName: "pattern" */ './views/Pattern.vue'),
    },
  ],
});
