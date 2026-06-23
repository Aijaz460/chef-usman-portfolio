import React, { useEffect, useMemo, useState } from "react";

const chef = {
  name: "Mohd Usman Khan",
  title: "Executive Chef",
  phone: "+91 99585 02431",
  email: "chefusmanolive@gmail.com",
  location: "Vasundhara, Ghaziabad, India",
  tagline: "Crafting timeless experiences through passion, precision and purpose.",
  statement:
    "Dynamic and results-driven Executive Chef with 20+ years of experience across world-renowned luxury 5-star hotel brands including Marriott, Hyatt, Oberoi, Ritz-Carlton and Claridge. Proven expertise in spearheading multi-outlet kitchen operations, designing award-winning menus, leading high-performance culinary brigades, and driving exceptional guest satisfaction scores."
};

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Dishes", href: "#dishes" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills", light: true },
  { label: "Media", href: "#media", light: true },
  { label: "Contact", href: "#contact", light: true }
];

const competencies = [
  ["Culinary Strategy & Kitchen Operations", "Team Training & Leadership"],
  ["Fine Dining & Banqueting Management", "Pre-Opening & Concept Development"],
  ["Menu Engineering & Food Costing", "Budget & Inventory Control"],
  ["International Cuisines (French, Italian, Indian, Asian, Mediterranean)", "Supplier / Vendor Management"],
  ["HACCP & Food Safety Compliance", "Workforce Scheduling & Roster Planning"]
];

const strengths = [
  "Hotel Pre-Opening Experience",
  "Guest Complaint Handling",
  "Microsoft Office Proficient",
  "Staff Training & Development",
  "Effective Communication",
  "Pressure & Crisis Management"
];

const education = {
  degree: "Diploma in Hotel Management, Catering Technology & Applied Nutrition",
  institution: "Institute of Hotel Management and Catering Technology, New Delhi",
  secondary: "Senior Secondary (19192)  |  Higher Secondary — Uttar Pradesh"
};

const metrics = [
  { value: "20+", label: "Years culinary excellence" },
  { value: "11", label: "Luxury outlets led at Ritz-Carlton" },
  { value: "96%", label: "Guest satisfaction elevation" },
  { value: "5", label: "Luxury hotel brands worldwide" }
];

const dishes = [
  { title: "Wellness Garden",       concept: "Ayurvedic balance, vegan textures, citrus oil",        image: "/dishes/dish-1.jpeg" },
  { title: "Mediterranean Lineage", concept: "Olive, grilled seafood, preserved lemon",               image: "/dishes/dish-2.jpeg" },
  { title: "Western Hot Kitchen",   concept: "Slow jus, root vegetables, classic technique",          image: "/dishes/dish-3.jpeg" },
  { title: "Detox Composition",     concept: "Clean greens, seeds, compressed fruit",                 image: "/dishes/dish-4.jpeg" },
  { title: "Pastry Atelier",        concept: "Cocoa, fruit acidity, restrained sweetness",            image: "/dishes/dish-5.jpeg" },
  { title: "Spice Route",           concept: "Aromatic masala, slow-cooked lamb, saffron jus",        image: "/dishes/dish-6.jpeg" },
  { title: "Ocean Harvest",         concept: "Seared scallops, coastal herb butter, sea foam",        image: "/dishes/dish-7.jpeg" },
  { title: "Heritage Grain",        concept: "Truffle risotto, aged parmesan, micro herbs",           image: "/dishes/dish-8.jpeg" },
  { title: "Garden Bloom",          concept: "Seasonal vegetables, edible flowers, vinaigrette",      image: "/dishes/dish-9.jpeg" },
  { title: "Ember & Smoke",         concept: "Wood-fired protein, charred vegetables, chimichurri",   image: "/dishes/dish-10.jpeg" },
  { title: "Silk Road Platter",     concept: "Middle Eastern mezze, levant spices, flatbread",        image: "/dishes/dish-11.jpeg" },
  { title: "Sunrise Ritual",        concept: "Artisan breads, preserved fruit, cultured butter",      image: "/dishes/dish-12.jpeg" },
  { title: "Sweet Terroir",         concept: "Dark chocolate, seasonal fruit, caramel poetry",        image: "/dishes/dish-13.jpeg" }
];

