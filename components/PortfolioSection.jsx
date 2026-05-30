// PortfolioSection.jsx
// Displays a grid of 6 thumbnail cards with hover effects

function PortfolioCard({ label, fileName }) {
  const [imageLoaded, setImageLoaded] = React.useState(true);
  const imageSrc = `assets/${fileName}`;

  return (
    <div className="relative group rounded-xl overflow-hidden liquid-glass" style={{ aspectRatio: '16/9' }}>
      {/* Thumbnail image background. Put your real image in /assets using the fileName below. */}
      {imageLoaded ? (
        <img
          src={imageSrc}
          alt={`${label} thumbnail`}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={() => setImageLoaded(false)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/5 p-4 text-center transition-transform duration-500 group-hover:scale-105">
          <span className="font-body text-xs uppercase tracking-[0.2em] text-white/45">Add thumbnail</span>
          <span className="mt-2 break-all font-body text-sm text-white/75">{imageSrc}</span>
        </div>
      )}

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
    {
      label: "Agriculture — Class 10th Geography",
      fileName: "01-agriculture-class-10-geography.jpg",
    },
    {
      label: "Why Putin Wants Ukraine",
      fileName: "02-why-putin-wants-ukraine.jpg",
    },
    {
      label: "Topper's Secret Time-Table",
      fileName: "03-toppers-secret-time-table.jpg",
    },
    {
      label: "Quadratic Equations — Class 10th",
      fileName: "04-quadratic-equations-class-10.jpg",
    },
    {
      label: "Scientific Temperament",
      fileName: "05-scientific-temperament.jpg",
    },
    {
      label: "Mind Goes Blank While Speaking English?",
      fileName: "06-mind-goes-blank-speaking-english.jpg",
    },
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
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.fileName} label={item.label} fileName={item.fileName} />
          ))}
        </div>
      </div>
    </section>
  );
}

window.PortfolioSection = PortfolioSection;
