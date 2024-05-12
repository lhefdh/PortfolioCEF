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
        
        <router-view></router-view>
      
        <footer>
            <nav>
                <div class="nav-links-container">
                    <ul class="nav-links">
                        <li><router-link to="/">Accueil</router-link></li>
                        <li><router-link to="/aboutme">Profil</router-link></li>
                        <li><router-link to="/experience">Connaissances</router-link></li>
                        <li><router-link to="/projects">Projets</router-link></li>
                        <li><router-link to="/contact">Contact</router-link></li>
                    </ul>  
                </div>
            </nav>
            <p>Copyright &#169; 2024</p>
        </footer>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
       
      }
    }
    
  }

</script>

<style>
@import url("../style.css"); 
</style>
