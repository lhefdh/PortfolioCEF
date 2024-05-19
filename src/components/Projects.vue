<template>
    <div id="projects" class="div__container">
        <p class="section__text__p1">Decouvrez mes récents</p>
        <h1 class="title">Projets</h1>
        <div class="experience-details-container">
            <div class="about-container">
                <div class="details-container color-container">
                    <div class="article-container">
                        <img 
                        src="../assets/cv-icon.png" 
                        alt="CV CEF"
                        class="project-img"
                        >
                    </div>
                    <h2 class="project-title">Curriculum-vitae</h2>
                    <div class="btn-container">
                        <button class="btn" onclick="location.href='https://github.com/lhefdh/cv'">Github</button>
                        <button class="btn" @click="modalOpen = !modalOpen;addProjectData1();" >Détails</button>
                    </div>
                </div>
                <div class="details-container color-container">
                    <div class="article-container">
                        <img 
                        src="../assets/dynamique.png" 
                        alt="Page Dynamique CEF"
                        class="project-img"
                        >
                    </div>
                    <h2 class="project-title">Page Dynamique</h2>
                    <div class="btn-container">
                        <button class="btn" onclick="location.href='https://github.com/lhefdh/page-dynamique'">Github</button>
                        <button class="btn" @click="modalOpen = !modalOpen;addProjectData2();" >Détails</button>
                    </div>
                </div>
                <div class="details-container color-container">
                    <div class="article-container">
                        <img 
                        src="../assets/portfolio.png" 
                        alt="Portfolio CEF"
                        class="project-img"
                        >
                    </div>
                    <h2 class="project-title">Portfolio</h2>
                    <div class="btn-container">
                        <button class="btn" onclick="location.href='https://github.com/lhefdh/PortfolioCEF'">Github</button>
                        <button class="btn" @click="modalOpen = !modalOpen;addProjectData3();" >Détails</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-bg" :class="{ 'open' : modalOpen }" @click="modalOpen = !modalOpen">
            <div class="modal" @click="modalOpen = !modalOpen">
                <label for="title">Titre: {{myproject.name}} </label>
                <label for="date-of-creation">Date de création: {{ myproject.date }} </label>
                <label for="tools">Technologies utilisées: {{myproject.skills}}</label>
                <label for="GitHub-link">Consulter <a :href=myproject.repositoryLink>le repository GitHub</a></label>
                <button class="btn modal-btn" @click="modalOpen = !modalOpen">Fermer</button>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
    name: 'Projects',
    data() {
        return {
            modalOpen: false,
            myproject: {
                name:'',
                date: '',
                skills: '',
                repositoryLink: '',
            }
        }
     },
     methods: {
        addProjectData1() {
            this.myproject.name= 'Curriculum-Vitae',
            this.myproject.date= '24 Novembre 2023',
            this.myproject.skills= 'HTML et CSS',
            this.myproject.repositoryLink= "https://github.com/lhefdh/cv"
        },
        addProjectData2() {
            this.myproject.name= 'Page dynamique',
            this.myproject.date= '3 Février 2024',
            this.myproject.skills= 'HTML, CSS et JavaScript',
            this.myproject.repositoryLink= "https://github.com/lhefdh/page-dynamique"
        },
        addProjectData3() {
            this.myproject.name= 'Portfolio',
            this.myproject.date= '19 Mai 2023',
            this.myproject.skills= 'HTML, CSS et JavaScript',
            this.myproject.repositoryLink= "https://github.com/lhefdh/PortfolioCEF"
        }
     }
}
</script>