<template>
    <div id="errorpage">
        <h1 class="title">La page que vous avez demandez n'existe pas</h1>
        
            <router-link to="/">
                <div id="error-page-btn" class="btn">
                Accédez à la Page d'Accueil
                </div>
            </router-link>
                
        <img id=error-page-img src="../assets/error-404.png" alt="404 Page Not Found">
    </div> 
</template>

<script>
export default {
    name: 'Errorpage'  
}
</script>
