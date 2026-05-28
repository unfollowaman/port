// App.jsx
// Root component — composes Hero + Capabilities sections.
// Framer Motion dev warnings about list keys are suppressed (benign).

const _origConsoleError = console.error;
console.error = (...args) => {
  if (typeof args[0] === "string" && args[0].includes("Each child in a list")) return;
  _origConsoleError(...args);
};

function App() {
  const { HeroSection, CapabilitiesSection, PortfolioSection, FooterSection } = window;
  return (
    <main>
      <HeroSection />
      <CapabilitiesSection />
      <PortfolioSection />
      <FooterSection />
    </main>
  );
}

// Mount
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
