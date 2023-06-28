import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/projetos',
    name: 'projetos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "projetos" */ '../views/Projetos.vue')
  },
  {
    path: '/contato',
    name: 'contato',
    component: () => import(/*webpackChunkName: "contato" */ '../views/Contato.vue')
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: () => import(/*webpackChunkName: "cadastro" */ '../views/Cadastro.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
