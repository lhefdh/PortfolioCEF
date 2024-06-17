<template>
  <div>
    <!-- utilisation de v-if pour soit la redirection vers la page d'erreur soit l'affichage des components. -->
    <Errorpage v-if="$route.path != '/' && $route.path !='/home' && $route.path !='/aboutme' && $route.path !='/experience' && $route.path !='/projects' && $route.path !='/contact'"/>
    <div v-else>
      <Navbar/>
      <!-- l'endroit d'affichage des components appelés via le router -->
      <router-view></router-view>
      <FooterC/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import FooterC from './components/Footer.vue'
import Errorpage from './components/Errorpage.vue'

export default {
  name:'App',
  components: {
    Navbar,
    Errorpage,
    FooterC
  }
}
</script>

<style>
@import url("style.css"); 
@import url("media-queries.css");
</style>
