// FooterSection.jsx
// Footer / Contact section

function FooterSection() {
  const { ArrowUpRight } = window;

  const socials = [
    { name: "X", url: "https://x.com/unfollowaman" },
    { name: "LinkedIn", url: "https://linkedin.com/in/unfollowaman" },
    { name: "Instagram", url: "https://instagram.com/unfollowaman" }
  ];

  return (
    <footer id="contact" className="relative w-full bg-black py-24 px-8 md:px-16 lg:px-20 border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        {/* Left side: Header and CTA */}
        <div className="flex flex-col items-start gap-8">
          <div>
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
              Make Your Mark
            </h2>
            <p className="mt-4 text-white/80 font-body text-lg">
              Let's build something that gets clicked.
            </p>
          </div>

          <a
            href="mailto:unfollowaman@gmail.com"
            className="liquid-glass-strong flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white font-body"
            style={{ cursor: "pointer", border: "none", textDecoration: "none" }}
          >
            Work With Me
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>

        {/* Right side: Contact info and Socials */}
        <div className="flex flex-col gap-6 font-body">
          <div className="flex flex-col gap-2">
            <a href="mailto:unfollowaman@gmail.com" className="text-white hover:text-white/80 transition-colors no-underline">
              unfollowaman@gmail.com
            </a>
            <span className="text-white/60">
              Bundi, Rajasthan, India
            </span>
          </div>

          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors text-sm no-underline"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

window.FooterSection = FooterSection;
