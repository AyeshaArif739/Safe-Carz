var PLANS = [

  //  ZURICH 
  {
    insurer: 'zurich', type: 'four-wheeler', price: 18000, badge: 'Most Popular',
    company: 'Zurich Insurance', sub: 'Est. 1872 · SECP Licensed',
    name: 'Comprehensive Cover', make: 'Four Wheeler · All Makes', tag: 'Comprehensive',
    features: ['Accidental damage cover', 'Theft & fire protection', 'Third-party liability', '24/7 roadside assistance']
  },
  {
    insurer: 'zurich', type: 'four-wheeler', price: 24000, badge: null,
    company: 'Zurich Insurance', sub: 'Est. 1872 · SECP Licensed',
    name: 'Premium Car Plan', make: 'Four Wheeler · Premium Makes', tag: 'Comprehensive',
    features: ['Full own damage cover', 'Windscreen replacement', 'Third-party liability', 'Emergency towing']
  },
  {
    insurer: 'zurich', type: 'four-wheeler', price: 9500, badge: 'Best Value',
    company: 'Zurich Insurance', sub: 'Est. 1872 · SECP Licensed',
    name: 'Third Party Liability', make: 'Four Wheeler · All Makes', tag: 'Third Party',
    features: ['Third-party damage cover', 'Property damage liability', 'Legal cost coverage', 'Nationwide valid']
  },
  {
    insurer: 'zurich', type: 'two-wheeler', price: 3800, badge: 'Top Pick',
    company: 'Zurich Insurance', sub: 'Est. 1872 · SECP Licensed',
    name: 'Bike Comprehensive', make: 'Two Wheeler · All Bikes', tag: 'Comprehensive',
    features: ['Accidental damage cover', 'Theft & fire protection', 'Third-party liability', 'Free towing service']
  },
  {
    insurer: 'zurich', type: 'two-wheeler', price: 2200, badge: null,
    company: 'Zurich Insurance', sub: 'Est. 1872 · SECP Licensed',
    name: 'Bike Third Party', make: 'Two Wheeler · All Bikes', tag: 'Third Party',
    features: ['Third-party liability', 'Bodily injury cover', 'Property damage', 'Nationwide valid']
  },
  {
    insurer: 'zurich', type: 'two-wheeler', price: 4500, badge: null,
    company: 'Zurich Insurance', sub: 'Est. 1872 · SECP Licensed',
    name: 'Sport Bike Plan', make: 'Two Wheeler · Sport Bikes', tag: 'Comprehensive',
    features: ['Full own damage cover', 'Theft & fire', 'Third-party liability', 'Rider personal accident']
  },

  // EFU
  {
    insurer: 'efu', type: 'four-wheeler', price: 6500, badge: 'Best Value',
    company: 'EFU General Insurance', sub: 'Est. 1932 · SECP Licensed',
    name: 'Third Party Liability', make: 'Four Wheeler · All Makes', tag: 'Third Party',
    features: ['Third-party damage cover', 'Property damage liability', 'Legal cost coverage', 'Nationwide valid']
  },
  {
    insurer: 'efu', type: 'four-wheeler', price: 14000, badge: null,
    company: 'EFU General Insurance', sub: 'Est. 1932 · SECP Licensed',
    name: 'Comprehensive Cover', make: 'Four Wheeler · All Makes', tag: 'Comprehensive',
    features: ['Own damage cover', 'Theft & fire', 'Third-party liability', 'Emergency towing']
  },
  {
    insurer: 'efu', type: 'four-wheeler', price: 20000, badge: null,
    company: 'EFU General Insurance', sub: 'Est. 1932 · SECP Licensed',
    name: 'Full Protection Plan', make: 'Four Wheeler · All Makes', tag: 'Comprehensive',
    features: ['Full own damage', 'Natural disaster cover', 'Third-party liability', '24/7 claim support']
  },
  {
    insurer: 'efu', type: 'two-wheeler', price: 2800, badge: 'Most Popular',
    company: 'EFU General Insurance', sub: 'Est. 1932 · SECP Licensed',
    name: 'Motorcycle Plan', make: 'Two Wheeler · All Bikes', tag: 'Comprehensive',
    features: ['Accidental damage', 'Theft cover', 'Third-party liability', 'Rider personal accident']
  },
  {
    insurer: 'efu', type: 'two-wheeler', price: 1800, badge: null,
    company: 'EFU General Insurance', sub: 'Est. 1932 · SECP Licensed',
    name: 'Bike Third Party', make: 'Two Wheeler · All Bikes', tag: 'Third Party',
    features: ['Third-party liability', 'Bodily injury cover', 'Property damage', 'Affordable premium']
  },
  {
    insurer: 'efu', type: 'two-wheeler', price: 3200, badge: null,
    company: 'EFU General Insurance', sub: 'Est. 1932 · SECP Licensed',
    name: 'Bike Fire & Theft', make: 'Two Wheeler · All Bikes', tag: 'Fire & Theft',
    features: ['Fire & explosion cover', 'Theft protection', 'Third-party liability', 'Rider accident benefit']
  },

  //  ADAMJEE 
  {
    insurer: 'adamjee', type: 'four-wheeler', price: 12000, badge: null,
    company: 'Adamjee Insurance', sub: 'Est. 1960 · SECP Licensed',
    name: 'Car Comprehensive Plan', make: 'Four Wheeler · All Makes', tag: 'Comprehensive',
    features: ['Own damage cover', 'Theft & fire', 'Third-party liability', '500+ partner workshops']
  },
  {
    insurer: 'adamjee', type: 'four-wheeler', price: 5500, badge: 'Best Value',
    company: 'Adamjee Insurance', sub: 'Est. 1960 · SECP Licensed',
    name: 'Third Party Only', make: 'Four Wheeler · All Makes', tag: 'Third Party',
    features: ['Third-party damage', 'Property damage', 'Legal expenses', 'Nationwide valid']
  },
  {
    insurer: 'adamjee', type: 'four-wheeler', price: 18000, badge: null,
    company: 'Adamjee Insurance', sub: 'Est. 1960 · SECP Licensed',
    name: 'Premium Comprehensive', make: 'Four Wheeler · All Makes', tag: 'Comprehensive',
    features: ['Full own damage', 'Windscreen cover', 'Third-party liability', 'Dedicated claims agent']
  },
  {
    insurer: 'adamjee', type: 'two-wheeler', price: 3200, badge: 'Most Popular',
    company: 'Adamjee Insurance', sub: 'Est. 1960 · SECP Licensed',
    name: 'Two Wheeler Comprehensive', make: 'Two Wheeler · All Bikes', tag: 'Comprehensive',
    features: ['Accidental damage', 'Theft & fire', 'Third-party liability', 'Free workshop pickup']
  },
  {
    insurer: 'adamjee', type: 'two-wheeler', price: 2000, badge: null,
    company: 'Adamjee Insurance', sub: 'Est. 1960 · SECP Licensed',
    name: 'Bike Third Party', make: 'Two Wheeler · All Bikes', tag: 'Third Party',
    features: ['Third-party liability', 'Bodily injury cover', 'Property damage', 'Nationwide valid']
  },
  {
    insurer: 'adamjee', type: 'two-wheeler', price: 4000, badge: null,
    company: 'Adamjee Insurance', sub: 'Est. 1960 · SECP Licensed',
    name: 'Bike Full Cover', make: 'Two Wheeler · All Bikes', tag: 'Comprehensive',
    features: ['Full own damage cover', 'Theft & fire', 'Third-party liability', 'Rider accident cover']
  },

  //  JUBILEE 
  {
    insurer: 'jubilee', type: 'four-wheeler', price: 16000, badge: null,
    company: 'Jubilee Insurance', sub: 'Est. 1953 · SECP Licensed',
    name: 'Comprehensive Car Plan', make: 'Four Wheeler · All Makes', tag: 'Comprehensive',
    features: ['Accidental damage', 'Theft & fire', 'Third-party liability', 'Towing assistance']
  },
  {
    insurer: 'jubilee', type: 'four-wheeler', price: 7200, badge: 'Best Value',
    company: 'Jubilee Insurance', sub: 'Est. 1953 · SECP Licensed',
    name: 'Third Party Liability', make: 'Four Wheeler · All Makes', tag: 'Third Party',
    features: ['Third-party damage cover', 'Property damage', 'Legal cost coverage', 'Nationwide valid']
  },
  {
    insurer: 'jubilee', type: 'four-wheeler', price: 22000, badge: null,
    company: 'Jubilee Insurance', sub: 'Est. 1953 · SECP Licensed',
    name: 'Elite Car Coverage', make: 'Four Wheeler · All Makes', tag: 'Comprehensive',
    features: ['Full own damage', 'Natural disaster cover', '24/7 claim support', 'Windscreen cover']
  },
  {
    insurer: 'jubilee', type: 'two-wheeler', price: 3500, badge: null,
    company: 'Jubilee Insurance', sub: 'Est. 1953 · SECP Licensed',
    name: 'Motorcycle Comprehensive', make: 'Two Wheeler · All Bikes', tag: 'Comprehensive',
    features: ['Own damage cover', 'Theft & fire', 'Third-party liability', 'Rider accident cover']
  },
  {
    insurer: 'jubilee', type: 'two-wheeler', price: 2600, badge: 'Best Value',
    company: 'Jubilee Insurance', sub: 'Est. 1953 · SECP Licensed',
    name: 'Bike Third Party', make: 'Two Wheeler · All Bikes', tag: 'Third Party',
    features: ['Third-party liability', 'Bodily injury cover', 'Property damage', 'Affordable premium']
  },
  {
    insurer: 'jubilee', type: 'two-wheeler', price: 4200, badge: null,
    company: 'Jubilee Insurance', sub: 'Est. 1953 · SECP Licensed',
    name: 'Bike Fire & Theft', make: 'Two Wheeler · All Bikes', tag: 'Fire & Theft',
    features: ['Fire & explosion cover', 'Theft protection', 'Third-party liability', 'Rider personal accident']
  },

  //  TPL 
  {
    insurer: 'tpl', type: 'four-wheeler', price: 8000, badge: 'Digital First',
    company: 'TPL Insurance', sub: 'Est. 2005 · SECP Licensed',
    name: 'Smart Comprehensive', make: 'Four Wheeler · All Makes', tag: 'Comprehensive',
    features: ['GPS tracking included', 'Online claim filing', 'Theft & fire cover', 'Instant policy']
  },
  {
    insurer: 'tpl', type: 'four-wheeler', price: 5000, badge: null,
    company: 'TPL Insurance', sub: 'Est. 2005 · SECP Licensed',
    name: 'Third Party Plan', make: 'Four Wheeler · All Makes', tag: 'Third Party',
    features: ['Third-party damage', 'Digital policy card', 'Online renewal', '24/7 support app']
  },
  {
    insurer: 'tpl', type: 'four-wheeler', price: 13000, badge: null,
    company: 'TPL Insurance', sub: 'Est. 2005 · SECP Licensed',
    name: 'Smart Premium Plan', make: 'Four Wheeler · All Makes', tag: 'Comprehensive',
    features: ['Real-time GPS tracking', 'Full own damage cover', 'Online claims', 'Instant policy']
  },
  {
    insurer: 'tpl', type: 'two-wheeler', price: 2500, badge: 'Digital First',
    company: 'TPL Insurance', sub: 'Est. 2005 · SECP Licensed',
    name: 'Bike Smart Plan', make: 'Two Wheeler · All Bikes', tag: 'Comprehensive',
    features: ['Accidental damage', 'Theft cover', 'Digital policy', 'Online claims']
  },
  {
    insurer: 'tpl', type: 'two-wheeler', price: 1600, badge: null,
    company: 'TPL Insurance', sub: 'Est. 2005 · SECP Licensed',
    name: 'Bike Third Party', make: 'Two Wheeler · All Bikes', tag: 'Third Party',
    features: ['Third-party liability', 'Digital policy card', 'Online renewal', '24/7 support app']
  },
  {
    insurer: 'tpl', type: 'two-wheeler', price: 3400, badge: null,
    company: 'TPL Insurance', sub: 'Est. 2005 · SECP Licensed',
    name: 'Smart Bike Premium', make: 'Two Wheeler · All Bikes', tag: 'Comprehensive',
    features: ['Full own damage cover', 'Theft & fire', 'Online claim filing', 'Rider accident cover']
  },

  //  SALAMA 
  {
    insurer: 'salama', type: 'four-wheeler', price: 10000, badge: 'Shariah Compliant',
    company: 'Salama Insurance', sub: 'Est. 2006 · SECP Licensed',
    name: 'Takaful Comprehensive', make: 'Four Wheeler · All Makes', tag: 'Comprehensive',
    features: ['Shariah compliant', 'Accidental damage', 'Theft & fire cover', 'Third-party liability']
  },
  {
    insurer: 'salama', type: 'four-wheeler', price: 5800, badge: null,
    company: 'Salama Insurance', sub: 'Est. 2006 · SECP Licensed',
    name: 'Takaful Third Party', make: 'Four Wheeler · All Makes', tag: 'Third Party',
    features: ['Shariah compliant', 'Third-party damage', 'Property damage', 'Legal expenses']
  },
  {
    insurer: 'salama', type: 'four-wheeler', price: 15000, badge: null,
    company: 'Salama Insurance', sub: 'Est. 2006 · SECP Licensed',
    name: 'Takaful Premium Cover', make: 'Four Wheeler · All Makes', tag: 'Comprehensive',
    features: ['Shariah compliant', 'Full own damage', 'Windscreen cover', 'Third-party liability']
  },
  {
    insurer: 'salama', type: 'two-wheeler', price: 2900, badge: 'Shariah Compliant',
    company: 'Salama Insurance', sub: 'Est. 2006 · SECP Licensed',
    name: 'Takaful Bike Plan', make: 'Two Wheeler · All Bikes', tag: 'Comprehensive',
    features: ['Shariah compliant', 'Accidental damage', 'Theft & fire', 'Third-party liability']
  },
  {
    insurer: 'salama', type: 'two-wheeler', price: 1900, badge: null,
    company: 'Salama Insurance', sub: 'Est. 2006 · SECP Licensed',
    name: 'Takaful Bike Third Party', make: 'Two Wheeler · All Bikes', tag: 'Third Party',
    features: ['Shariah compliant', 'Third-party liability', 'Property damage', 'Legal expenses']
  },
  {
    insurer: 'salama', type: 'two-wheeler', price: 3600, badge: null,
    company: 'Salama Insurance', sub: 'Est. 2006 · SECP Licensed',
    name: 'Takaful Bike Premium', make: 'Two Wheeler · All Bikes', tag: 'Comprehensive',
    features: ['Shariah compliant', 'Full own damage cover', 'Theft & fire', 'Rider accident cover']
  }

];

