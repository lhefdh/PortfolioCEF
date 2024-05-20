<template>
    <div id="projects" class="div__container">
        <p class="section__text__p1">Decouvrez mes récents</p>
        <h1 class="title">Projets</h1>
        <div class="experience-details-container">
            <div class="about-container">
                <div v-for="item in myProjects" :key="item.id" class="details-container color-container">
                    <div class="article-container">
                        <img :src=item.imgSrc :alt=item.imgAlt class="project-img">
                    </div>
                    <h2 class="project-title">{{item.title}}</h2>
                    <div class="btn-container">
                        <a :href="item.repositoryLink" target="_blank">
                            <button class="btn">Github</button>
                        </a>
                        <button class="btn" @click="modalOpen = !modalOpen;addProjectData(item.id);" >Détails</button>
                    </div>
                    <div class="modal-bg" :class="{ 'open' : modalOpen }" @click="modalOpen = !modalOpen">
                        <div class="modal" @click="modalOpen = !modalOpen">
                            <label for="title">Titre: {{modalData.title}} </label>
                            <label for="date-of-creation">Date de création: {{modalData.date}} </label>
                            <label for="tools">Technologies utilisées: {{modalData.tools}}</label>
                            <label for="GitHub-link">Consulter <a :href="modalData.repositoryLink" target="_blank">le repository GitHub</a></label>
                            <button class="modal-btn" @click="modalOpen = !modalOpen">Fermer</button>
                        </div>
                    </div>  
                </div>  
            </div>
        </div>
        
    </div>
</template>

<script>
    import cvIcon from '../assets/cv-icon.png'
    import pageDynamiqueIcon from '../assets/dynamique.png'
    import portfolioIcon from '../assets/portfolio.png'
    export default {
    name: 'Projects',
    data() {
        return {
            modalOpen: false,
            modalData: {
                title:'',
                date: '',
                tools: '',
                repositoryLink: '',
            },
            myProjects: [
                 {
                    id: 1,
                    title:'Curriculum-Vitae',
                    date: '24 Novembre 2023',
                    tools: 'HTML et CSS',
                    repositoryLink: 'https://github.com/lhefdh/cv',
                    imgSrc: cvIcon,
                    imgAlt:'CV CEF',
                },
                 {
                    id: 2,
                    title:'Page dynamique',
                    date: '3 Février 2024',
                    tools: 'HTML, CSS et JavaScript',
                    repositoryLink: 'https://github.com/lhefdh/page-dynamique',
                    imgSrc: pageDynamiqueIcon,
                    imgAlt:'Page Dynamique CEF',
                }, 
                 {
                    id: 3,
                    title:'Portfolio',
                    date: '19 Mai 2023',
                    tools: 'HTML, CSS et JavaScript',
                    repositoryLink: 'https://github.com/lhefdh/PortfolioCEF',
                    imgSrc: portfolioIcon,
                    imgAlt:'Portfolio CEF',
                }
            ] 
        }
    },
    methods: {
        addProjectData(b) {  
            this.modalData.title = this.myProjects[b-1].title,
            this.modalData.date = this.myProjects[b-1].date,
            this.modalData.tools = this.myProjects[b-1].tools,
            this.modalData.repositoryLink = this.myProjects[b-1].repositoryLink
        }
    }
}
     
</script>