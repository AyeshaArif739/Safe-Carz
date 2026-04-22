let activeCompany = 'all';
document.querySelectorAll('.company-panel').forEach(panel => {
  panel.style.display = 'block';
});

document.querySelectorAll('.company-btn').forEach(button => {
  button.addEventListener('click', function () {
    document.querySelectorAll('.company-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    this.classList.add('active');
    activeCompany = this.dataset.company;
    applyFilters();
  });
});

// Filter 
function applyFilters() {
  if (activeCompany === 'all') {
    document.querySelectorAll('.company-panel').forEach(panel => {
      panel.style.display = 'block';
    });
  } else {
    document.querySelectorAll('.company-panel').forEach(panel => {
      panel.style.display = 'none';
    });
    const panelId = 'panel-' + activeCompany;
    const selectedPanel = document.getElementById(panelId);
    if (selectedPanel) {
      selectedPanel.style.display = 'block';
    }
  }
}

//  Array Of Objects 
const insuranceData = [
  {
    id: "zurich",
    name: "Zurich Insurance",
    badge: "International Insurer · Est. 1872",
    description: "One of the world's leading insurers, Zurich brings global-standard vehicle protection to Pakistan. Known for premium comprehensive coverage, fast claim processing, and exceptional customer service.",
    image: "Assets/Zurich-img.webp",
    stats: { experience: "150+", claimTime: "48hr", rating: "A+" },
    plans: [
      { name: "Comprehensive Cover", make: "Four Wheeler · All Makes", type: "Comprehensive", tag: "Most Popular", price: "18,000", features: ["Accidental damage cover", "Theft & fire protection", "Third-party liability", "24/7 roadside assistance"] },
      { name: "Commercial Vehicle Plan", make: "Commercial · Vans & Trucks", type: "Commercial", tag: null, price: "25,000", features: ["Business use coverage", "Goods in transit", "Third-party liability", "Driver personal accident"] },
      { name: "Fleet Insurance", make: "Fleet · Multiple Vehicles", type: "Fleet", tag: "Premium", price: "45,000", features: ["Covers all fleet vehicles", "Dedicated claims manager", "Flexible add-ons", "Nationwide coverage"] }
    ]
  },
  {
    id: "efu",
    name: "EFU General",
    badge: "Local Insurer · Est. 1932",
    description: "Pakistan's oldest and most trusted general insurer with over 90 years of experience. EFU provides affordable, reliable vehicle insurance for cars, motorcycles, and commercial vehicles across the country.",
    image: "Assets/EFU-img.webp",
    stats: { experience: "90+", claimTime: "48hr", rating: "A+" },
    plans: [
      { name: "Third Party Liability", make: "Four Wheeler · All Makes", type: "Third Party Only", tag: "Best Value", price: "6,500", features: ["Third-party damage cover", "Property damage liability", "Legal cost coverage", "Nationwide valid"] },
      { name: "Comprehensive Cover", make: "Four Wheeler · All Makes", type: "Comprehensive", tag: null, price: "14,000", features: ["Own damage cover", "Theft & fire", "Third-party liability", "Emergency towing"] },
      { name: "Motorcycle Plan", make: "Two Wheeler · All Bikes", type: "Comprehensive", tag: null, price: "2,800", features: ["Accidental damage", "Theft cover", "Third-party liability", "Rider personal accident"] }
    ]
  },
  {
    id: "adamjee",
    name: "Adamjee Insurance",
    badge: "Local Insurer · Est. 1960",
    description: "A leading Pakistani insurer known for competitive motorcycle and car plans. Adamjee offers strong two-wheeler and four-wheeler coverage with fast claim processing and a wide network of partner workshops.",
    image: "Assets/Adamjee-img.webp",
    stats: { experience: "60+", claimTime: "48hr", rating: "A" },
    plans: [
      { name: "Two Wheeler Comprehensive", make: "Two Wheeler · All Bikes", type: "Comprehensive", tag: "Most Popular", price: "3,200", features: ["Accidental damage", "Theft & fire", "Third-party liability", "Free workshop pickup"] },
      { name: "Car Comprehensive Plan", make: "Four Wheeler · All Makes", type: "Comprehensive", tag: null, price: "12,000", features: ["Own damage cover", "Theft & fire", "Third-party liability", "500+ partner workshops"] },
      { name: "Third Party Only", make: "Four Wheeler · All Makes", type: "Third Party Only", tag: null, price: "5,500", features: ["Third-party damage", "Property damage", "Legal expenses", "Nationwide valid"] }
    ]
  },
  {
    id: "jubilee",
    name: "Jubilee Insurance",
    badge: "Local Insurer · Est. 1953",
    description: "Jubilee specialises in fleet and commercial vehicle insurance, making it the top choice for businesses in Pakistan. With unified policies and a dedicated claims team.",
    image: "Assets/Jubilee-img.webp",
    stats: { experience: "70+", claimTime: "48hr", rating: "A" },
    plans: [
      { name: "Fleet Insurance", make: "Fleet · Multiple Vehicles", type: "Fleet", tag: "Business Choice", price: "45,000", features: ["All vehicles one policy", "Dedicated claims manager", "Flexible deductibles", "Nationwide coverage"] },
      { name: "Commercial Vehicle", make: "Commercial · Vans & Trucks", type: "Commercial", tag: null, price: "22,000", features: ["Own damage cover", "Goods in transit", "Third-party liability", "Driver cover"] },
      { name: "Comprehensive Car Plan", make: "Four Wheeler · All Makes", type: "Comprehensive", tag: null, price: "16,000", features: ["Accidental damage", "Theft & fire", "Third-party liability", "Towing assistance"] }
    ]
  },
  {
    id: "tpl",
    name: "TPL Insurance",
    badge: "Digital Insurer · Est. 2005",
    description: "Pakistan's most innovative insurer, offering digital-first policies with instant issuance, real-time vehicle tracking, and seamless online claim filing.",
    image: "Assets/TPL-img.webp",
    stats: { experience: "20+", claimTime: "48hr", rating: "A" },
    plans: [
      { name: "Smart Comprehensive", make: "Four Wheeler · All Makes", type: "Comprehensive", tag: "Digital First", price: "8,000", features: ["GPS tracking included", "Online claim filing", "Theft & fire cover", "Instant policy"] },
      { name: "Third Party Plan", make: "Four Wheeler · All Makes", type: "Third Party Only", tag: null, price: "5,000", features: ["Third-party damage", "Digital policy card", "Online renewal", "24/7 support app"] },
      { name: "Bike Smart Plan", make: "Two Wheeler · All Bikes", type: "Comprehensive", tag: null, price: "2,500", features: ["Accidental damage", "Theft cover", "Digital policy", "Online claims"] }
    ]
  },
  {
    id: "salama",
    name: "Salama Insurance",
    badge: "Takaful Insurer · Est. 2006",
    description: "Pakistan's premier Takaful (Islamic) vehicle insurer. Salama provides Shariah-compliant comprehensive and third-party coverage.",
    image: "Assets/Salama-img.webp",
    stats: { experience: "18+", claimTime: "48hr", rating: "A-" },
    plans: [
      { name: "Takaful Comprehensive", make: "Four Wheeler · All Makes", type: "Comprehensive", tag: "Shariah Compliant", price: "10,000", features: ["Shariah compliant", "Accidental damage", "Theft & fire cover", "Third-party liability"] },
      { name: "Takaful Third Party", make: "Four Wheeler · All Makes", type: "Third Party Only", tag: null, price: "5,800", features: ["Shariah compliant", "Third-party damage", "Property damage", "Legal expenses"] },
      { name: "Commercial Takaful", make: "Commercial · Business Vehicles", type: "Commercial", tag: null, price: "18,000", features: ["Shariah compliant", "Business use cover", "Goods in transit", "Third-party liability"] }
    ]
  }
];

const renderContainer = document.getElementById('companies-render-container');

function renderAllCompanies() {
  renderContainer.innerHTML = '';

  insuranceData.forEach(company => {
    const plansHtml = company.plans.map(plan => `
      <div class="plan-card">
        <div class="plan-card-top">
          <div class="plan-company-logo">${company.name}</div>
          <div class="plan-company-sub">${company.badge.split('·')[1].trim()} · SECP Licensed</div>
          ${plan.tag ? `<div class="plan-badge">${plan.tag}</div>` : ''}
        </div>
        <div class="plan-body">
          <div class="plan-vehicle-name">${plan.name}</div>
          <div class="plan-vehicle-make">${plan.make}</div>
          <div class="plan-type-tag">${plan.type}</div>
          <ul class="plan-features">
            ${plan.features.map(feature => `<li><i class="fas fa-check-circle"></i> ${feature}</li>`).join('')}
          </ul>
          <div class="plan-divider"></div>
          <div class="plan-price-row">
            <div>
              <div class="plan-price-label">Starting from</div>
              <div class="plan-price">PKR ${plan.price} <span>/ year</span></div>
            </div>
            <a href="Plans.html" class="btn-insure">Get Quote</a>
          </div>
        </div>
      </div>
    `).join('');

    const panelHtml = `
      <div class="company-panel" id="panel-${company.id}">
        <div class="company-intro">
          <div class="company-intro-text">
            <div class="co-badge">${company.badge}</div>
            <h2>${company.name.split(' ')[0]} <span>${company.name.split(' ')[1] || 'Insurance'}</span></h2>
            <p>${company.description}</p>
            <div class="company-stats-row">
              <div class="cstat"><div class="cstat-num">${company.stats.experience}</div><div class="cstat-lbl">Years Experience</div></div>
              <div class="cstat"><div class="cstat-num">${company.stats.claimTime}</div><div class="cstat-lbl">Claim Time</div></div>
              <div class="cstat"><div class="cstat-num">${company.stats.rating}</div><div class="cstat-lbl">Rating</div></div>
            </div>
          </div>
          <img class="company-intro-img" src="${company.image}" alt="${company.name}"/>
        </div>
        <div class="plans-heading">
          <div class="lbl">Available Plans</div>
          <h3>${company.name} <em>Insurance Plans</em></h3>
        </div>
        <div class="plans-grid">
          ${plansHtml}
        </div>
      </div>
    `;

    renderContainer.innerHTML += panelHtml;
  });

  // Hamburger Nav
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
}
renderAllCompanies();