var activeInsurer = 'all';
var activeType = 'all';

var obs = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) {
      e.target.classList.add('show');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.06 });

document.querySelectorAll('.fade').forEach(function (el) { obs.observe(el); });

function buildCard(p, index) {
  var card = document.createElement('div');
  card.className = 'plan-card card-enter';
  card.dataset.insurer = p.insurer;
  card.dataset.type = p.type;
  card.dataset.price = p.price;
  card.style.animationDelay = (index * 0.06) + 's';

  var badgeHtml = p.badge
    ? '<div class="plan-badge">' + p.badge + '</div>'
    : '';

  var featuresHtml = p.features.map(function (f) {
    return '<li><i class="fas fa-check-circle"></i> ' + f + '</li>';
  }).join('');

  card.innerHTML =
    '<div class="plan-card-top">' +
    '<div class="plan-company-logo">' + p.company + '</div>' +
    '<div class="plan-company-sub">' + p.sub + '</div>' +
    badgeHtml +
    '</div>' +
    '<div class="plan-body">' +
    '<div class="plan-vehicle-name">' + p.name + '</div>' +
    '<div class="plan-vehicle-make">' + p.make + '</div>' +
    '<div class="plan-type-tag">' + p.tag + '</div>' +
    '<ul class="plan-features">' + featuresHtml + '</ul>' +
    '<div class="plan-divider"></div>' +
    '<div class="plan-price-row">' +
    '<div>' +
    '<div class="plan-price-label">Starting from</div>' +
    '<div class="plan-price">PKR ' + p.price.toLocaleString() + ' <span>/ year</span></div>' +
    '</div>' +
    '<a href="Contact.html" class="btn-insure">Get Quote</a>' +
    '</div>' +
    '</div>';

  return card;
}

