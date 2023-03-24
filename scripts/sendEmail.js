import emailjs from '@emailjs/browser';

(() => {
    const form = document.querySelector('#form')

    const sendEmail = async (e) => {
        e.preventDefault();
    
        try {
            const emailResponse = await emailjs.sendForm('service_h1rtukm', 'template_p24spum', e.target, '3jnhJooTmhTwLPQBJ')
            console.log(emailResponse.text);
        } catch (error) {
            console.log(error.text);
        }
    };

    form.addEventListener('submit', sendEmail)
})()
