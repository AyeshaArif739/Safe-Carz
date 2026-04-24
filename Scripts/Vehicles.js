var VEHICLES = [
  { cat: 'four-wheeler', company: 'Adamjee Insurance', sub: 'Est. 1960 · SECP Licensed', badge: 'Top Rated', name: 'Toyota Corolla', make: '1800cc · Petrol · 2020–2024', tag: 'Comprehensive', price: 18000, features: [{ text: 'Accidental Damage Cover', inc: true }, { text: 'Theft & Fire Protection', inc: true }, { text: 'Third Party Liability', inc: true }, { text: 'Free Roadside Assistance', inc: true }, { text: 'Cashless Claim Network', inc: true }] },
  { cat: 'four-wheeler', company: 'Adamjee Insurance', sub: 'Est. 1960 · SECP Licensed', badge: 'Premium', name: 'MG HS', make: '1500cc Turbo · Petrol · 2022–2024', tag: 'Comprehensive', price: 32000, features: [{ text: 'Full Own Damage', inc: true }, { text: 'Theft & Fire Protection', inc: true }, { text: 'Third Party Liability', inc: true }, { text: 'Windscreen Replacement', inc: true }, { text: '24/7 Roadside Assist', inc: true }] },
  { cat: 'four-wheeler', company: 'Adamjee Insurance', sub: 'Est. 1960 · SECP Licensed', badge: null, name: 'Suzuki Alto', make: '660cc · Petrol · 2021–2024', tag: 'Third Party Only', price: 5500, features: [{ text: 'Third Party Liability', inc: true }, { text: 'Bodily Injury Cover', inc: true }, { text: 'Property Damage Cover', inc: true }, { text: 'Own Damage', inc: false }, { text: 'Theft', inc: false }] },
  { cat: 'four-wheeler', company: 'Jubilee Insurance', sub: 'Est. 1953 · SECP Licensed', badge: null, name: 'Honda Civic', make: '1500cc · Petrol · 2019–2024', tag: 'Comprehensive', price: 20000, features: [{ text: 'Own Damage Coverage', inc: true }, { text: 'Natural Disaster Cover', inc: true }, { text: 'Third Party Liability', inc: true }, { text: '24/7 Claim Support', inc: true }, { text: 'Windscreen Cover', inc: true }] },
  { cat: 'four-wheeler', company: 'Jubilee Insurance', sub: 'Est. 1953 · SECP Licensed', badge: 'Best Value', name: 'Toyota Yaris', make: '1300cc · Petrol · 2020–2024', tag: 'Third Party + Fire & Theft', price: 8500, features: [{ text: 'Third Party Liability', inc: true }, { text: 'Fire Damage Cover', inc: true }, { text: 'Theft Protection', inc: true }, { text: 'Driver Personal Accident', inc: true }, { text: 'Own Damage', inc: false }] },
  { cat: 'four-wheeler', company: 'Jubilee Insurance', sub: 'Est. 1953 · SECP Licensed', badge: null, name: 'Honda BR-V', make: '1500cc · Petrol · 2021–2024', tag: 'Comprehensive', price: 22000, features: [{ text: 'Full Own Damage', inc: true }, { text: 'Theft & Fire', inc: true }, { text: 'Third Party Liability', inc: true }, { text: 'Towing Assistance', inc: true }, { text: 'Legal Liability Cover', inc: true }] },
  { cat: 'four-wheeler', company: 'EFU General', sub: 'Est. 1932 · SECP Licensed', badge: 'Premium', name: 'Toyota Fortuner', make: '2700cc · Petrol · 2020–2024', tag: 'Comprehensive', price: 28000, features: [{ text: 'Full Own Damage Cover', inc: true }, { text: 'Theft & Total Loss', inc: true }, { text: 'Third Party Liability', inc: true }, { text: 'Emergency Towing', inc: true }, { text: 'On-site Surveyor', inc: true }] },
  { cat: 'four-wheeler', company: 'EFU General', sub: 'Est. 1932 · SECP Licensed', badge: 'Best Value', name: 'Changan Alsvin', make: '1300cc · Petrol · 2020–2024', tag: 'Third Party + Fire & Theft', price: 15000, features: [{ text: 'Third Party Liability', inc: true }, { text: 'Fire & Explosion Cover', inc: true }, { text: 'Theft Protection', inc: true }, { text: 'Personal Accident Cover', inc: true }, { text: 'Own Damage', inc: false }] },
  { cat: 'four-wheeler', company: 'EFU General', sub: 'Est. 1932 · SECP Licensed', badge: null, name: 'Toyota Corolla Cross', make: '1800cc Hybrid · 2022–2024', tag: 'Comprehensive', price: 26000, features: [{ text: 'Own Damage Coverage', inc: true }, { text: 'Theft & Fire', inc: true }, { text: 'Third Party Liability', inc: true }, { text: 'Emergency Towing', inc: true }, { text: '24/7 Claim Support', inc: true }] },
  { cat: 'four-wheeler', company: 'UBL Insurers', sub: 'Est. 2000 · SECP Licensed', badge: 'Popular', name: 'KIA Sportage', make: '2000cc · Petrol · 2021–2024', tag: 'Comprehensive', price: 24000, features: [{ text: 'Accidental Damage Cover', inc: true }, { text: 'Anti-theft Cover', inc: true }, { text: 'Third Party Liability', inc: true }, { text: 'Hospital Cash Benefit', inc: true }, { text: 'Nationwide Garages', inc: true }] },
  { cat: 'four-wheeler', company: 'UBL Insurers', sub: 'Est. 2000 · SECP Licensed', badge: null, name: 'Hyundai Tucson', make: '2000cc · Petrol · 2021–2024', tag: 'Comprehensive', price: 27000, features: [{ text: 'Full Own Damage', inc: true }, { text: 'Theft & Fire', inc: true }, { text: 'Third Party Liability', inc: true }, { text: 'Windscreen Cover', inc: true }, { text: 'Roadside Assistance', inc: true }] },
  { cat: 'four-wheeler', company: 'UBL Insurers', sub: 'Est. 2000 · SECP Licensed', badge: 'Budget Pick', name: 'Suzuki Swift', make: '1200cc · Petrol · 2019–2024', tag: 'Third Party Only', price: 6500, features: [{ text: 'Third Party Liability', inc: true }, { text: 'Bodily Injury Cover', inc: true }, { text: 'Property Damage', inc: true }, { text: 'Own Damage', inc: false }, { text: 'Theft', inc: false }] },
  { cat: 'four-wheeler', company: 'Alfalah Insurance', sub: 'Est. 2004 · SECP Licensed', badge: 'Best Value', name: 'Suzuki Swift', make: '1200cc · Petrol · 2019–2024', tag: 'Third Party + Fire & Theft', price: 9000, features: [{ text: 'Third Party Liability', inc: true }, { text: 'Fire Damage Cover', inc: true }, { text: 'Theft Protection', inc: true }, { text: 'Driver Personal Accident', inc: true }, { text: 'Own Damage', inc: false }] },
  { cat: 'four-wheeler', company: 'Alfalah Insurance', sub: 'Est. 2004 · SECP Licensed', badge: null, name: 'Honda City', make: '1200cc · Petrol · 2020–2024', tag: 'Comprehensive', price: 14000, features: [{ text: 'Own Damage Cover', inc: true }, { text: 'Theft & Fire', inc: true }, { text: 'Third Party Liability', inc: true }, { text: 'Emergency Towing', inc: true }, { text: 'Free Roadside Assist', inc: true }] },
  { cat: 'four-wheeler', company: 'Alfalah Insurance', sub: 'Est. 2004 · SECP Licensed', badge: null, name: 'Suzuki Cultus', make: '1000cc · Petrol · 2020–2024', tag: 'Third Party Only', price: 5800, features: [{ text: 'Third Party Liability', inc: true }, { text: 'Bodily Injury Cover', inc: true }, { text: 'Property Damage', inc: true }, { text: 'Own Damage', inc: false }, { text: 'Theft', inc: false }] },
  { cat: 'four-wheeler', company: 'Askari Insurance', sub: 'Est. 1995 · SECP Licensed', badge: null, name: 'Suzuki Alto', make: '660cc · Petrol · 2020–2024', tag: 'Third Party Only', price: 7500, features: [{ text: 'Third Party Liability', inc: true }, { text: 'Bodily Injury Cover', inc: true }, { text: 'Property Damage Cover', inc: true }, { text: 'Own Damage', inc: false }, { text: 'Theft', inc: false }] },
  { cat: 'four-wheeler', company: 'Askari Insurance', sub: 'Est. 1995 · SECP Licensed', badge: 'Popular', name: 'Toyota Hilux', make: '2800cc Diesel · 2021–2024', tag: 'Comprehensive', price: 35000, features: [{ text: 'Full Own Damage', inc: true }, { text: 'Theft & Fire', inc: true }, { text: 'Third Party Liability', inc: true }, { text: 'Emergency Towing', inc: true }, { text: '24/7 Roadside Assist', inc: true }] },
  { cat: 'four-wheeler', company: 'Askari Insurance', sub: 'Est. 1995 · SECP Licensed', badge: null, name: 'Changan Oshan X7', make: '1500cc Turbo · 2022–2024', tag: 'Comprehensive', price: 21000, features: [{ text: 'Own Damage Coverage', inc: true }, { text: 'Theft & Fire', inc: true }, { text: 'Third Party Liability', inc: true }, { text: 'Windscreen Replacement', inc: true }, { text: 'On-site Surveyor', inc: true }] },
  { cat: 'four-wheeler', company: 'Atlas Insurance', sub: 'Est. 1980 · SECP Licensed', badge: 'New Arrival', name: 'Hyundai Elantra', make: '1600cc · Petrol · 2021–2024', tag: 'Comprehensive', price: 22000, features: [{ text: 'Own Damage Coverage', inc: true }, { text: 'Theft & Fire', inc: true }, { text: 'Third Party Liability', inc: true }, { text: 'Towing Assistance', inc: true }, { text: 'Legal Liability Cover', inc: true }] },
  { cat: 'four-wheeler', company: 'Atlas Insurance', sub: 'Est. 1980 · SECP Licensed', badge: null, name: 'MG ZS EV', make: 'Electric · 2023–2024', tag: 'Comprehensive', price: 30000, features: [{ text: 'Own Damage Cover', inc: true }, { text: 'Theft & Fire', inc: true }, { text: 'Third Party Liability', inc: true }, { text: 'Battery Damage Cover', inc: true }, { text: 'Roadside Assistance', inc: true }] },
  { cat: 'four-wheeler', company: 'Atlas Insurance', sub: 'Est. 1980 · SECP Licensed', badge: 'Budget Pick', name: 'Suzuki Mehran', make: '800cc · Petrol · 2018–2023', tag: 'Third Party Only', price: 4800, features: [{ text: 'Third Party Liability', inc: true }, { text: 'Bodily Injury Cover', inc: true }, { text: 'Property Damage', inc: true }, { text: 'Own Damage', inc: false }, { text: 'Theft', inc: false }] },
  { cat: 'two-wheeler', company: 'Adamjee Insurance', sub: 'Est. 1960 · SECP Licensed', badge: 'Top Pick', name: 'Honda CB150F', make: '150cc · Petrol · 2019–2024', tag: 'Comprehensive', price: 3000, features: [{ text: 'Accidental Damage Cover', inc: true }, { text: 'Theft Protection', inc: true }, { text: 'Third Party Liability', inc: true }, { text: 'Personal Accident Rider', inc: true }, { text: 'Free Towing Service', inc: true }] },
  { cat: 'two-wheeler', company: 'Adamjee Insurance', sub: 'Est. 1960 · SECP Licensed', badge: null, name: 'Honda CG125', make: '125cc · Petrol · 2020–2024', tag: 'Third Party Only', price: 2000, features: [{ text: 'Third Party Liability', inc: true }, { text: 'Bodily Injury Cover', inc: true }, { text: 'Property Damage', inc: true }, { text: 'Own Damage', inc: false }, { text: 'Theft', inc: false }] },
  { cat: 'two-wheeler', company: 'Adamjee Insurance', sub: 'Est. 1960 · SECP Licensed', badge: 'Premium', name: 'Yamaha MT-15', make: '155cc · Petrol · 2022–2024', tag: 'Comprehensive', price: 4500, features: [{ text: 'Full Own Damage', inc: true }, { text: 'Theft & Fire', inc: true }, { text: 'Third Party Liability', inc: true }, { text: 'Rider Accident Cover', inc: true }, { text: 'Genuine Parts Guarantee', inc: true }] },
  { cat: 'two-wheeler', company: 'Jubilee Insurance', sub: 'Est. 1953 · SECP Licensed', badge: 'Best Value', name: 'Metro Thunder 70', make: '70cc · Petrol · 2019–2024', tag: 'Third Party Only', price: 2600, features: [{ text: 'Third Party Liability', inc: true }, { text: 'Bodily Injury Cover', inc: true }, { text: 'Property Damage', inc: true }, { text: 'Affordable Premium', inc: true }, { text: 'Own Damage', inc: false }] },
  { cat: 'two-wheeler', company: 'Jubilee Insurance', sub: 'Est. 1953 · SECP Licensed', badge: null, name: 'Yamaha YBR125', make: '125cc · Petrol · 2020–2024', tag: 'Third Party + Fire & Theft', price: 3500, features: [{ text: 'Third Party Liability', inc: true }, { text: 'Fire Damage Cover', inc: true }, { text: 'Theft Protection', inc: true }, { text: 'Rider Accident Cover', inc: true }, { text: 'Own Damage', inc: false }] },
  { cat: 'two-wheeler', company: 'Jubilee Insurance', sub: 'Est. 1953 · SECP Licensed', badge: null, name: 'Honda CB500F', make: '500cc · Petrol · 2021–2024', tag: 'Comprehensive', price: 6000, features: [{ text: 'Full Own Damage', inc: true }, { text: 'Theft & Fire', inc: true }, { text: 'Third Party Liability', inc: true }, { text: 'Rider Personal Accident', inc: true }, { text: '24/7 Roadside Assist', inc: true }] },
  { cat: 'two-wheeler', company: 'EFU General', sub: 'Est. 1932 · SECP Licensed', badge: null, name: 'Suzuki GD110S', make: '110cc · Petrol · 2018–2024', tag: 'Third Party Only', price: 2500, features: [{ text: 'Third Party Liability', inc: true }, { text: 'Bodily Injury Cover', inc: true }, { text: 'Property Damage', inc: true }, { text: 'Own Damage', inc: false }, { text: 'Theft', inc: false }] },
  { cat: 'two-wheeler', company: 'EFU General', sub: 'Est. 1932 · SECP Licensed', badge: 'Budget Pick', name: 'Road Prince Wego', make: '100cc · Petrol · 2020–2024', tag: 'Third Party + Fire & Theft', price: 3200, features: [{ text: 'Third Party Liability', inc: true }, { text: 'Fire & Explosion', inc: true }, { text: 'Theft Protection', inc: true }, { text: 'Rider Personal Accident', inc: true }, { text: 'Own Damage', inc: false }] },
  { cat: 'two-wheeler', company: 'EFU General', sub: 'Est. 1932 · SECP Licensed', badge: 'Most Popular', name: 'Honda CB150R', make: '150cc · Petrol · 2021–2024', tag: 'Comprehensive', price: 3800, features: [{ text: 'Accidental Damage', inc: true }, { text: 'Theft Cover', inc: true }, { text: 'Third Party Liability', inc: true }, { text: 'Rider Personal Accident', inc: true }, { text: 'Free Towing Service', inc: true }] },
  { cat: 'two-wheeler', company: 'UBL Insurers', sub: 'Est. 2000 · SECP Licensed', badge: 'Sport', name: 'Yamaha R15', make: '155cc · Petrol · 2021–2024', tag: 'Comprehensive', price: 4200, features: [{ text: 'Full Own Damage Cover', inc: true }, { text: 'Theft & Fire', inc: true }, { text: 'Third Party Liability', inc: true }, { text: 'Rider Personal Accident', inc: true }, { text: 'Sport Bike Specialist', inc: true }] },
  { cat: 'two-wheeler', company: 'UBL Insurers', sub: 'Est. 2000 · SECP Licensed', badge: null, name: 'Kawasaki Ninja 400', make: '400cc · Petrol · 2022–2024', tag: 'Comprehensive', price: 7500, features: [{ text: 'Full Own Damage', inc: true }, { text: 'Theft & Fire', inc: true }, { text: 'Third Party Liability', inc: true }, { text: 'Rider Accident Cover', inc: true }, { text: 'Genuine Parts Guarantee', inc: true }] },
  { cat: 'two-wheeler', company: 'UBL Insurers', sub: 'Est. 2000 · SECP Licensed', badge: 'Budget Pick', name: 'Honda CD70', make: '70cc · Petrol · 2019–2024', tag: 'Third Party Only', price: 1800, features: [{ text: 'Third Party Liability', inc: true }, { text: 'Bodily Injury Cover', inc: true }, { text: 'Property Damage', inc: true }, { text: 'Own Damage', inc: false }, { text: 'Theft', inc: false }] },
  { cat: 'two-wheeler', company: 'Alfalah Insurance', sub: 'Est. 2004 · SECP Licensed', badge: 'Most Popular', name: 'Honda CD70', make: '70cc · Petrol · 2018–2024', tag: 'Third Party Only', price: 2200, features: [{ text: 'Third Party Liability', inc: true }, { text: 'Bodily Injury Cover', inc: true }, { text: 'Property Damage', inc: true }, { text: 'Low-cost Entry Plan', inc: true }, { text: 'Own Damage', inc: false }] },
  { cat: 'two-wheeler', company: 'Alfalah Insurance', sub: 'Est. 2004 · SECP Licensed', badge: null, name: 'Unique UD-70', make: '70cc · Petrol · 2020–2024', tag: 'Third Party + Fire & Theft', price: 2600, features: [{ text: 'Third Party Liability', inc: true }, { text: 'Fire Damage Cover', inc: true }, { text: 'Theft Protection', inc: true }, { text: 'Rider Accident Benefit', inc: true }, { text: 'Own Damage', inc: false }] },
  { cat: 'two-wheeler', company: 'Alfalah Insurance', sub: 'Est. 2004 · SECP Licensed', badge: null, name: 'Ravi Piaggio', make: '150cc · Petrol · 2021–2024', tag: 'Comprehensive', price: 3400, features: [{ text: 'Accidental Damage', inc: true }, { text: 'Theft & Fire', inc: true }, { text: 'Third Party Liability', inc: true }, { text: 'Personal Accident Rider', inc: true }, { text: 'Free Towing', inc: true }] },
  { cat: 'two-wheeler', company: 'Askari Insurance', sub: 'Est. 1995 · SECP Licensed', badge: null, name: 'United Bravo', make: '70cc · Petrol · 2019–2024', tag: 'Third Party + Fire & Theft', price: 2800, features: [{ text: 'Third Party Liability', inc: true }, { text: 'Fire & Explosion', inc: true }, { text: 'Theft Protection', inc: true }, { text: 'Rider Accident Benefit', inc: true }, { text: 'Own Damage', inc: false }] },
  { cat: 'two-wheeler', company: 'Askari Insurance', sub: 'Est. 1995 · SECP Licensed', badge: 'Best Value', name: 'Super Power SP-70', make: '70cc · Petrol · 2020–2024', tag: 'Third Party Only', price: 1900, features: [{ text: 'Third Party Liability', inc: true }, { text: 'Bodily Injury Cover', inc: true }, { text: 'Property Damage', inc: true }, { text: 'Own Damage', inc: false }, { text: 'Theft', inc: false }] },
  { cat: 'two-wheeler', company: 'Askari Insurance', sub: 'Est. 1995 · SECP Licensed', badge: null, name: 'Honda CBR150R', make: '150cc · Petrol · 2022–2024', tag: 'Comprehensive', price: 4000, features: [{ text: 'Full Own Damage', inc: true }, { text: 'Theft & Fire', inc: true }, { text: 'Third Party Liability', inc: true }, { text: 'Rider Accident Cover', inc: true }, { text: 'Genuine Parts Guarantee', inc: true }] },
  { cat: 'two-wheeler', company: 'Atlas Insurance', sub: 'Est. 1980 · SECP Licensed', badge: 'Sport', name: 'Kawasaki Z125', make: '125cc · Petrol · 2021–2024', tag: 'Comprehensive', price: 3800, features: [{ text: 'Own Damage Cover', inc: true }, { text: 'Theft & Fire', inc: true }, { text: 'Third Party Liability', inc: true }, { text: 'Rider Accident Cover', inc: true }, { text: 'Genuine Parts Guarantee', inc: true }] },
  { cat: 'two-wheeler', company: 'Atlas Insurance', sub: 'Est. 1980 · SECP Licensed', badge: null, name: 'Qingqi Loader', make: '150cc · Petrol · 2020–2024', tag: 'Third Party Only', price: 2100, features: [{ text: 'Third Party Liability', inc: true }, { text: 'Bodily Injury Cover', inc: true }, { text: 'Property Damage', inc: true }, { text: 'Own Damage', inc: false }, { text: 'Theft', inc: false }] },
  { cat: 'two-wheeler', company: 'Atlas Insurance', sub: 'Est. 1980 · SECP Licensed', badge: 'New Arrival', name: 'Suzuki GS150SE', make: '150cc · Petrol · 2022–2024', tag: 'Comprehensive', price: 3600, features: [{ text: 'Accidental Damage', inc: true }, { text: 'Theft & Fire', inc: true }, { text: 'Third Party Liability', inc: true }, { text: 'Personal Accident Rider', inc: true }, { text: 'Free Towing Service', inc: true }] }
];

