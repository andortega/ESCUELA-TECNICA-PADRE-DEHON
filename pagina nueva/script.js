
  const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_6n9typp';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('Gracias hemos recibido tu mensaje y nos pondremos en contacto pronto.');
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});