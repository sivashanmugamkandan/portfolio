// Optional smooth scroll if desired
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const el = document.querySelector(link.getAttribute('href'));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  });
});
