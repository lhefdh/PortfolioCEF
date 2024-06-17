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
                <a :href=CvSrc target="_blank" download="CV">
                  <button class="btn">    
                    Mon CV
                  </button>
                </a> 
                
                <router-link to="/contact">
                  <button class="btn">
                  Contact
                  </button>
                </router-link>      

            </div>   
        </div>
        
    </div>
</template>

<script>
import CV from '../assets/CurriculumVitae.pdf'
export default {
  name: 'Home',
  data() {
    return {
       CvSrc: CV
      }
    } 
  }

</script>
