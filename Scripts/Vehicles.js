var VEHICLES = [

  //  FOUR WHEELERS 
  // ADAMJEE
  {
    cat: 'four-wheeler', company: 'Adamjee Insurance', sub: 'Est. 1960 · SECP Licensed',
    badge: 'Top Rated', name: 'Toyota Corolla', make: '1800cc · Petrol · 2020–2024', tag: 'Comprehensive', price: 18000,
    features: [
      { text: 'Accidental Damage Cover', inc: true }, { text: 'Theft & Fire Protection', inc: true },
      { text: 'Third Party Liability', inc: true }, { text: 'Free Roadside Assistance', inc: true },
      { text: 'Cashless Claim Network', inc: true }]
  },

  {
    cat: 'four-wheeler', company: 'Adamjee Insurance', sub: 'Est. 1960 · SECP Licensed',
    badge: 'Premium', name: 'MG HS', make: '1500cc Turbo · Petrol · 2022–2024', tag: 'Comprehensive', price: 32000,
    features: [
      { text: 'Full Own Damage', inc: true }, { text: 'Theft & Fire Protection', inc: true },
      { text: 'Third Party Liability', inc: true }, { text: 'Windscreen Replacement', inc: true },
      { text: '24/7 Roadside Assist', inc: true }]
  },

  {
    cat: 'four-wheeler', company: 'Adamjee Insurance', sub: 'Est. 1960 · SECP Licensed',
    badge: null, name: 'Suzuki Alto', make: '660cc · Petrol · 2021–2024', tag: 'Third Party Only', price: 5500,
    features: [
      { text: 'Third Party Liability', inc: true }, { text: 'Bodily Injury Cover', inc: true },
      { text: 'Property Damage Cover', inc: true }, { text: 'Own Damage', inc: false },
      { text: 'Theft', inc: false }]
  },

  // JUBILEE
  {
    cat: 'four-wheeler', company: 'Jubilee Insurance', sub: 'Est. 1953 · SECP Licensed',
    badge: null, name: 'Honda Civic', make: '1500cc · Petrol · 2019–2024', tag: 'Comprehensive', price: 20000,
    features: [
      { text: 'Own Damage Coverage', inc: true }, { text: 'Natural Disaster Cover', inc: true },
      { text: 'Third Party Liability', inc: true }, { text: '24/7 Claim Support', inc: true },
      { text: 'Windscreen Cover', inc: true }]
  },

  {
    cat: 'four-wheeler', company: 'Jubilee Insurance', sub: 'Est. 1953 · SECP Licensed',
    badge: 'Best Value', name: 'Toyota Yaris', make: '1300cc · Petrol · 2020–2024', tag: 'Third Party + Fire & Theft', price: 8500,
    features: [
      { text: 'Third Party Liability', inc: true }, { text: 'Fire Damage Cover', inc: true },
      { text: 'Theft Protection', inc: true }, { text: 'Driver Personal Accident', inc: true },
      { text: 'Own Damage', inc: false }]
  },

  {
    cat: 'four-wheeler', company: 'Jubilee Insurance', sub: 'Est. 1953 · SECP Licensed',
    badge: null, name: 'Honda BR-V', make: '1500cc · Petrol · 2021–2024', tag: 'Comprehensive', price: 22000,
    features: [
      { text: 'Full Own Damage', inc: true }, { text: 'Theft & Fire', inc: true },
      { text: 'Third Party Liability', inc: true }, { text: 'Towing Assistance', inc: true },
      { text: 'Legal Liability Cover', inc: true }]
  },

  // EFU
  {
    cat: 'four-wheeler', company: 'EFU General', sub: 'Est. 1932 · SECP Licensed',
    badge: 'Premium', name: 'Toyota Fortuner', make: '2700cc · Petrol · 2020–2024', tag: 'Comprehensive', price: 28000,
    features: [
      { text: 'Full Own Damage Cover', inc: true }, { text: 'Theft & Total Loss', inc: true },
      { text: 'Third Party Liability', inc: true }, { text: 'Emergency Towing', inc: true },
      { text: 'On-site Surveyor', inc: true }]
  },

  {
    cat: 'four-wheeler', company: 'EFU General', sub: 'Est. 1932 · SECP Licensed',
    badge: 'Best Value', name: 'Changan Alsvin', make: '1300cc · Petrol · 2020–2024', tag: 'Third Party + Fire & Theft', price: 15000,
    features: [
      { text: 'Third Party Liability', inc: true }, { text: 'Fire & Explosion Cover', inc: true },
      { text: 'Theft Protection', inc: true }, { text: 'Personal Accident Cover', inc: true },
      { text: 'Own Damage', inc: false }]
  },

  {
    cat: 'four-wheeler', company: 'EFU General', sub: 'Est. 1932 · SECP Licensed',
    badge: null, name: 'Toyota Corolla Cross', make: '1800cc Hybrid · 2022–2024', tag: 'Comprehensive', price: 26000,
    features: [
      { text: 'Own Damage Coverage', inc: true }, { text: 'Theft & Fire', inc: true },
      { text: 'Third Party Liability', inc: true }, { text: 'Emergency Towing', inc: true },
      { text: '24/7 Claim Support', inc: true }]
  },

  // UBL
  {
    cat: 'four-wheeler', company: 'UBL Insurers', sub: 'Est. 2000 · SECP Licensed',
    badge: 'Popular', name: 'KIA Sportage', make: '2000cc · Petrol · 2021–2024', tag: 'Comprehensive', price: 24000,
    features: [
      { text: 'Accidental Damage Cover', inc: true }, { text: 'Anti-theft Cover', inc: true },
      { text: 'Third Party Liability', inc: true }, { text: 'Hospital Cash Benefit', inc: true },
      { text: 'Nationwide Garages', inc: true }]
  },

  {
    cat: 'four-wheeler', company: 'UBL Insurers', sub: 'Est. 2000 · SECP Licensed',
    badge: null, name: 'Hyundai Tucson', make: '2000cc · Petrol · 2021–2024', tag: 'Comprehensive', price: 27000,
    features: [
      { text: 'Full Own Damage', inc: true }, { text: 'Theft & Fire', inc: true },
      { text: 'Third Party Liability', inc: true }, { text: 'Windscreen Cover', inc: true },
      { text: 'Roadside Assistance', inc: true }]
  },

  {
    cat: 'four-wheeler', company: 'UBL Insurers', sub: 'Est. 2000 · SECP Licensed',
    badge: 'Budget Pick', name: 'Suzuki Swift', make: '1200cc · Petrol · 2019–2024', tag: 'Third Party Only', price: 6500,
    features: [
      { text: 'Third Party Liability', inc: true }, { text: 'Bodily Injury Cover', inc: true },
      { text: 'Property Damage', inc: true }, { text: 'Own Damage', inc: false },
      { text: 'Theft', inc: false }]
  },

  // ALFALAH
  {
    cat: 'four-wheeler', company: 'Alfalah Insurance', sub: 'Est. 2004 · SECP Licensed',
    badge: 'Best Value', name: 'Suzuki Swift', make: '1200cc · Petrol · 2019–2024', tag: 'Third Party + Fire & Theft', price: 9000,
    features: [
      { text: 'Third Party Liability', inc: true }, { text: 'Fire Damage Cover', inc: true },
      { text: 'Theft Protection', inc: true }, { text: 'Driver Personal Accident', inc: true },
      { text: 'Own Damage', inc: false }]
  },

  {
    cat: 'four-wheeler', company: 'Alfalah Insurance', sub: 'Est. 2004 · SECP Licensed',
    badge: null, name: 'Honda City', make: '1200cc · Petrol · 2020–2024', tag: 'Comprehensive', price: 14000,
    features: [
      { text: 'Own Damage Cover', inc: true }, { text: 'Theft & Fire', inc: true },
      { text: 'Third Party Liability', inc: true }, { text: 'Emergency Towing', inc: true },
      { text: 'Free Roadside Assist', inc: true }]
  },

  {
    cat: 'four-wheeler', company: 'Alfalah Insurance', sub: 'Est. 2004 · SECP Licensed',
    badge: null, name: 'Suzuki Cultus', make: '1000cc · Petrol · 2020–2024', tag: 'Third Party Only', price: 5800,
    features: [
      { text: 'Third Party Liability', inc: true }, { text: 'Bodily Injury Cover', inc: true },
      { text: 'Property Damage', inc: true }, { text: 'Own Damage', inc: false },
      { text: 'Theft', inc: false }]
  },

  // ASKARI
  {
    cat: 'four-wheeler', company: 'Askari Insurance', sub: 'Est. 1995 · SECP Licensed',
    badge: null, name: 'Suzuki Alto', make: '660cc · Petrol · 2020–2024', tag: 'Third Party Only', price: 7500,
    features: [
      { text: 'Third Party Liability', inc: true }, { text: 'Bodily Injury Cover', inc: true },
      { text: 'Property Damage Cover', inc: true }, { text: 'Own Damage', inc: false },
      { text: 'Theft', inc: false }]
  },

  {
    cat: 'four-wheeler', company: 'Askari Insurance', sub: 'Est. 1995 · SECP Licensed',
    badge: 'Popular', name: 'Toyota Hilux', make: '2800cc Diesel · 2021–2024', tag: 'Comprehensive', price: 35000,
    features: [
      { text: 'Full Own Damage', inc: true }, { text: 'Theft & Fire', inc: true },
      { text: 'Third Party Liability', inc: true }, { text: 'Emergency Towing', inc: true },
      { text: '24/7 Roadside Assist', inc: true }]
  },

  {
    cat: 'four-wheeler', company: 'Askari Insurance', sub: 'Est. 1995 · SECP Licensed',
    badge: null, name: 'Changan Oshan X7', make: '1500cc Turbo · 2022–2024', tag: 'Comprehensive', price: 21000,
    features: [
      { text: 'Own Damage Coverage', inc: true }, { text: 'Theft & Fire', inc: true },
      { text: 'Third Party Liability', inc: true }, { text: 'Windscreen Replacement', inc: true },
      { text: 'On-site Surveyor', inc: true }]
  },

  // ATLAS
  {
    cat: 'four-wheeler', company: 'Atlas Insurance', sub: 'Est. 1980 · SECP Licensed',
    badge: 'New Arrival', name: 'Hyundai Elantra', make: '1600cc · Petrol · 2021–2024', tag: 'Comprehensive', price: 22000,
    features: [
      { text: 'Own Damage Coverage', inc: true }, { text: 'Theft & Fire', inc: true },
      { text: 'Third Party Liability', inc: true }, { text: 'Towing Assistance', inc: true },
      { text: 'Legal Liability Cover', inc: true }]
  },

  {
    cat: 'four-wheeler', company: 'Atlas Insurance', sub: 'Est. 1980 · SECP Licensed',
    badge: null, name: 'MG ZS EV', make: 'Electric · 2023–2024', tag: 'Comprehensive', price: 30000,
    features: [
      { text: 'Own Damage Cover', inc: true }, { text: 'Theft & Fire', inc: true },
      { text: 'Third Party Liability', inc: true }, { text: 'Battery Damage Cover', inc: true },
      { text: 'Roadside Assistance', inc: true }]
  },

  {
    cat: 'four-wheeler', company: 'Atlas Insurance', sub: 'Est. 1980 · SECP Licensed',
    badge: 'Budget Pick', name: 'Suzuki Mehran', make: '800cc · Petrol · 2018–2023', tag: 'Third Party Only', price: 4800,
    features: [
      { text: 'Third Party Liability', inc: true }, { text: 'Bodily Injury Cover', inc: true },
      { text: 'Property Damage', inc: true }, { text: 'Own Damage', inc: false },
      { text: 'Theft', inc: false }]
  },

  //  TWO WHEELERS 

  // ADAMJEE
  {
    cat: 'two-wheeler', company: 'Adamjee Insurance', sub: 'Est. 1960 · SECP Licensed',
    badge: 'Top Pick', name: 'Honda CB150F', make: '150cc · Petrol · 2019–2024', tag: 'Comprehensive', price: 3000,
    features: [
      { text: 'Accidental Damage Cover', inc: true }, { text: 'Theft Protection', inc: true },
      { text: 'Third Party Liability', inc: true }, { text: 'Personal Accident Rider', inc: true },
      { text: 'Free Towing Service', inc: true }]
  },

  {
    cat: 'two-wheeler', company: 'Adamjee Insurance', sub: 'Est. 1960 · SECP Licensed',
    badge: null, name: 'Honda CG125', make: '125cc · Petrol · 2020–2024', tag: 'Third Party Only', price: 2000,
    features: [
      { text: 'Third Party Liability', inc: true }, { text: 'Bodily Injury Cover', inc: true },
      { text: 'Property Damage', inc: true }, { text: 'Own Damage', inc: false },
      { text: 'Theft', inc: false }]
  },

  {
    cat: 'two-wheeler', company: 'Adamjee Insurance', sub: 'Est. 1960 · SECP Licensed',
    badge: 'Premium', name: 'Yamaha MT-15', make: '155cc · Petrol · 2022–2024', tag: 'Comprehensive', price: 4500,
    features: [
      { text: 'Full Own Damage', inc: true }, { text: 'Theft & Fire', inc: true },
      { text: 'Third Party Liability', inc: true }, { text: 'Rider Accident Cover', inc: true },
      { text: 'Genuine Parts Guarantee', inc: true }]
  },

  // JUBILEE
  {
    cat: 'two-wheeler', company: 'Jubilee Insurance', sub: 'Est. 1953 · SECP Licensed',
    badge: 'Best Value', name: 'Metro Thunder 70', make: '70cc · Petrol · 2019–2024', tag: 'Third Party Only', price: 2600,
    features: [
      { text: 'Third Party Liability', inc: true }, { text: 'Bodily Injury Cover', inc: true },
      { text: 'Property Damage', inc: true }, { text: 'Affordable Premium', inc: true },
      { text: 'Own Damage', inc: false }]
  },

  {
    cat: 'two-wheeler', company: 'Jubilee Insurance', sub: 'Est. 1953 · SECP Licensed',
    badge: null, name: 'Yamaha YBR125', make: '125cc · Petrol · 2020–2024', tag: 'Third Party + Fire & Theft', price: 3500,
    features: [
      { text: 'Third Party Liability', inc: true }, { text: 'Fire Damage Cover', inc: true },
      { text: 'Theft Protection', inc: true }, { text: 'Rider Accident Cover', inc: true },
      { text: 'Own Damage', inc: false }]
  },

  {
    cat: 'two-wheeler', company: 'Jubilee Insurance', sub: 'Est. 1953 · SECP Licensed',
    badge: null, name: 'Honda CB500F', make: '500cc · Petrol · 2021–2024', tag: 'Comprehensive', price: 6000,
    features: [
      { text: 'Full Own Damage', inc: true }, { text: 'Theft & Fire', inc: true },
      { text: 'Third Party Liability', inc: true }, { text: 'Rider Personal Accident', inc: true },
      { text: '24/7 Roadside Assist', inc: true }]
  },

  // EFU
  {
    cat: 'two-wheeler', company: 'EFU General', sub: 'Est. 1932 · SECP Licensed',
    badge: null, name: 'Suzuki GD110S', make: '110cc · Petrol · 2018–2024', tag: 'Third Party Only', price: 2500,
    features: [
      { text: 'Third Party Liability', inc: true }, { text: 'Bodily Injury Cover', inc: true },
      { text: 'Property Damage', inc: true }, { text: 'Own Damage', inc: false },
      { text: 'Theft', inc: false }]
  },

  {
    cat: 'two-wheeler', company: 'EFU General', sub: 'Est. 1932 · SECP Licensed',
    badge: 'Budget Pick', name: 'Road Prince Wego', make: '100cc · Petrol · 2020–2024', tag: 'Third Party + Fire & Theft', price: 3200,
    features: [
      { text: 'Third Party Liability', inc: true }, { text: 'Fire & Explosion', inc: true },
      { text: 'Theft Protection', inc: true }, { text: 'Rider Personal Accident', inc: true },
      { text: 'Own Damage', inc: false }]
  },

  {
    cat: 'two-wheeler', company: 'EFU General', sub: 'Est. 1932 · SECP Licensed',
    badge: 'Most Popular', name: 'Honda CB150R', make: '150cc · Petrol · 2021–2024', tag: 'Comprehensive', price: 3800,
    features: [
      { text: 'Accidental Damage', inc: true }, { text: 'Theft Cover', inc: true },
      { text: 'Third Party Liability', inc: true }, { text: 'Rider Personal Accident', inc: true },
      { text: 'Free Towing Service', inc: true }]
  },

  // UBL
  {
    cat: 'two-wheeler', company: 'UBL Insurers', sub: 'Est. 2000 · SECP Licensed',
    badge: 'Sport', name: 'Yamaha R15', make: '155cc · Petrol · 2021–2024', tag: 'Comprehensive', price: 4200,
    features: [
      { text: 'Full Own Damage Cover', inc: true }, { text: 'Theft & Fire', inc: true },
      { text: 'Third Party Liability', inc: true }, { text: 'Rider Personal Accident', inc: true },
      { text: 'Sport Bike Specialist', inc: true }]
  },

  {
    cat: 'two-wheeler', company: 'UBL Insurers', sub: 'Est. 2000 · SECP Licensed',
    badge: null, name: 'Kawasaki Ninja 400', make: '400cc · Petrol · 2022–2024', tag: 'Comprehensive', price: 7500,
    features: [
      { text: 'Full Own Damage', inc: true }, { text: 'Theft & Fire', inc: true },
      { text: 'Third Party Liability', inc: true }, { text: 'Rider Accident Cover', inc: true },
      { text: 'Genuine Parts Guarantee', inc: true }]
  },

  {
    cat: 'two-wheeler', company: 'UBL Insurers', sub: 'Est. 2000 · SECP Licensed',
    badge: 'Budget Pick', name: 'Honda CD70', make: '70cc · Petrol · 2019–2024', tag: 'Third Party Only', price: 1800,
    features: [
      { text: 'Third Party Liability', inc: true }, { text: 'Bodily Injury Cover', inc: true },
      { text: 'Property Damage', inc: true }, { text: 'Own Damage', inc: false },
      { text: 'Theft', inc: false }]
  },

  // ALFALAH
  {
    cat: 'two-wheeler', company: 'Alfalah Insurance', sub: 'Est. 2004 · SECP Licensed',
    badge: 'Most Popular', name: 'Honda CD70', make: '70cc · Petrol · 2018–2024', tag: 'Third Party Only', price: 2200,
    features: [
      { text: 'Third Party Liability', inc: true }, { text: 'Bodily Injury Cover', inc: true },
      { text: 'Property Damage', inc: true }, { text: 'Low-cost Entry Plan', inc: true },
      { text: 'Own Damage', inc: false }]
  },

  {
    cat: 'two-wheeler', company: 'Alfalah Insurance', sub: 'Est. 2004 · SECP Licensed',
    badge: null, name: 'Unique UD-70', make: '70cc · Petrol · 2020–2024', tag: 'Third Party + Fire & Theft', price: 2600,
    features: [
      { text: 'Third Party Liability', inc: true }, { text: 'Fire Damage Cover', inc: true },
      { text: 'Theft Protection', inc: true }, { text: 'Rider Accident Benefit', inc: true },
      { text: 'Own Damage', inc: false }]
  },

  {
    cat: 'two-wheeler', company: 'Alfalah Insurance', sub: 'Est. 2004 · SECP Licensed',
    badge: null, name: 'Ravi Piaggio', make: '150cc · Petrol · 2021–2024', tag: 'Comprehensive', price: 3400,
    features: [
      { text: 'Accidental Damage', inc: true }, { text: 'Theft & Fire', inc: true },
      { text: 'Third Party Liability', inc: true }, { text: 'Personal Accident Rider', inc: true },
      { text: 'Free Towing', inc: true }]
  },

  // ASKARI
  {
    cat: 'two-wheeler', company: 'Askari Insurance', sub: 'Est. 1995 · SECP Licensed',
    badge: null, name: 'United Bravo', make: '70cc · Petrol · 2019–2024', tag: 'Third Party + Fire & Theft', price: 2800,
    features: [
      { text: 'Third Party Liability', inc: true }, { text: 'Fire & Explosion', inc: true },
      { text: 'Theft Protection', inc: true }, { text: 'Rider Accident Benefit', inc: true },
      { text: 'Own Damage', inc: false }]
  },

  {
    cat: 'two-wheeler', company: 'Askari Insurance', sub: 'Est. 1995 · SECP Licensed',
    badge: 'Best Value', name: 'Super Power SP-70', make: '70cc · Petrol · 2020–2024', tag: 'Third Party Only', price: 1900,
    features: [
      { text: 'Third Party Liability', inc: true }, { text: 'Bodily Injury Cover', inc: true },
      { text: 'Property Damage', inc: true }, { text: 'Own Damage', inc: false },
      { text: 'Theft', inc: false }]
  },

  {
    cat: 'two-wheeler', company: 'Askari Insurance', sub: 'Est. 1995 · SECP Licensed',
    badge: null, name: 'Honda CBR150R', make: '150cc · Petrol · 2022–2024', tag: 'Comprehensive', price: 4000,
    features: [
      { text: 'Full Own Damage', inc: true }, { text: 'Theft & Fire', inc: true },
      { text: 'Third Party Liability', inc: true }, { text: 'Rider Accident Cover', inc: true },
      { text: 'Genuine Parts Guarantee', inc: true }]
  },

  // ATLAS
  {
    cat: 'two-wheeler', company: 'Atlas Insurance', sub: 'Est. 1980 · SECP Licensed',
    badge: 'Sport', name: 'Kawasaki Z125', make: '125cc · Petrol · 2021–2024', tag: 'Comprehensive', price: 3800,
    features: [
      { text: 'Own Damage Cover', inc: true }, { text: 'Theft & Fire', inc: true },
      { text: 'Third Party Liability', inc: true }, { text: 'Rider Accident Cover', inc: true },
      { text: 'Genuine Parts Guarantee', inc: true }]
  },

  {
    cat: 'two-wheeler', company: 'Atlas Insurance', sub: 'Est. 1980 · SECP Licensed',
    badge: null, name: 'Qingqi Loader', make: '150cc · Petrol · 2020–2024', tag: 'Third Party Only', price: 2100,
    features: [
      { text: 'Third Party Liability', inc: true }, { text: 'Bodily Injury Cover', inc: true },
      { text: 'Property Damage', inc: true }, { text: 'Own Damage', inc: false },
      { text: 'Theft', inc: false }]
  },

  {
    cat: 'two-wheeler', company: 'Atlas Insurance', sub: 'Est. 1980 · SECP Licensed',
    badge: 'New Arrival', name: 'Suzuki GS150SE', make: '150cc · Petrol · 2022–2024', tag: 'Comprehensive', price: 3600,
    features: [
      { text: 'Accidental Damage', inc: true }, { text: 'Theft & Fire', inc: true },
      { text: 'Third Party Liability', inc: true }, { text: 'Personal Accident Rider', inc: true },
      { text: 'Free Towing Service', inc: true }]
  }

];

