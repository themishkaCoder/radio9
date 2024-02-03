import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import SchedulePage from '../views/SchedulePage.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: () => import('../views/SchedulePage.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactPage.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/GalleryPage.vue')
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router