const timeline = [
  {
    years: "2022 – Present",
    role: "Executive Chef",
    place: "Wellness & Luxury Property, India",
    detail:
      "Spearheaded kitchen operations for 2 signature outlets, including a Michelin-standard fine-dining restaurant. Elevated GSS from 88% to 96% through consistency, innovation and rigorous quality standards. Designed health-oriented menus — detox, weight loss, Ayurvedic, vegan and gluten-free — in collaboration with nutritionists, dietitians and wellness consultants."
  },
  {
    years: "Feb 2018 – Apr 2021",
    role: "Executive Sous Chef (Pre-Opening Team)",
    place: "Hyatt Regency Aqaba, Jordan",
    detail:
      "Delivered pre-opening for a 286-room luxury property with 5 F&B outlets and an 18-hole Ayla Golf Club. Assisted the Culinary Director in establishing culinary vision, SOPs, menus and training materials. Trained and supervised 19 local chefs and managers; led HACCP implementation and standardised recipes for outdoor banquet and catering operations."
  },
  {
    years: "Jan 2017 – Feb 2018",
    role: "Chef de Cuisine (Pre-Opening Team)",
    place: "Alila Fort Bishangarh, Jaipur, Rajasthan",
    detail:
      "Part of the pre-opening team for a 350-year-old fort converted into a luxury property with 59 suites, tents, lawns and 6 F&B outlets. Managed all kitchen and F&B operational, quality and administrative functions. Recruited, trained and developed the Kitchen and Stewarding teams; controlled costs to improve gross profit margins."
  },
  {
    years: "Apr 2012 – Dec 2017",
    role: "Sous Chef",
    place: "The Ritz-Carlton, Jamaica, West Indies",
    detail:
      "Oversaw kitchen operations across a 427-room property with 11 F&B outlets. Implemented hotel standards on food quality, preparation and presentation; introduced innovative dishes and modern presentation styles during menu renewal cycles. Designed training materials to maximise employee efficiency and maintain brand standards."
  },
  {
    years: "Oct 2011 – Mar 2013",
    role: "Junior Sous Chef",
    place: "The Claridge's Hotel, New Delhi",
    detail:
      "Worked across Pickwick (multi-cuisine) and Seville — a fine-dining Mediterranean restaurant voted one of the best Spanish restaurants at the Times Food Awards. Certified Trainer for all F&B-related activities across the hotel; supervised mise en place, guest orders, duty rosters and team training."
  },
  {
    years: "Jan 2008 – Sep 2011",
    role: "Chef de Partie",
    place: "The Oberoi Amar Vilas, Agra, Uttar Pradesh",
    detail:
      "Worked at Bellevue multi-cuisine restaurant — ranked 3rd in Asia for service by Travel + Leisure World's Best Service Awards (Reader's Survey 2009). Supervised mise en place, maintained par stock levels and provided job-related training to junior colleagues."
  },
  {
    years: "2003 – Dec 2007",
    role: "Commis Chef",
    place: "Baywatch Multi-Cuisine Restaurant, New Delhi",
    detail:
      "Specialised in Western Hot Kitchen; ensured quality standards, hygiene and timely preparation of guest orders. Maintained par stock levels and managed indenting for smooth kitchen operations."
  }
];

const press = ["Travel + Leisure", "The Times of India", "Hospitality Biz", "Conde Nast Traveller", "Food & Travel", "GQ India", "The Hindu"];

