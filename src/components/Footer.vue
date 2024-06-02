<template>
    <div id="nav-footer">
        <footer>
            <nav>    
                <ul class="nav-links-footer">
                    <li><router-link to="/">Accueil</router-link></li>
                    <li><router-link to="/aboutme">Profil</router-link></li>
                    <li><router-link to="/experience">Connaissances</router-link></li>
                    <li><router-link to="/projects">Projets</router-link></li>
                    <li><router-link to="/contact">Contact</router-link></li>
                </ul>      
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
  name: 'FooterC',
  data() {
    return {
       lastmodif : document.lastModified
      }
    }
  }
</script>