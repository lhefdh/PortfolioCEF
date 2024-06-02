<template>
  <div>
    <nav id="desktop-navigation">
      <div class="logo">Mohamed Fadel CHEIKH SAAD BOUH</div>
      <ul class="nav-links">
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/aboutme">Profil</router-link></li>
        <li><router-link to="/experience">Connaissances</router-link></li>
        <li><router-link to="/projects">Projets</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>   
    </nav>

     <!-- Menu Hamburger caché sur style.css mais affiché par media-queries.css   -->
    <nav id="hamburger-nav">
      <div class="logo">Mohamed Fadel CHEIKH SAAD BOUH</div>
      <div class="hamburger-menu">
        
        <!-- le clic change la valeur de menuOpen de false à true -->
        <div class="hamburger-icon" @click="menuOpen = !menuOpen">
          <span></span>
          <span></span>
          <span></span>
          <!-- Unefois la valeur de menuOpen est true la class open est active -->
          <ul class="menu-links" :class="{ 'open' : menuOpen }">
            <li class ="navlistitem"><router-link to="/">Accueil</router-link></li>
            <li class ="navlistitem"><router-link to="/aboutme">Profil</router-link></li>
            <li class ="navlistitem"><router-link to="/experience">Connaissances</router-link></li>
            <li class ="navlistitem"><router-link to="/projects">Projets</router-link></li>
            <li class ="navlistitem"><router-link to="/contact">Contact</router-link></li>
          </ul> 
        </div> 
      </div>
    </nav>

    <!-- l'endroit d'affichage des components appelés via le router -->
    <router-view></router-view>
     
  </div>
</template>

<script>
import Home from './Home.vue'
import Aboutme from './Aboutme.vue'
import Experience from './Experience.vue'
import Projects from './Projects.vue'
import Contact from './Contact.vue'
export default {
  name: 'Navbar',
  components: {
    Home,
    Aboutme,
    Experience,
    Projects,
    Contact,
  },
  data() {
    return {
       menuOpen: false,
       lastmodif : document.lastModified
      }
    }
  }

</script>