function SocialIcon({ type }) {
  if (type === "linkedin") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  }
  if (type === "instagram") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function useInViewAnimation() {
  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.18 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function App() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  useInViewAnimation();

  useEffect(() => {
    const dismiss = () => window.setTimeout(() => setLoading(false), 280);
    if (document.readyState === "complete") { dismiss(); return; }
    window.addEventListener("load", dismiss, { once: true });
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navItems.map((item) => item.href.slice(1));
    const detectActive = () => {
      const line = window.innerHeight * 0.32;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActiveSection(current);
    };
    detectActive();
    window.addEventListener("scroll", detectActive, { passive: true });
    return () => window.removeEventListener("scroll", detectActive);
  }, []);

  function trackHeroMotion(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5).toFixed(3);
    const y = ((event.clientY - rect.top) / rect.height - 0.5).toFixed(3);
    event.currentTarget.style.setProperty("--mx", x);
    event.currentTarget.style.setProperty("--my", y);
  }

  return (
    <main className="site-shell">
      <div className={`loader ${loading ? "" : "loader-hidden"}`} aria-hidden={!loading}>
        <span>Mohd Usman Khan</span>
        <div className="loader-line" />
      </div>

      <header className={`nav-bar ${scrolled ? "nav-scrolled" : ""}`} aria-label="Primary navigation">
        <a className="brand-mark" href="#top" aria-label="Mohd Usman Khan home">
          <span>MK</span>
        </a>
        <nav aria-label="Desktop navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              {...(item.light ? { "data-light": "" } : {})}
              {...(activeSection === item.href.slice(1) ? { "data-active": "" } : {})}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          className={`hamburger${menuOpen ? " hamburger-open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </header>

      <div
        className={`mobile-nav-overlay${menuOpen ? " active" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
      <nav className={`mobile-nav${menuOpen ? " mobile-nav-open" : ""}`} aria-label="Mobile navigation">
        <div className="mobile-nav-head">
          <span className="mobile-nav-brand">MK</span>
          <button
            className="mobile-nav-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className="mobile-nav-links">
          {navItems.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{ "--i": i }}
            >
              <span className="mobile-nav-num">{String(i + 1).padStart(2, "0")}</span>
              {item.label}
            </a>
          ))}
        </div>
        <p className="mobile-nav-foot">Executive Chef · 20+ Years</p>
      </nav>

      <section className="hero" id="top" onMouseMove={trackHeroMotion}>
        <div className="hero-copy">
          <p className="hero-title">{chef.title}</p>
          <h1>Mohd <span>Usman Khan</span></h1>
          <p className="hero-tagline">{chef.tagline}</p>
          <p className="hero-summary">{chef.statement}</p>
          <div className="hero-metrics" aria-label="Career impact metrics">
            {metrics.map((metric) => (
              <article key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </article>
            ))}
          </div>
          <a className="scroll-cue" href="#dishes">Scroll to explore <span /></a>
        </div>
        <div className="hero-photo-panel">
          <div className="hero-photo">
            <img src="/chefusman.jpeg" alt="Executive Chef Mohd Usman Khan" loading="eager" fetchpriority="high" decoding="sync" />
          </div>
          <div className="hero-index"><span>01</span><i /><span>05</span></div>
        </div>
      </section>

      <section className="dishes-section" id="dishes" data-reveal>
        <div className="section-heading">
          <div className="section-heading-left">
            <p className="section-label">Signature Dishes</p>
            <h2>Stories on a plate.</h2>
          </div>
          <p className="section-desc">Menus shaped for fine dining, wellness retreats, high-profile banquets and international hotel kitchens.</p>
        </div>
        <div className="bento-gallery">
          {dishes.map((dish, index) => (
            <article className={`dish-card dish-${index + 1}`} key={dish.title}>
              <img src={dish.image} alt={dish.title} loading="lazy" decoding="async" />
              <span className="dish-num">{String(index + 1).padStart(2, "0")}</span>
              <div className="dish-caption">
                <h3>{dish.title}</h3>
                <p>{dish.concept}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="timeline-section" id="experience" data-reveal>
        <div className="timeline-intro">
          <p className="section-label">Experience Timeline</p>
          <h2>A legacy built across borders.</h2>
          <p>Restaurants, pre-openings, wellness concepts and luxury hotel operations across India, Jordan and the Caribbean.</p>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <article key={`${item.years}-${item.place}`}>
              <time>{item.years}</time>
              <h3>{item.role}</h3>
              <h4>{item.place}</h4>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="competencies-section" id="skills" data-reveal>
        <div className="comp-header">
          <p className="section-label">Core Competencies</p>
          <h2>Skills &amp; Expertise</h2>
        </div>
        <div className="comp-grid">
          {competencies.map(([left, right], i) => (
            <div className="comp-row" key={i}>
              <div className="comp-cell"><span className="comp-diamond">✦</span>{left}</div>
              <div className="comp-cell"><span className="comp-diamond">✦</span>{right}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="edu-section" data-reveal>
        <div className="edu-block">
          <p className="section-label">Education &amp; Qualifications</p>
          <h3 className="edu-degree">{education.degree}</h3>
          <p className="edu-institution">{education.institution}</p>
          <p className="edu-secondary">{education.secondary}</p>
        </div>
        <div className="strengths-block">
          <p className="section-label">Key Strengths</p>
          <div className="strengths-grid">
            {strengths.map((s) => (
              <div className="strength-tag" key={s}>{s}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="media-section" id="media" data-reveal>
        <p className="section-label">Media & Awards</p>
        <div className="press-strip" aria-label="Featured publications and recognition">
          {press.map((name) => <span key={name}>{name}</span>)}
        </div>
      </section>

      <section className="contact-section" id="contact" data-reveal>
        <span className="anchor-alias" id="private-dining" aria-hidden="true" />
        <div>
          <p className="section-label">Contact</p>
          <h2>Start the conversation.</h2>
          <p>For chef collaborations, brand events, menu consulting, wellness culinary programs and private dining enquiries.</p>
        </div>
        <div className="contact-actions" aria-label="Direct contact actions">
          <a className="contact-card" href={`tel:${chef.phone.replace(/\s/g, "")}`}>
            <span className="material-icons contact-icon">call</span>
            <span className="contact-label">Mobile</span>
            <strong>{chef.phone}</strong>
          </a>
          <a className="contact-card" href={`mailto:${chef.email}`}>
            <span className="material-icons contact-icon">email</span>
            <span className="contact-label">Email</span>
            <strong>{chef.email}</strong>
          </a>
          <div className="social-action-row" aria-label="Social media links">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><SocialIcon type="linkedin" /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><SocialIcon type="instagram" /></a>
            <a href="https://wa.me/919958502431" target="_blank" rel="noreferrer" aria-label="WhatsApp"><SocialIcon type="whatsapp" /></a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <strong>{chef.name}</strong>
          <span>{chef.title}</span>
        </div>
        <div className="socials" aria-label="Social links">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://wa.me/919958502431" target="_blank" rel="noreferrer">WhatsApp</a>
          <a href={`mailto:${chef.email}`}>Email</a>
        </div>
        <div className="instagram-preview" aria-label="Instagram preview">
          {dishes.slice(0, 4).map((dish) => <img key={dish.title} src={dish.image} alt="" />)}
        </div>
        <small>(c) {currentYear} Mohd Usman Khan. Portfolio crafted for premium hospitality.</small>
      </footer>
    </main>
  );
}

export default App;
