<template>
    <div id="home" class="div__container">       
        <div class="section__pic-container">
            <img src="../assets/pdp.png" alt="Mohamed Fadel profile picture">
        </div>
        <div class="section__text">
            <p class="section__text__p1">Salut, je m'appelle</p>
            <h1 class="title"> Mohamed Fadel <br> CHEIKH SAAD BOUH </h1>
            <br>
            <P class="section__text__p2">Développeur Full-Stack</P>
            <div class="btn-container"> 
                <button class="btn" onclick="window.open('../assets/Curriculum-vitae.pdf')">    
                        Mon CV
                </button>
                <button class="btn">
                    <router-link to="/contact">
                        Contact
                    </router-link>
                </button>
            </div>
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
        </div>
        
    </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
       
      }
    }
    
  }

</script>
