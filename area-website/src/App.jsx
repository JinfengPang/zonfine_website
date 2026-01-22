import './App.css'

function App() {
  const logos = ['Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum']
  const valueCards = [
    'Amplify Insights',
    'Control Your Global Presence',
    'Remove Language Barriers',
    'Visualize Growth',
  ]
  const features = [
    {
      title: 'Amplify Insights',
      text: 'Surface high-impact signals across every region and deliver the story behind the numbers.',
    },
    {
      title: 'Control Your Global Presence',
      text: 'Coordinate teams and messaging with a single operational view of your global footprint.',
    },
    {
      title: 'Remove Language Barriers',
      text: 'Translate performance into clear narratives so every stakeholder can act with confidence.',
    },
    {
      title: 'Visualize Growth',
      text: 'Track momentum with dashboards that scale from local markets to worldwide rollups.',
    },
  ]
  const highlights = [
    'Spot Trends in Seconds',
    'Get Everyone on the Same Page',
    'Make Presentations Pop',
    'Your Global Snapshot',
  ]

  return (
    <div className="page">
      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">Browse everything.</p>
            <h1>78% Efficiency Improvements</h1>
            <p className="hero-subtitle">
              Area unifies regional performance into a single, actionable platform built for modern teams.
            </p>
            <div className="year-progress">
              {['2021', '2022', '2023', '2024'].map((year, index) => (
                <div key={year} className="year-item">
                  <span className="year-label">{year}</span>
                  <div className="year-bar">
                    <span className="year-fill" style={{ width: `${55 + index * 12}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-panel">
            <div className="hero-card">
              <p className="hero-card-title">Area Pulse</p>
              <p className="hero-card-value">+32% weekly lift</p>
              <div className="hero-card-grid">
                <div>
                  <span>Europe</span>
                  <strong>92%</strong>
                </div>
                <div>
                  <span>APAC</span>
                  <strong>87%</strong>
                </div>
                <div>
                  <span>Americas</span>
                  <strong>95%</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="trust">
          <h2>Trusted by:</h2>
          <div className="logo-row">
            {logos.map((logo, index) => (
              <div key={`${logo}-${index}`} className="logo-pill">
                {logo}
              </div>
            ))}
          </div>
        </section>

        <section className="values" id="benefits">
          <div className="section-heading">
            <h2>We’ve cracked the code.</h2>
            <p>Area provides real insights, without the data overload.</p>
          </div>
          <div className="card-grid">
            {valueCards.map((title) => (
              <article key={title} className="value-card">
                <h3>{title}</h3>
                <p>
                  Build consistent strategies with analytics that feel light, fast, and clear across every market.
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="details" id="specifications">
          <div className="details-content">
            {features.map((feature) => (
              <div key={feature.title} className="detail-item">
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
          <div className="details-map">
            <img src="/assets/map-placeholder.svg" alt="Map placeholder" />
          </div>
        </section>

        <section className="big-picture" id="how-to">
          <div className="section-heading">
            <h2>See the Big Picture</h2>
            <p>
              Area turns your data into clear, vibrant visuals that show you exactly what’s happening in each
              region.
            </p>
          </div>
          <div className="highlight-grid">
            {highlights.map((item, index) => (
              <div key={item} className="highlight-item">
                <span className="highlight-index">0{index + 1}</span>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
          <button className="primary-button" type="button">
            Discover More
          </button>
        </section>

        <section className="comparison">
          <div className="section-heading">
            <h2>Why Choose Area?</h2>
            <p>
              You need a solution that keeps up. That’s why we developed Area. A developer-friendly approach to
              streamline your business.
            </p>
          </div>
          <div className="comparison-table">
            <div className="comparison-column featured">
              <h3>Area</h3>
              <ul>
                <li>✓ Live regional rollups with instant alerts</li>
                <li>✓ Unified dashboards across teams</li>
                <li>✓ Launch-ready exports for leadership</li>
                <li>✓ Scales with multilingual operations</li>
              </ul>
            </div>
            <div className="comparison-column">
              <h3>WebSurge</h3>
              <ul>
                <li>✓ Standard analytics packs</li>
                <li>✓ Weekly reports only</li>
                <li>✓ Limited stakeholder views</li>
                <li>✓ Add-ons required for global data</li>
              </ul>
            </div>
            <div className="comparison-column">
              <h3>HyperView</h3>
              <ul>
                <li>✓ High-level visuals</li>
                <li>✓ Steep onboarding curve</li>
                <li>✓ Manual exports</li>
                <li>✓ Limited customization</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="testimonial">
          <blockquote>
            “Area helped us consolidate regional insights faster than any tool we’ve tried. The clarity has been a
            game-changer for our planning cycles.”
          </blockquote>
          <p className="signature">John Smith, Head of Data</p>
        </section>

        <section className="contact">
          <div>
            <h2>Connect with us</h2>
            <p>
              Schedule a quick call to learn how Area can turn your regional data into a powerful advantage.
            </p>
          </div>
          <button className="secondary-button" type="button">
            Learn More
          </button>
          <nav className="footer-links">
            <a href="#benefits">Benefits</a>
            <a href="#specifications">Specifications</a>
            <a href="#how-to">How-to</a>
          </nav>
        </section>
      </main>
    </div>
  )
}

export default App
