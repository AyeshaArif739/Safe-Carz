let activeCompany = 'all';
document.querySelectorAll('.company-panel').forEach(panel => {
    panel.style.display = 'block';
});

document.querySelectorAll('.company-btn').forEach(button => {
    button.addEventListener('click', function () {
        document.querySelectorAll('.company-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        activeCompany = this.dataset.company;
        applyFilters();
    });
});

function applyFilters() {
    if (activeCompany === 'all') {
        document.querySelectorAll('.company-panel').forEach(panel => panel.style.display = 'block');
    } else {
        document.querySelectorAll('.company-panel').forEach(panel => panel.style.display = 'none');
        const selected = document.getElementById('panel-' + activeCompany);
        if (selected) selected.style.display = 'block';
    }
}

const insuranceData = [
    {
        id: "zurich",
        name: "Zurich Insurance ",
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

const planDetails = {
    "zurich": {
        "Comprehensive Cover": {
            coverage: ["Accidental damage to own vehicle", "Theft & attempted theft", "Fire & explosion damage", "Third-party bodily injury", "Third-party property damage up to PKR 5,00,000", "Windscreen & glass cover", "Natural disasters (flood, earthquake)", "24/7 roadside assistance nationwide"],
            exclusions: ["Wear & tear or mechanical breakdown", "Driver under influence of alcohol/drugs", "Unlicensed driver", "Racing or speed testing", "War or nuclear risk"],
            claimProcess: ["Call 24/7 helpline: 0800-ZURICH", "File report at nearest police station for theft/major accidents", "Submit claim form with photos within 48 hours", "Vehicle inspection by Zurich surveyor", "Repair at approved workshop or cashless settlement", "Claim settled within 5–7 working days"],
            workshops: "500+ approved workshops nationwide",
            excess: "PKR 5,000 – 10,000 per claim",
            documents: ["CNIC copy", "Driving licence", "Vehicle registration book", "Police FIR for theft/major accidents"],
            validity: "12 months from policy date"
        },
        "Commercial Vehicle Plan": {
            coverage: ["Own damage for commercial vehicles", "Goods in transit up to declared value", "Third-party liability", "Driver personal accident cover", "Fire & theft", "Overturning & collision", "Loading/unloading damage"],
            exclusions: ["Overloaded vehicle beyond permitted limit", "Perishable goods spoilage", "Contraband or illegal goods", "Mechanical/electrical breakdown", "Driver without valid commercial licence"],
            claimProcess: ["Notify Zurich within 24 hours of incident", "Submit commercial claim form with cargo documents", "Surveyor assessment within 48 hours", "Approved repair or cash settlement", "Settled within 7–10 working days"],
            workshops: "300+ commercial vehicle workshops",
            excess: "PKR 10,000 – 20,000 per claim",
            documents: ["CNIC & driving licence", "Vehicle registration", "Route permit & goods manifest", "Police report for accidents"],
            validity: "12 months from policy date"
        },
        "Fleet Insurance": {
            coverage: ["All registered fleet vehicles under one policy", "Comprehensive cover for each vehicle", "Third-party liability", "Driver personal accident", "Fire, theft & natural perils", "Flexible add-ons per vehicle type"],
            exclusions: ["Vehicles not listed on fleet schedule", "Non-authorised drivers", "Racing or track use", "Intentional damage", "War & civil unrest"],
            claimProcess: ["Dedicated fleet claims manager assigned", "24/7 fleet emergency hotline", "On-site assessment within 24 hours", "Centralised billing & reporting", "Monthly fleet claim summary reports"],
            workshops: "Priority access at 500+ workshops",
            excess: "Negotiable based on fleet size",
            documents: ["Fleet vehicle list with registration details", "Driver list with licences", "Company NTN & registration", "Prior loss history"],
            validity: "12 months, renewable annually"
        }
    },
    "efu": {
        "Third Party Liability": {
            coverage: ["Third-party bodily injury & death", "Third-party property damage up to PKR 3,00,000", "Legal defence costs", "Emergency medical expenses for third party", "Nationwide validity"],
            exclusions: ["Own vehicle damage", "Theft of own vehicle", "Injury to own driver/passengers", "Property belonging to the insured", "Contractual liability"],
            claimProcess: ["Report incident to EFU within 24 hours", "Exchange details with third party", "Submit claim form & police report", "Third-party assessment by EFU", "Settlement paid directly to third party"],
            workshops: "N/A — Third Party Only policy",
            excess: "No excess for third-party claims",
            documents: ["CNIC", "Driving licence", "Vehicle registration", "Police FIR", "Third-party details"],
            validity: "12 months from policy date"
        },
        "Comprehensive Cover": {
            coverage: ["Accidental damage to own vehicle", "Theft & fire", "Third-party liability", "Emergency towing up to PKR 3,000", "Windscreen repair", "Natural calamities", "Strike & riot damage"],
            exclusions: ["Mechanical or electrical failure", "Tyre damage without accident", "Unlicensed driver", "Driver under influence", "Racing or rallying"],
            claimProcess: ["Call EFU helpline: 0800-EFU00", "Lodge police report where required", "Submit claim form with photos", "EFU surveyor inspection within 24–48 hours", "Repair at EFU network or reimbursement", "Claim settled in 5–7 business days"],
            workshops: "400+ partner workshops across Pakistan",
            excess: "PKR 3,000 – 8,000 per claim",
            documents: ["CNIC", "Driving licence", "Vehicle registration", "Police FIR for theft/collision"],
            validity: "12 months from policy date"
        },
        "Motorcycle Plan": {
            coverage: ["Accidental damage", "Theft & fire", "Third-party liability", "Rider personal accident cover for death & disability", "Emergency breakdown assistance"],
            exclusions: ["Rider without valid motorcycle licence", "Pillion rider injury unless add-on purchased", "Racing or stunt riding", "Mechanical failure", "Gradual deterioration"],
            claimProcess: ["Notify EFU within 24 hours", "Police report for theft", "Submit claim form with photos", "Surveyor inspection", "Claim settled within 5 working days"],
            workshops: "200+ motorcycle workshops",
            excess: "PKR 1,000 – 2,000 per claim",
            documents: ["CNIC", "Motorcycle driving licence", "Registration certificate"],
            validity: "12 months from policy date"
        }
    },
    "adamjee": {
        "Two Wheeler Comprehensive": {
            coverage: ["Accidental damage to motorcycle", "Theft & fire", "Third-party liability", "Free workshop pickup & drop", "Rider personal accident", "Windscreen & accessories cover"],
            exclusions: ["Racing or track events", "Unlicensed rider", "Outside geographical limits", "Mechanical/electrical fault", "Driver intoxication"],
            claimProcess: ["Call Adamjee: 021-111-ADAMJEE", "Free pickup from accident site arranged", "Claim form submission with photos", "Surveyor assessment", "Repair at Adamjee workshop network", "Settlement within 5 business days"],
            workshops: "300+ motorcycle & car workshops",
            excess: "PKR 1,500 per claim",
            documents: ["CNIC", "Motorcycle licence", "Registration book"],
            validity: "12 months"
        },
        "Car Comprehensive Plan": {
            coverage: ["Own vehicle accidental damage", "Theft & fire", "Third-party liability", "500+ partner workshop access", "Emergency towing", "Total loss settlement"],
            exclusions: ["Wear & tear", "Tyre damage only", "Unlicensed driver", "Commercial use on personal policy", "War risk"],
            claimProcess: ["Report to Adamjee within 24 hours", "Police FIR where required", "Fill claim form & attach photos", "Surveyor visit within 48 hours", "Repair or cash settlement offered", "Closed within 7 working days"],
            workshops: "500+ authorised car workshops",
            excess: "PKR 5,000 per claim",
            documents: ["CNIC", "Driving licence", "Registration book", "Police FIR"],
            validity: "12 months"
        },
        "Third Party Only": {
            coverage: ["Third-party bodily injury & death", "Property damage liability", "Legal expenses", "Nationwide coverage"],
            exclusions: ["Own vehicle damage or theft", "Driver's personal injury", "Passenger liability unless added", "Contractual liability"],
            claimProcess: ["Report incident within 24 hours", "Exchange details with third party", "Submit claim form & FIR", "Settlement with third party directly"],
            workshops: "N/A",
            excess: "No excess on third-party claims",
            documents: ["CNIC", "Driving licence", "Vehicle registration", "Police FIR"],
            validity: "12 months"
        }
    },
    "jubilee": {
        "Fleet Insurance": {
            coverage: ["All vehicles under a single unified policy", "Comprehensive coverage per vehicle", "Third-party liability", "Driver personal accident", "Goods in transit optional", "Dedicated claims manager"],
            exclusions: ["Vehicles not on scheduled list", "Unauthorised drivers", "Racing or track use", "Intentional damage", "Civil war or terrorism"],
            claimProcess: ["Dedicated fleet manager handles all claims", "24/7 emergency hotline for fleet incidents", "On-site assessment within 24 hours", "Centralised billing and claim tracking", "Monthly reporting & analytics provided"],
            workshops: "Priority service at 400+ workshops",
            excess: "Customised per fleet agreement",
            documents: ["Fleet vehicle schedule", "Driver authorisation list", "Company registration & NTN", "Prior insurance history"],
            validity: "Annual policy, auto-renewable"
        },
        "Commercial Vehicle": {
            coverage: ["Own damage for commercial vehicles", "Goods in transit cover", "Third-party liability", "Driver personal accident", "Fire & theft", "Loading/unloading cover"],
            exclusions: ["Overloaded vehicles", "Illegal or contraband goods", "Driver without commercial licence", "Mechanical breakdown", "Perishable goods spoilage"],
            claimProcess: ["Notify Jubilee within 24 hours", "Submit cargo manifest & claim form", "Surveyor assessment within 48 hours", "Repair or cash settlement", "Settled in 7–10 days"],
            workshops: "250+ commercial vehicle workshops",
            excess: "PKR 8,000 – 15,000 per claim",
            documents: ["CNIC", "Commercial driving licence", "Vehicle registration", "Route permit", "Goods manifest"],
            validity: "12 months"
        },
        "Comprehensive Car Plan": {
            coverage: ["Accidental damage", "Theft & fire", "Third-party liability", "Towing assistance", "Natural disaster cover", "Strike & riot damage"],
            exclusions: ["Mechanical failure", "Tyre-only damage", "Unlicensed driver", "Racing use", "Driver intoxication"],
            claimProcess: ["Call Jubilee helpline within 24 hours", "Lodge police FIR if needed", "Submit claim form & photos", "Surveyor inspection within 48 hours", "Repair or settlement in 5–7 days"],
            workshops: "400+ partner workshops",
            excess: "PKR 5,000 per claim",
            documents: ["CNIC", "Driving licence", "Registration book", "FIR if applicable"],
            validity: "12 months"
        }
    },
    "tpl": {
        "Smart Comprehensive": {
            coverage: ["GPS real-time vehicle tracking included free", "Accidental damage", "Theft & fire", "Third-party liability", "Instant online policy issuance", "Digital claim filing via app", "Cashless repairs at network workshops"],
            exclusions: ["Mechanical/electrical breakdown", "GPS device tampering", "Unlicensed driver", "Racing", "War risk"],
            claimProcess: ["Open TPL app and tap File Claim", "Upload photos — location auto-captured via GPS", "Surveyor assigned within 24 hours", "Track claim status live in app", "Cashless repair or bank transfer in 3–5 days"],
            workshops: "350+ partner workshops, all app-integrated",
            excess: "PKR 4,000 per claim",
            documents: ["CNIC via app", "Driving licence", "Vehicle registration", "Photos uploaded in-app"],
            validity: "12 months, renewable via app"
        },
        "Third Party Plan": {
            coverage: ["Third-party bodily injury", "Property damage", "Digital policy card — no physical card needed", "Online renewal in 2 minutes", "24/7 support via app"],
            exclusions: ["Own vehicle damage", "Own driver injury", "Passenger liability", "Contractual liability"],
            claimProcess: ["Report via TPL app instantly", "Submit FIR digitally", "Third-party liaison handled by TPL team", "Settled within 5 working days"],
            workshops: "N/A",
            excess: "No excess for third-party",
            documents: ["CNIC", "Driving licence", "Registration — all uploadable via app"],
            validity: "12 months"
        },
        "Bike Smart Plan": {
            coverage: ["Accidental damage", "Theft cover", "Digital policy card", "Online claim filing", "Third-party liability"],
            exclusions: ["Racing or stunts", "Unlicensed rider", "Mechanical failure", "Outside Pakistan"],
            claimProcess: ["File claim via TPL app with photos", "Surveyor assigned within 24 hours", "Repair or settlement in 4–5 days"],
            workshops: "150+ motorcycle workshops",
            excess: "PKR 1,000 per claim",
            documents: ["CNIC", "Motorcycle licence", "Registration"],
            validity: "12 months"
        }
    },
    "salama": {
        "Takaful Comprehensive": {
            coverage: ["Shariah-compliant mutual contribution model", "Accidental damage to own vehicle", "Theft & fire", "Third-party liability", "Natural disaster cover", "Surplus sharing at policy end if applicable"],
            exclusions: ["Non-Halal business use", "Intentional damage", "Unlicensed driver", "Racing", "War & nuclear risk"],
            claimProcess: ["Contact Salama within 24 hours", "Claim reviewed by Takaful committee", "Surveyor assessment within 48 hours", "Repair at approved workshop or settlement", "Settled within 5–7 days per Shariah guidelines"],
            workshops: "250+ Shariah-approved workshops",
            excess: "PKR 4,000 – 8,000 per claim",
            documents: ["CNIC", "Driving licence", "Registration", "FIR if required"],
            validity: "12 months Takaful year"
        },
        "Takaful Third Party": {
            coverage: ["Shariah-compliant model", "Third-party bodily injury & death", "Property damage liability", "Legal costs", "Nationwide validity"],
            exclusions: ["Own vehicle damage", "Own driver injury", "Contractual liability", "War risk"],
            claimProcess: ["Report to Salama within 24 hours", "File police FIR", "Submit claim form with third-party details", "Third-party settlement per Takaful fund"],
            workshops: "N/A",
            excess: "No excess on third-party",
            documents: ["CNIC", "Driving licence", "Registration", "FIR", "Third-party details"],
            validity: "12 months"
        },
        "Commercial Takaful": {
            coverage: ["Shariah-compliant commercial vehicle cover", "Own damage", "Goods in transit", "Third-party liability", "Driver personal accident", "Fire & theft"],
            exclusions: ["Non-Halal goods or cargo", "Overloaded vehicles", "Unlicensed driver", "Mechanical failure"],
            claimProcess: ["Notify Salama commercial team within 24 hours", "Submit cargo documents & claim form", "Takaful surveyor assessment within 48 hours", "Settled within 7–10 days"],
            workshops: "200+ commercial workshops",
            excess: "PKR 8,000 – 12,000 per claim",
            documents: ["CNIC", "Commercial licence", "Registration", "Route permit", "Cargo manifest"],
            validity: "12 months"
        }
    }
};

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
                        ${plan.features.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('')}
                    </ul>
                    <div class="plan-divider"></div>
                    <div class="plan-price-row">
                        <div>
                            <div class="plan-price-label">Starting from</div>
                            <div class="plan-price">PKR ${plan.price} <span>/ year</span></div>
                        </div>
                        <button class="btn-insure" onclick="openPlanModal('${company.id}', '${plan.name}', '${company.name}', '${plan.price}', '${plan.type}')">View Details</button>
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
                <div class="plans-grid">${plansHtml}</div>
            </div>
        `;

        renderContainer.innerHTML += panelHtml;
    });

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

function openPlanModal(companyId, planName, companyName, price, type) {
    const details = planDetails[companyId] && planDetails[companyId][planName];
    if (!details) return;

    document.getElementById('modal-company-name').textContent = companyName;
    document.getElementById('modal-plan-name').textContent = planName;
    document.getElementById('modal-plan-type').textContent = type;
    document.getElementById('modal-plan-price').textContent = 'PKR ' + price + ' / year';
    document.getElementById('modal-validity').textContent = details.validity;
    document.getElementById('modal-excess').textContent = details.excess;
    document.getElementById('modal-workshops').textContent = details.workshops;

    document.getElementById('modal-coverage-list').innerHTML =
        details.coverage.map(item => `<li><i class="fas fa-check-circle"></i> ${item}</li>`).join('');

    document.getElementById('modal-exclusions-list').innerHTML =
        details.exclusions.map(item => `<li><i class="fas fa-times-circle"></i> ${item}</li>`).join('');

    document.getElementById('modal-claim-list').innerHTML =
        details.claimProcess.map((step, i) => `<li><span class="step-num">${i + 1}</span> ${step}</li>`).join('');

    document.getElementById('modal-docs-list').innerHTML =
        details.documents.map(doc => `<li><i class="fas fa-file-alt"></i> ${doc}</li>`).join('');

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
    document.querySelectorAll('.modal-tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.modal-tab-content').forEach(c => c.classList.remove('active'));
    document.querySelector(`.modal-tab-btn[data-tab="${tab}"]`).classList.add('active');
    document.getElementById('tab-' + tab).classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('modal-overlay').addEventListener('click', closePlanModal);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closePlanModal(); });
});

renderAllCompanies();