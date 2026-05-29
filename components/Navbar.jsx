// Navbar.jsx
// Fixed top navigation bar with liquid-glass logo, pill nav links, and CTA.

function Navbar() {
  const { ArrowUpRight } = window;

  const links = [
    { label: "About", href: "#about" },
    { label: "My Work", href: "#portfolio" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" }
  ];

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
          AM
        </span>
      </div>

      {/* Center nav — desktop only */}
      <div className="hidden md:flex items-center liquid-glass rounded-full px-1.5 py-1.5 gap-1">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="px-3 py-2 text-sm font-medium text-white/90 font-body whitespace-nowrap hover:text-white transition-colors"
            style={{ textDecoration: "none" }}
          >
            {link.label}
          </a>
        ))}

        {/* CTA pill */}
        <a
          href="mailto:unfollowaman@gmail.com"
          className="flex items-center gap-1.5 bg-white text-black rounded-full px-4 py-2 text-sm font-medium font-body whitespace-nowrap ml-1 hover:bg-white/90 transition-colors"
          style={{ cursor: "pointer", border: "none", textDecoration: "none" }}
        >
          Work With Me
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      {/* Spacer — keeps logo centred on desktop */}
      <div style={{ width: 48, height: 48 }} aria-hidden="true" />
    </nav>
  );
}

window.Navbar = Navbar;
