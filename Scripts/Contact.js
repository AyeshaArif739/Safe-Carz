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

  const nameValid = name.replace(/\s/g, '').length >= 2;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const messageValid = message.length >= 10;

  if (!nameValid || !emailValid || !messageValid) {
    let errors = [];
    if (!nameValid) errors.push('Name must be at least 2 characters');
    if (!emailValid) errors.push('Enter a valid email address');
    if (!messageValid) errors.push('Message must be at least 10 characters');
    
    err.innerHTML = '⚠️ ' + errors.join(', ') + '.';
    err.style.display = 'block';
    
    setTimeout(() => { err.style.display = 'none'; }, 4000);
    return; 
  }

  ok.style.display = 'block';
  this.reset();
  setTimeout(() => { ok.style.display = 'none'; }, 5000);
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