var activeCat = 'all';

var obs = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target); }
  });
}, { threshold: 0.06 });

document.querySelectorAll('.fade').forEach(function (el) { obs.observe(el); });

var cardObs = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) { e.target.classList.add('animate-in'); cardObs.unobserve(e.target); }
  });
}, { threshold: 0.06 });

function buildCard(v, index) {
  var card = document.createElement('div');
  card.className = 'plan-card';
  

  var badgeHtml = v.badge ? '<div class="plan-badge">' + v.badge + '</div>' : '';

  var featuresHtml = v.features.map(function (f) {
    var icon = f.inc ? '<i class="fas fa-check-circle"></i>' : '<i class="fas fa-times-circle" style="color:#ccc"></i>';
    var notText = f.inc ? '' : ' (Not Included)';
    return '<li>' + icon + ' ' + f.text + notText + '</li>';
  }).join('');

  var safeCompany = v.company.replace(/'/g, "\\'");
  var safeName = v.name.replace(/'/g, "\\'");
  var safeMake = v.make.replace(/'/g, "\\'");
  var safeTag = v.tag.replace(/'/g, "\\'");

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
    '<button class="btn-insure" onclick="openVehicleModal(this)">View Details</button>' +
    '</div>' +
    '</div>';

  card.querySelector('.btn-insure').dataset.company = v.company;
  card.querySelector('.btn-insure').dataset.name = v.name;
  card.querySelector('.btn-insure').dataset.make = v.make;
  card.querySelector('.btn-insure').dataset.tag = v.tag;
  card.querySelector('.btn-insure').dataset.price = v.price;

  return card;
}

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
      card.style.animationDelay = (i * 0.08) + 's';
      setTimeout(function () {
        if (card.getBoundingClientRect().top < window.innerHeight) {
          card.classList.add('animate-in');
        } else {
          cardObs.observe(card);
        }
      }, 10);
    });
    noRes.style.display = filtered.length === 0 ? 'block' : 'none';
  });
}

