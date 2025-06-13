// Add interactivity for the contact form (basic example)
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for contacting Radhakrisna Garments! We will get back to you soon.');
      form.reset();
    });
  }
});
