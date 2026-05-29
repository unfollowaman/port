// PortfolioSection.jsx
// Displays a grid of 6 thumbnail cards with hover effects

function PortfolioCard({ label }) {
  return (
    <div className="relative group rounded-xl overflow-hidden liquid-glass" style={{ aspectRatio: '16/9' }}>
      {/* Placeholder image background */}
      <div className="absolute inset-0 bg-white/5 transition-transform duration-500 group-hover:scale-105" />

      {/* Hover overlay with label */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <h4 className="text-white font-body font-medium text-sm md:text-base translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {label}
        </h4>
      </div>
    </div>
  );
}

function PortfolioSection() {
  const portfolioItems = [
    "Agriculture — Class 10th Geography",
    "Why Putin Wants Ukraine",
    "Topper's Secret Time-Table",
    "Quadratic Equations — Class 10th",
    "Scientific Temperament",
    "Mind Goes Blank While Speaking English?"
  ];

  return (
    <section id="portfolio" className="relative w-full bg-black py-24 px-8 md:px-16 lg:px-20 border-t border-white/10">
      <div className="relative z-10 flex flex-col">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-body mb-6" style={{ color: "rgba(255,255,255,0.8)" }}>
            // Portfolio
          </p>

          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
              color: "#fff",
              fontSize: "clamp(3.5rem, 8vw, 6rem)",
              lineHeight: 0.9,
              letterSpacing: "-3px",
              margin: 0,
            }}
          >
            My Work
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={index} label={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

window.PortfolioSection = PortfolioSection;