document.querySelectorAll('.tab-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.tab-btn').forEach(function (b) { b.classList.remove('active'); });
    this.classList.add('active');
    activeCat = this.dataset.cat;
    renderAll();
  });
});

function openVehicleModal(btn) {
  var company = btn.dataset.company;
  var name = btn.dataset.name;
  var make = btn.dataset.make;
  var tag = btn.dataset.tag;
  var price = parseInt(btn.dataset.price);

  var isThirdParty = tag.toLowerCase().indexOf('third party') !== -1 && tag.toLowerCase().indexOf('comprehensive') === -1;
  var isComprehensive = tag.toLowerCase().indexOf('comprehensive') !== -1;
  var isFireTheft = tag.toLowerCase().indexOf('fire') !== -1;

  var coverage, exclusions, claimProcess, documents, excess, workshops, validity;

  if (isComprehensive) {
    coverage = ['Accidental damage to own vehicle', 'Theft & fire protection', 'Third-party bodily injury & death', 'Third-party property damage', 'Natural disaster cover (flood, earthquake)', 'Windscreen & glass repair', 'Emergency towing assistance', 'Personal accident cover for driver'];
    exclusions = ['Wear & tear or mechanical breakdown', 'Unlicensed driver at time of incident', 'Driver under influence of alcohol or drugs', 'Racing or speed testing events', 'War, nuclear or civil unrest risk', 'Damage outside insured geographic limits'];
    claimProcess = ['Contact insurer helpline within 24 hours of incident', 'Lodge police FIR for theft or major accidents', 'Submit completed claim form with photos', 'Insurer surveyor inspects vehicle within 48 hours', 'Repair at approved workshop or cash settlement offered', 'Claim settled within 5–7 working days'];
    excess = 'PKR 3,000 – 10,000 per claim';
    workshops = '300+ partner workshops nationwide';
    validity = '12 months from policy start date';
  } else if (isFireTheft) {
    coverage = ['Fire & explosion damage', 'Theft & attempted theft', 'Third-party bodily injury', 'Third-party property damage', 'Rider/driver personal accident benefit'];
    exclusions = ['Own accidental damage (not covered)', 'Mechanical or electrical failure', 'Unlicensed driver', 'Racing or stunt events', 'War or civil unrest'];
    claimProcess = ['Notify insurer within 24 hours', 'Police FIR required for theft claims', 'Submit claim form with supporting documents', 'Surveyor assessment within 48 hours', 'Settlement within 5–7 working days'];
    excess = 'PKR 2,000 – 5,000 per claim';
    workshops = 'Selected partner workshops';
    validity = '12 months from policy start date';
  } else {
    coverage = ['Third-party bodily injury & death', 'Third-party property damage', 'Legal defence costs', 'Emergency medical expenses for third party', 'Nationwide validity'];
    exclusions = ['Own vehicle damage', 'Theft of own vehicle', 'Driver or passenger injury', 'Own property damage', 'Contractual liability'];
    claimProcess = ['Report incident to insurer within 24 hours', 'Exchange details with third party', 'Submit claim form with police report', 'Third-party assessment carried out by insurer', 'Payment made directly to third party'];
    excess = 'No excess on third-party claims';
    workshops = 'N/A — Third Party Only';
    validity = '12 months from policy start date';
  }

  documents = ['Valid CNIC copy', 'Driving licence (original or copy)', 'Vehicle registration book', 'Police FIR (for theft or major accidents)'];

  document.getElementById('modal-company-name').textContent = company;
  document.getElementById('modal-plan-name').textContent = name;
  document.getElementById('modal-plan-make').textContent = make;
  document.getElementById('modal-plan-type').textContent = tag;
  document.getElementById('modal-plan-price').textContent = 'PKR ' + price.toLocaleString() + ' / year';
  document.getElementById('modal-validity').textContent = validity;
  document.getElementById('modal-excess').textContent = excess;
  document.getElementById('modal-workshops').textContent = workshops;

  document.getElementById('modal-coverage-list').innerHTML = coverage.map(function (item) { return '<li><i class="fas fa-check-circle"></i> ' + item + '</li>'; }).join('');
  document.getElementById('modal-exclusions-list').innerHTML = exclusions.map(function (item) { return '<li><i class="fas fa-times-circle"></i> ' + item + '</li>'; }).join('');
  document.getElementById('modal-claim-list').innerHTML = claimProcess.map(function (step, i) { return '<li><span class="step-num">' + (i + 1) + '</span> ' + step + '</li>'; }).join('');
  document.getElementById('modal-docs-list').innerHTML = documents.map(function (doc) { return '<li><i class="fas fa-file-alt"></i> ' + doc + '</li>'; }).join('');

  document.getElementById('plan-modal').classList.add('active');
  document.getElementById('modal-overlay').classList.add('active');
  document.body.classList.add('modal-open');
  switchTab('coverage');
}

function closePlanModal() {
  document.getElementById('plan-modal').classList.remove('active');
  document.getElementById('modal-overlay').classList.remove('active');
  document.body.classList.remove('modal-open');
}

function switchTab(tab) {
  document.querySelectorAll('.modal-tab-btn').forEach(function (btn) { btn.classList.remove('active'); });
  document.querySelectorAll('.modal-tab-content').forEach(function (c) { c.classList.remove('active'); });
  document.querySelector('.modal-tab-btn[data-tab="' + tab + '"]').classList.add('active');
  document.getElementById('tab-' + tab).classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('modal-overlay').addEventListener('click', closePlanModal);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closePlanModal(); });
});

renderAll();

var hamburger = document.querySelector('.hamburger');
var navlinks = document.querySelector('.navlinks');
if (hamburger && navlinks) {
  hamburger.addEventListener('click', function () { hamburger.classList.toggle('open'); navlinks.classList.toggle('open'); });
  navlinks.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { hamburger.classList.remove('open'); navlinks.classList.remove('open'); }); });
}