<template>
    <div id="contact" class="div__container">
        <div class="contact-container">
            <p class="section__text__p1">N'hésitez Pas</p>
            <h1 class="title">Contactez Moi</h1>
            <div class="form-container">
                <form ref="form" class="formFields details-container" @submit.prevent=sendEmail()>
                    <div class="name-fields">
                        <div class="field">
                            <input type="text" name="from_name" placeholder="Nom" >
                        </div>
                        <div class="field">
                            <input type="text" name="subject" placeholder="Objet" >
                        </div>
                        <div class="email-field field">
                            <input type="email" name="user_email" placeholder="Votre e-mail" >
                        </div>
                        <div class="field">
                            <textarea name="message" cols="30"  placeholder="Votre Message"></textarea>
                        </div>
                    </div>
                    <div class="field">
                        <button class="btn btn-submit" type="submit">Envoyez</button>
                    </div>
                </form>
            </div>
        </div>
    </div>       
</template>
<script>
import emailjs from '@emailjs/browser'
export default {
    name: 'Contact',
    data() {
        return {  
            from_name: '',
            user_email: '',
            subject: '',
            message: '', 
            to_name:'Fadel',
        }
    },
    methods: {
      //* password: 'CDD980B83C38A319375A810687BAE398C8B1'*//
        sendEmail() {
            emailjs.sendForm('service_ba96ltq', 'template_mzonckh', this.$refs.form, {
                publicKey: '9FClo4lUvd7Vova6f',
                })
                .then(
                () => {
                    alert('Message Transmis avec Succès');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        },
    },
}
</script>