function renderCards() {
  var grid = document.getElementById('plansGrid');
  var noRes = document.getElementById('noResults');

  Array.from(grid.querySelectorAll('.plan-card')).forEach(function (c) { c.remove(); });

  // filter
  var filtered = PLANS.filter(function (p) {
    return (activeInsurer === 'all' || p.insurer === activeInsurer) &&
      (activeType === 'all' || p.type === activeType);
  });

  // sort
  var sort = document.getElementById('sortSelect').value;
  if (sort === 'price-asc') filtered.sort(function (a, b) { return a.price - b.price; });
  if (sort === 'price-desc') filtered.sort(function (a, b) { return b.price - a.price; });

  filtered.forEach(function (p, i) {
    var card = buildCard(p, i);
    grid.insertBefore(card, noRes);
    setTimeout(function () { obs.observe(card); }, 10);
  });

  document.getElementById('visibleCount').textContent = filtered.length;
  noRes.style.display = filtered.length === 0 ? 'block' : 'none';
}

document.querySelectorAll('.tab-btn[data-insurer]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.tab-btn[data-insurer]').forEach(function (b) { b.classList.remove('active'); });
    this.classList.add('active');
    activeInsurer = this.dataset.insurer;
    renderCards();
  });
});

document.querySelectorAll('.tab-btn[data-type]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.tab-btn[data-type]').forEach(function (b) { b.classList.remove('active'); });
    this.classList.add('active');
    activeType = this.dataset.type;
    renderCards();
  });
});


function sortPlans() { renderCards(); }

renderCards();


/*  Hamburger Menu   */
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