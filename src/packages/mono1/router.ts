import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'mono2',
      component: () => import('./views/HelloWorld.vue'),
    },
  ],
});

export default router;