//  STATE
var activeCat = 'all';

//  INTERSECTION OBSERVER
var obs = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) {
      e.target.classList.add('show');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.06 });

document.querySelectorAll('.fade').forEach(function (el) { obs.observe(el); });

//  BUILD CARD
function buildCard(v, index) {
  var card = document.createElement('div');
  card.className = 'plan-card card-enter';
  card.style.animationDelay = (index * 0.06) + 's';

  var badgeHtml = v.badge
    ? '<div class="plan-badge">' + v.badge + '</div>'
    : '';

  var featuresHtml = v.features.map(function (f) {
    var icon = f.inc
      ? '<i class="fas fa-check-circle"></i>'
      : '<i class="fas fa-times-circle" style="color:#ccc"></i>';
    var notText = f.inc ? '' : ' (Not Included)';
    return '<li>' + icon + ' ' + f.text + notText + '</li>';
  }).join('');

  card.innerHTML =
    '<div class="plan-card-top">' +
    '<div class="plan-company-logo">' + v.company + '</div>' +
    '<div class="plan-company-sub">' + v.sub + '</div>' +
    badgeHtml +
    '</div>' +
    '<div class="plan-body">' +
    '<div class="plan-vehicle-name">' + v.name + '</div>' +
    '<div class="plan-vehicle-make">' + v.make + '</div>' +
    '<div class="plan-type-tag">' + v.tag + '</div>' +
    '<ul class="plan-features">' + featuresHtml + '</ul>' +
    '<div class="plan-divider"></div>' +
    '<div class="plan-price-row">' +
    '<div>' +
    '<div class="plan-price-label">Premium from</div>' +
    '<div class="plan-price">PKR ' + v.price.toLocaleString() + ' <span>/ year</span></div>' +
    '</div>' +
    '<a href="Contact.html" class="btn-insure">Contact</a>' +
    '</div>' +
    '</div>';

  return card;
}

