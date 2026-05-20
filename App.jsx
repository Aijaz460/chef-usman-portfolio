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
  { label: "Media", href: "#media" },
  { label: "Contact", href: "#contact" }
];

const metrics = [
  { value: "20+", label: "Years culinary excellence" },
  { value: "11", label: "Luxury outlets led at Ritz-Carlton" },
  { value: "96%", label: "Guest satisfaction elevation" },
  { value: "5", label: "Luxury hotel brands worldwide" }
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
