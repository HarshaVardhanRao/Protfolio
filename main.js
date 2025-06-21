// main.js - Handles dark mode and any future JS enhancements
document.addEventListener('DOMContentLoaded', function() {
  // Dark/Light mode toggle
  const toggleBtn = document.getElementById('toggleMode');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('.card, .navbar, .footer').forEach(el => el.classList.toggle('dark-mode'));
    toggleBtn.innerHTML = document.body.classList.contains('dark-mode') ? '<i class="bi bi-brightness-high"></i>' : '<i class="bi bi-moon"></i>';
  });
});
