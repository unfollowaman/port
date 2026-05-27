// Navbar.jsx
// Fixed top navigation bar with liquid-glass logo, pill nav links, and CTA.

function Navbar() {
  const { ArrowUpRight } = window;

  const links = ["Home", "Voyages", "Worlds", "Innovation", "Plan Launch"];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16">
      {/* Logo */}
      <div
        className="liquid-glass flex items-center justify-center"
        style={{ width: 48, height: 48, borderRadius: "50%" }}
      >
        <span
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic",
            fontSize: "1.4rem",
            color: "#fff",
            lineHeight: 1,
          }}
        >
          a
        </span>
      </div>

      {/* Center nav — desktop only */}
      <div className="hidden md:flex items-center liquid-glass rounded-full px-1.5 py-1.5 gap-1">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="px-3 py-2 text-sm font-medium text-white/90 font-body whitespace-nowrap hover:text-white transition-colors"
            style={{ textDecoration: "none" }}
          >
            {link}
          </a>
        ))}

        {/* CTA pill */}
        <button
          className="flex items-center gap-1.5 bg-white text-black rounded-full px-4 py-2 text-sm font-medium font-body whitespace-nowrap ml-1 hover:bg-white/90 transition-colors"
          style={{ cursor: "pointer", border: "none" }}
        >
          Claim a Spot
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>

      {/* Spacer — keeps logo centred on desktop */}
      <div style={{ width: 48, height: 48 }} aria-hidden="true" />
    </nav>
  );
}

window.Navbar = Navbar;
