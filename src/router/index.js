import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import EditPost from "@/components/EditPost";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/edit/:id',
    name: 'EditPost',
    component: EditPost
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
