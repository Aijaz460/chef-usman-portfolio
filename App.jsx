import React, { useEffect, useMemo, useState } from "react";

const chef = {
  name: "Mohd Usman Khan",
  title: "Executive Chef",
  phone: "+91 99585 02431",
  email: "chefusmanolive@gmail.com",
  location: "Vasundhara, Ghaziabad, India",
  tagline: "Crafting timeless experiences through passion, precision and purpose.",
  statement:
    "Dynamic Executive Chef with 20+ years across luxury 5-star hospitality, known for multi-outlet leadership, pre-opening discipline, sustainable sourcing, modern plating and fine-dining execution."
};

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Dishes", href: "#dishes" },
  { label: "Experience", href: "#experience" },
  { label: "Media", href: "#media" },
  { label: "Contact", href: "#contact" }
];

const metrics = [
  { value: "20+", label: "Years culinary excellence" },
  { value: "11", label: "Luxury outlets led at Ritz-Carlton" },
  { value: "96%", label: "Guest satisfaction elevation" },
  { value: "5", label: "Global hospitality regions" }
];

const dishes = [
  {
    title: "Wellness Garden",
    concept: "Ayurvedic balance, vegan textures, citrus oil",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "Mediterranean Lineage",
    concept: "Olive, grilled seafood, preserved lemon",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "Western Hot Kitchen",
    concept: "Slow jus, root vegetables, classic technique",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "Detox Composition",
    concept: "Clean greens, seeds, compressed fruit",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "Pastry Atelier",
    concept: "Cocoa, fruit acidity, restrained sweetness",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=85"
  }
];

const timeline = [
  {
    years: "2022 - Present",
    role: "Executive Chef",
    place: "Wellness & Luxury Property, India",
    detail:
      "Leads two signature outlets including a Michelin-standard fine-dining restaurant; raised GSS from 88% to 96% with health-oriented detox, Ayurvedic, vegan and gluten-free menus."
  },
  {
    years: "2018 - 2021",
    role: "Executive Sous Chef, Pre-Opening",
    place: "Hyatt Regency Aqaba, Jordan",
    detail:
      "Delivered a 286-room luxury property with five F&B outlets and Ayla Golf Club, shaping SOPs, menus, training, market lists and HACCP standards."
  },
  {
    years: "2017 - 2018",
    role: "Chef de Cuisine, Pre-Opening",
    place: "Alila Fort Bishangarh, Jaipur",
    detail:
      "Opened a 350-year-old fort transformed into a 59-suite luxury destination with six F&B outlets, driving cost control, hiring, training and menu reviews."
  },
  {
    years: "2012 - 2017",
    role: "Sous Chef",
    place: "The Ritz-Carlton, Jamaica",
    detail:
      "Oversaw food quality, preparation and presentation across a 427-room property with 11 F&B outlets while mentoring teams and renewing menus."
  },
  {
    years: "2011 - 2013",
    role: "Junior Sous Chef",
    place: "The Claridge's Hotel, New Delhi",
    detail:
      "Worked across Pickwick and Seville, an award-winning Mediterranean fine-dining restaurant, as a certified F&B trainer."
  },
  {
    years: "2008 - 2011",
    role: "Chef de Partie",
    place: "The Oberoi Amar Vilas, Agra",
    detail:
      "Served at Bellevue, recognized 3rd in Asia for service by Travel + Leisure World's Best Service Awards Reader Survey 2009."
  }
];

const press = ["Travel + Leisure", "The Times of India", "Hospitality Biz", "Conde Nast Traveller", "Food & Travel", "GQ India", "The Hindu"];

function SocialIcon({ type }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  };

  if (type === "linkedin") {
    return (
      <svg {...common}>
        <path d="M7 10v8" />
        <path d="M7 7.2v.1" />
        <path d="M11 18v-4.4c0-2.2 3-2.4 3 0V18" />
        <path d="M3.8 3.8h16.4v16.4H3.8z" />
      </svg>
    );
  }

  if (type === "instagram") {
    return (
      <svg {...common}>
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.2" />
        <path d="M16.8 7.2h.01" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M6.6 18.2 4.8 21l3.2-.9a8 8 0 1 0-1.4-1.9Z" />
      <path d="M9.4 8.8c.2 3 2.1 4.9 5.2 5.7l1.1-1.4-2-.9-.9.7c-1.2-.5-2-1.3-2.5-2.4l.7-.9-.9-2Z" />
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
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  useInViewAnimation();

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1350);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
          <small>Executive Chef</small>
        </a>
        <nav aria-label="Desktop navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
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
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

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
            <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1300&q=88" alt="Professional chef plating in a luxury kitchen" />
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
              <img src={dish.image} alt={dish.title} />
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
            <span>Mobile</span>
            <strong>{chef.phone}</strong>
          </a>
          <a className="contact-card" href={`mailto:${chef.email}`}>
            <span>Email</span>
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
