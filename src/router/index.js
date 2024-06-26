import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Aboutme from '../components/Aboutme.vue'
import Skills from '../components/Skills.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'


const routes = [
      {
        path: '/',
        name: 'Home',
        component: Home
      },

      //Error Page
      
      

      {
        path: '/aboutme',
        name: 'Aboutme',
        component: Aboutme
      },
      {
        path: '/skills',
        name: 'Skills',
        component: Skills
      },
      {
        path: '/projects',
        name: 'Projects',
        component: Projects
      },
      {
        path: '/contact',
        name: 'Contact',
        component: Contact
      },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router

