import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../pages/Home.vue')
const About = () => import('../pages/About.vue')
const Services = () => import('../pages/Services.vue')
const Portfolio = () => import('../pages/Portfolio.vue')
const Contact = () => import('../pages/Contact.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/a-propos', name: 'about', component: About },
    { path: '/services', name: 'services', component: Services },
    { path: '/portfolio', name: 'portfolio', component: Portfolio },
    { path: '/contact', name: 'contact', component: Contact },
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
