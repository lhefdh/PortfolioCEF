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
       
    <nav id="hamburger-nav">
      <div class="logo">Mohamed Fadel CHEIKH SAAD BOUH</div>
      <div class="hamburger-menu">
        <div class="hamburger-icon" @click="menuOpen = !menuOpen">
          <span></span>
          <span></span>
          <span></span>
          <div class="menu-links" :class="{ 'open' : menuOpen }">
            <li class ="navlistitem"><router-link to="/">Accueil</router-link></li>
            <li class ="navlistitem"><router-link to="/aboutme">Profil</router-link></li>
            <li class ="navlistitem"><router-link to="/experience">Connaissances</router-link></li>
            <li class ="navlistitem"><router-link to="/projects">Projets</router-link></li>
            <li class ="navlistitem"><router-link to="/contact">Contact</router-link></li>
          </div>
        </div> 
      </div>
    </nav>

    <router-view></router-view>
     
  </div>
</template>

<script>

export default {
  name: 'Navbar',

  data() {
    return {
       menuOpen: false,
       lastmodif : document.lastModified
      }
    }
  }

</script>


