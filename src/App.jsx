import './App.css'

function App() {
  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <div className="nav-logo">Zonfine Cloud</div>
          <nav className="nav-links">
            <a href="#">Benefits</a>
            <a href="#">Specifications</a>
            <a href="#">How-to</a>
            <a href="#">Pricing</a>
          </nav>
          <a className="nav-cta" href="#">Contact Us</a>
        </div>
      </header>
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <span className="badge">Browse everything.</span>
              <h1 className="hero-title">78% Efficiency Improvements</h1>
              <p className="hero-subtitle">
                Zonfine Cloud surfaces regional signals instantly, helping teams plan, align, and
                act on insights without losing momentum.
              </p>
              <div className="progress">
                <div className="progress-bar">
                  <span className="progress-dot"></span>
                  <span className="progress-dot"></span>
                  <span className="progress-dot"></span>
                  <span className="progress-dot active"></span>
                </div>
                <div className="progress-steps">
                  <span>2021</span>
                  <span>2022</span>
                  <span>2023</span>
                  <span className="active">2024</span>
                </div>
              </div>
            </div>
            <div className="card hero-card">
              <h3>Zonfine Cloud Analytics</h3>
              <p>
                Enterprise-grade dashboards built to illuminate every market, with
                live benchmarks and regional performance mapping.
              </p>
              <div className="hero-metrics">
                <div>
                  <strong>12K+</strong>
                  <span>Signals mapped</span>
                </div>
                <div>
                  <strong>38</strong>
                  <span>Regions aligned</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <h2 className="section-title">Trusted by:</h2>
            <div className="trusted-logos">
              <div className="logo-card">Logoipsum</div>
              <div className="logo-card">Logoipsum</div>
              <div className="logo-card">Logoipsum</div>
              <div className="logo-card">Logoipsum</div>
              <div className="logo-card">Logoipsum</div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <h2 className="section-title">We’ve cracked the code.</h2>
            <p className="section-subtitle">
              Zonfine Cloud provides real insights, without the data overload.
            </p>
            <div className="card-grid">
              <div className="card">
                <h4>Amplify Insights</h4>
                <p>Highlight impact drivers across teams and regions with clarity.</p>
              </div>
              <div className="card">
                <h4>Control Your Global Presence</h4>
                <p>Track performance in every market from a single dashboard.</p>
              </div>
              <div className="card">
                <h4>Remove Language Barriers</h4>
                <p>Localize data storytelling for every stakeholder group.</p>
              </div>
              <div className="card">
                <h4>Visualize Growth</h4>
                <p>Transform complex datasets into intuitive visuals instantly.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container features">
            <div className="feature-list">
              <div className="feature-item">
                <h5>Amplify Insights</h5>
                <p>Surface the metrics that matter most with custom KPI logic.</p>
              </div>
              <div className="feature-item">
                <h5>Control Your Global Presence</h5>
                <p>Coordinate regional performance with real-time availability.</p>
              </div>
              <div className="feature-item">
                <h5>Remove Language Barriers</h5>
                <p>Deliver dashboards in every language your teams require.</p>
              </div>
              <div className="feature-item">
                <h5>Visualize Growth</h5>
                <p>Map growth signals to regions, teams, and strategic goals.</p>
              </div>
            </div>
            <div className="map-wrap">
              <img src="/assets/map-placeholder.svg" alt="Map placeholder" />
            </div>
          </div>
        </section>

        <section className="big-picture">
          <div className="container">
            <h2 className="section-title">See the Big Picture</h2>
            <p className="section-subtitle">
              Zonfine Cloud turns your data into clear, vibrant visuals that show you exactly
              what’s happening in each region.
            </p>
            <div className="point-list">
              <div className="point">
                <span>01</span>
                <div>Spot Trends in Seconds</div>
              </div>
              <div className="point">
                <span>02</span>
                <div>Get Everyone on the Same Page</div>
              </div>
              <div className="point">
                <span>03</span>
                <div>Make Presentations Pop</div>
              </div>
              <div className="point">
                <span>04</span>
                <div>Your Global Snapshot</div>
              </div>
            </div>
            <a className="button" href="#">Discover More</a>
          </div>
        </section>

        <section>
          <div className="container">
            <h2 className="section-title">Why Choose Zonfine Cloud?</h2>
            <p className="section-subtitle">
              You need a solution that keeps up. That’s why we developed Zonfine Cloud. A
              developer-friendly approach to streamline your business.
            </p>
            <div className="comparison">
              <table>
                <thead>
                  <tr>
                    <th>Zonfine Cloud</th>
                    <th>WebSurge</th>
                    <th>HyperView</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="check">✓</span> Unified regional dashboards</td>
                    <td>Limited API access</td>
                    <td>Requires manual exports</td>
                  </tr>
                  <tr>
                    <td><span className="check">✓</span> Multi-language reporting</td>
                    <td>Single language only</td>
                    <td>Partial localization</td>
                  </tr>
                  <tr>
                    <td><span className="check">✓</span> Real-time insight alerts</td>
                    <td>Delayed weekly sync</td>
                    <td>Alert add-on cost</td>
                  </tr>
                  <tr>
                    <td><span className="check">✓</span> Map-driven visualization</td>
                    <td>Static charts</td>
                    <td>Basic geo widgets</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="testimonial">
              <blockquote>
                "Zonfine Cloud helped us align regional data in minutes. Our leadership team
                finally sees the same story across every market."
              </blockquote>
              <cite>John Smith, Head of Data</cite>
            </div>
          </div>
        </section>

        <section className="contact">
          <div className="container">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-subtitle">
              Schedule a quick call to learn how Zonfine Cloud can turn your regional data
              into a powerful advantage.
            </p>
            <div className="button-row">
              <a className="button" href="#">Learn More</a>
              <a className="button secondary" href="#">Get a Demo</a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App