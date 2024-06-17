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
                <button class="btn" @click=CvDownloader()>    
                  Mon CV
                </button>
                <router-link to="/contact">
                  <div class="btn">
                  Contact
                  </div> 
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
       CvSrc: CV,
       pdfFileName: CV
      }
    },
  methods:{
    CvDownloader(){
      // create element <a> for download CV
      const link = document.createElement('a');
      link.href = this.CvSrc;
      link.target = '_blank';
      link.download = this.pdfFileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  } 
  }

</script>
