const fades = document.querySelectorAll('.fade');
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
}, { threshold: 0.12 });
fades.forEach(el => obs.observe(el));

// Form For submition
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();    
  const message = document.getElementById('message').value.trim();
  const ok = document.getElementById('successAlert');
  const err = document.getElementById('errorAlert');

  ok.style.display = 'none';
  err.style.display = 'none';

  if (!name || !email || !message) {
    err.style.display = 'block';
    setTimeout(() => err.style.display = 'none', 4000);
  } else {
    ok.style.display = 'block';
    this.reset();
    setTimeout(() => ok.style.display = 'none', 5000);
  }
});


/*  Hamburger Menu  */
const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.navlinks');

if (hamburger && navlinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navlinks.classList.toggle('open');
  });

  navlinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navlinks.classList.remove('open');
    });
  });
}