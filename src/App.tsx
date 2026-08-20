// App.tsx - the page shell the engineering team handed off.
// It runs today. Over the week you assemble the provided components into the
// marked slot below; you do not author them.

// INSERT: component imports (Day 2 - paste the import lines from the kit README here)

// The product title is configured through an environment variable, not code.
// You set the real value in .env on Day 2. Watch the browser tab change.
const APP_TITLE =
  import.meta.env.VITE_APP_TITLE ?? "Evergreen Insurance - Get a Quote";
document.title = APP_TITLE;

function App() {
  return (
    <>
      <header className="site-header">
        <div className="brand">Evergreen Insurance</div>
        <nav className="site-nav">
          <a href="#">Coverage</a>
          <a href="#">Claims</a>
          <a href="#">About</a>
        </nav>
      </header>

      <main className="page">
        <section className="hero">
          <h1>Coverage that grows with you</h1>
          <p>Get an estimated premium in under a minute, no account needed.</p>
        </section>

        {/* INSERT: quote-form-section (Day 2 - replace the placeholder section
            below with the assembled JSX from the kit README) */}
        <section className="quote-form-section">
          <div className="quote-form">
            <h2>Quote form arrives this week</h2>
            <p>
              The engineering team's QuoteForm and RecentQuotes components are
              in your lab kit. As Delivery Lead, you assemble them into this
              slot on Day 2.
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; 2026 Evergreen Insurance. Sample training project.</p>
      </footer>
    </>
  );
}

export default App;
