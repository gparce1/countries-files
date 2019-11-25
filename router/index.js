import Vue from 'vue'
import VueRouter from 'vue-router'
import Countries from '../views/countries/Countries.vue'
import Country from '../views/country/Country.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'countries',
    component: Countries
  },
  {
    path: '/country',
    name: 'country',
    component: Country
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
