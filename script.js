// Handle simple form message (demo only)
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('form-message').textContent = "Thank you! We'll get back to you.";
  this.reset();
});