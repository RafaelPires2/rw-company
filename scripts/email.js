import emailjs from '@emailjs/browser';

export const ContactUs = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h1rtukm', 'template_p24spum', e.target, '3jnhJooTmhTwLPQBJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};