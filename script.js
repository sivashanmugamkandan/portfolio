document.querySelector('.scroll-down').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' });
});
