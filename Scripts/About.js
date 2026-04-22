AOS.init({ duration: 900, once: true, easing: 'ease-out-quart', offset: 100 });

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const t = document.querySelector(this.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
  });
});


    /*  Hamburger Menu  */
const hamburger = document.querySelector('.hamburger');
const navlinks  = document.querySelector('.navlinks');

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