var current = 0;
var slides = document.querySelectorAll('.slide');
var dots = document.querySelectorAll('.dot');

function goTo(n) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('on');
  current = (n + slides.length) % slides.length;
  slides[current].classList.add('active');
  dots[current].classList.add('on');
}

function move(dir) { goTo(current + dir); }
 
setInterval(function () { move(1); }, 5000);

var fadeEls = document.querySelectorAll('.fade');

var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) e.target.classList.add('show');
  });
}, { threshold: 0.12 });

fadeEls.forEach(function (el) { observer.observe(el); });

var counters = document.querySelectorAll('[data-target]');

var cObs = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (!e.isIntersecting) return;
    var el = e.target;
    var target = +el.dataset.target;
    var suffix = target > 1000 ? '+' : target >= 99 ? '%' : '+';
    var count = 0;
    var step = target / 60;

    var timer = setInterval(function () {
      count = Math.min(count + step, target);
      el.textContent = (target > 1000 ? Math.round(count).toLocaleString() : Math.round(count)) + suffix;
      if (count >= target) clearInterval(timer);
    }, 20);

    cObs.unobserve(el);
  });
}, { threshold: 0.5 });

counters.forEach(function (c) { cObs.observe(c); });

/*  Hamburger Menu */
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