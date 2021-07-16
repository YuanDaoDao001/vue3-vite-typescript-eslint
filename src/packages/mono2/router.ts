import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'mono2',
      component: () => import('./views/index.vue'),
    },
  ],
});

export default router;
