<template>
  <div>
    <Navbar/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import Aboutme from './components/Aboutme.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'

export default {
  name:'App',
  components: {
    Navbar,
    Home,
    Aboutme,
    Experience,
    Projects,
    Contact
  }
}
</script>
