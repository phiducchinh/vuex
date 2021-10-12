import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import cats from '../views/cats.vue'
import dogs from '../views/dogs.vue'
import pets from '../views/pets.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cats',
    name: 'Cats',
    component: cats
  },
  {
    path: '/dogs',
    name: 'Dogs',
    component: dogs
  },
  {
    path: '/pets/:pet/:id',
    name: 'pets',
    component: pets,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
