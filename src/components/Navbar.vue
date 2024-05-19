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
      
        <footer>
            <nav>
                <div>
                    <ul class="nav-links-footer">
                        <li><router-link to="/">Accueil</router-link></li>
                        <li><router-link to="/aboutme">Profil</router-link></li>
                        <li><router-link to="/experience">Connaissances</router-link></li>
                        <li><router-link to="/projects">Projets</router-link></li>
                        <li><router-link to="/contact">Contact</router-link></li>
                    </ul>  
                </div>  
            </nav>
            <div id="socials-container">
                <a href="https://linkedin.com/">
                    <img src="../assets/linkedin.png" 
                    alt="ma Page LinkedIn"
                    class="icon"/>
                </a>
                <a href="https://github.com/">
                    <img src="../assets/github.png" 
                    alt="Mon GitHub"
                    class="icon"/>
                </a> 
            </div>   
            <p>Dernière mise à jour le {{lastmodif}}</p>
            <p>Copyright &#169; 2024</p>
            
        </footer>
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

<style>
@import url("../style.css"); 
@import url("../media-queries.css");
</style>
