<template>
    <div>
          
        <div>
            <img src="../assets/pdp.png" alt="Mohamed Fadel profile picture">
        </div>
        <div>
            <p>Salut, je m'appelle</p>
            <h1> Mohamed Fadel <br> CHEIKH SAAD BOUH </h1>
            <br>
            <P>Développeur Full-Stack</P>
            <div> 
                <button onclick="window.open('../assets/Curriculum-vitae.pdf')">    
                        Mon CV
                </button>
                <button>
                    <router-link to="/contact">
                        Contact
                    </router-link>
                </button>
            </div>
            <div>
                <a href="https://linkedin.com/">
                    <img src="../assets/linkedin.png" 
                    alt="ma Page LinkedIn"/>
                </a>
                <a href="https://github.com/">
                    <img src="../assets/github.png" 
                    alt="Mon GitHub"/>
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