//  RENDER BOTH SECTIONS
function renderAll() {
  ['four-wheeler', 'two-wheeler'].forEach(function (cat) {
    var key = cat === 'four-wheeler' ? 'four' : 'two';
    var grid = document.getElementById('grid-' + key);
    var noRes = document.getElementById('noResults-' + key);
    var block = document.getElementById('block-' + key);

    if (activeCat === 'all' || activeCat === cat) {
      block.classList.remove('hidden-block');
    } else {
      block.classList.add('hidden-block');
      return;
    }

    Array.from(grid.querySelectorAll('.plan-card')).forEach(function (c) { c.remove(); });

    var filtered = VEHICLES.filter(function (v) { return v.cat === cat; });

    filtered.forEach(function (v, i) {
      var card = buildCard(v, i);
      grid.insertBefore(card, noRes);
      setTimeout(function () { obs.observe(card); }, 10);
    });

    noRes.style.display = filtered.length === 0 ? 'block' : 'none';
  });
}

//  FILTER TAB EVENTS
document.querySelectorAll('.tab-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.tab-btn').forEach(function (b) { b.classList.remove('active'); });
    this.classList.add('active');
    activeCat = this.dataset.cat;
    renderAll();
  });
});

//  HAMBURGER NAV
var hamburger = document.getElementById('hamburger');
var mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', function () {
    var open = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('active', open);
  });

  mobileMenu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });

  document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('active');
    }
  });
}
renderAll();


var hamburger = document.querySelector('.hamburger');
var navlinks = document.querySelector('.navlinks');

if (hamburger && navlinks) {
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open');
    navlinks.classList.toggle('open');
  });
  navlinks.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      hamburger.classList.remove('open');
      navlinks.classList.remove('open');
    });
  });
}