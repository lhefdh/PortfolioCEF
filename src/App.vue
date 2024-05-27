<template>
  <div>
    <Errorpage v-if="$route.path != '/' && $route.path !='/home' && $route.path !='/aboutme' && $route.path !='/experience' && $route.path !='/projects' && $route.path !='/contact'"/>
    <Navbar v-else/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import Aboutme from './components/Aboutme.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Errorpage from './components/Errorpage.vue'

export default {
  name:'App',
  components: {
    Navbar,
    Home,
    Aboutme,
    Experience,
    Projects,
    Contact,
    Errorpage
  }
}
</script>
