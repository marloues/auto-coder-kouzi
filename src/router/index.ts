
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/workspace',
      name: 'workspace',
      component: () => import('../views/workspace/WorkspaceView.vue'),
      children: [
        {
          path: 'create',
          component: () => import('../views/workspace/components/CreateModal.vue')
        }
      ]
    }
  ]
})

export default router
