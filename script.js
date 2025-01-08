// Smooth Scroll Functionality for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Show/Hide Content Example
document.getElementById('toggleContentBtn').addEventListener('click', function() {
  const content = document.getElementById('extraContent');
  content.style.display = content.style.display === 'none' ? 'block' : 'none';
});

// Change button text on hover
const button = document.querySelector('button');
button.addEventListener('mouseenter', () => {
  button.textContent = "Click Me!";
});

button.addEventListener('mouseleave', () => {
  button.textContent = "Submit";
});

