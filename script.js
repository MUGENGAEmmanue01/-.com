// typing word 
var typed = new Typed('.typing', {
         strings: ["web designer", "web developer", "graphic designer"],
         typeSpeed: 100,
         backSpeed: 60,
         loop: true
});
     
// to email
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

   // Send form data using EmailJS
    emailjs.sendForm('service_a3o581s', 'template_id', this)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send the message. Please try again.');
        });
});
