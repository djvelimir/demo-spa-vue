import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import PageNotFoundView from '@/views/PageNotFoundView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    meta: { title: 'Home' },
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    meta: { title: 'About' },
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    meta: { title: 'Contact' },
    component: ContactView
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/:pathMatch(.*)',
    name: 'pageNotFound',
    meta: { title: 'Page Not Found' },
    component: PageNotFoundView
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

const DEFAULT_TITLE = 'demo-spa-vue';
router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string || DEFAULT_TITLE;
  next();
});

export default router
