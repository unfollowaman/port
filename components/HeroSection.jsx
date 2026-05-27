// HeroSection.jsx
// Full-viewport hero section: background video + animated content.

const { motion } = window.Motion;

const HERO_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4";

// Shared entrance animation preset
const fadeUp = (delay = 0) => ({
  initial:    { filter: "blur(10px)", opacity: 0, y: 20 },
  animate:    { filter: "blur(0px)",  opacity: 1, y: 0  },
  transition: { duration: 0.7, ease: "easeOut", delay },
});

// ── Stats Card ──────────────────────────────────────────────────────────────
function StatCard({ icon: Icon, value, label }) {
  return (
    <div
      className="liquid-glass flex flex-col justify-between p-5"
      style={{ width: 220, borderRadius: "1.25rem", minHeight: 120 }}
    >
      <Icon />
      <div className="mt-4">
        <div
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic",
            fontSize: "2.25rem",
            color: "#fff",
            lineHeight: 1,
            letterSpacing: "-1px",
          }}
        >
          {value}
        </div>
        <div className="text-xs text-white font-body font-light mt-2">{label}</div>
      </div>
    </div>
  );
}

// ── Partners Row ─────────────────────────────────────────────────────────────
function Partners() {
  const partnerNames = ["Aeon", "Vela", "Apex", "Orbit", "Zeno"];

  return (
    <motion.div
      {...fadeUp(1.4)}
      className="flex flex-col items-center gap-4 pb-8"
    >
      {/* Kicker chip */}
      <div className="liquid-glass rounded-full px-3.5 py-1">
        <span className="text-xs font-medium text-white font-body">
          Collaborating with top aerospace pioneers globally
        </span>
      </div>

      {/* Partner names */}
      <div className="flex items-center gap-12 md:gap-16 flex-wrap justify-center">
        {partnerNames.map((name) => (
          <span
            key={name}
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
              fontSize: "clamp(1.5rem, 3vw, 1.875rem)",
              color: "#fff",
              letterSpacing: "-0.02em",
            }}
          >
            {name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

// ── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
  const { FadingVideo, BlurText, Navbar, ArrowUpRight, Play, ClockIcon, GlobeIcon } = window;

  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      style={{ minHeight: "100vh" }}
    >
      {/* Background Video — 120% size, top-anchored */}
      <FadingVideo
        src={HERO_VIDEO}
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
        style={{ width: "120%", height: "120%" }}
      />

      {/* z-10 content layer */}
      <div className="relative z-10 flex flex-col" style={{ minHeight: "100vh" }}>
        <Navbar />

        {/* Main centred content */}
        <div className="flex-1 flex flex-col items-center justify-center pt-24 px-4 gap-0">

          {/* Badge */}
          <motion.div {...fadeUp(0.4)} className="flex items-center liquid-glass rounded-full gap-2 mb-6">
            <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold font-body">
              New
            </span>
            <span className="text-sm text-white/90 font-body pr-3">
              Maiden Crewed Voyage to Mars Arrives 2026
            </span>
          </motion.div>

          {/* Headline */}
          <BlurText
            text="Venture Past Our Sky Across the Universe"
            className="text-6xl md:text-7xl font-heading text-white max-w-2xl text-center"
            style={{
              fontStyle: "italic",
              lineHeight: 0.8,
              letterSpacing: "-4px",
            }}
          />

          {/* Subheading */}
          <motion.p
            {...fadeUp(0.8)}
            className="mt-4 text-sm md:text-base text-white max-w-2xl font-body font-light leading-tight text-center"
          >
            Discover the universe in ways once unimaginable. Our pioneering vessels and breakthrough engineering bring deep-space exploration within reach—secure and extraordinary.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(1.1)}
            className="flex items-center gap-6 mt-6"
          >
            <button
              className="liquid-glass-strong flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white font-body"
              style={{ cursor: "pointer", border: "none" }}
            >
              Start Your Voyage
              <ArrowUpRight className="h-5 w-5" />
            </button>

            <button
              className="flex items-center gap-2 text-sm font-medium text-white font-body bg-transparent border-none"
              style={{ cursor: "pointer" }}
            >
              View Liftoff
              <Play className="h-4 w-4" />
            </button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            {...fadeUp(1.3)}
            className="flex items-stretch gap-4 mt-8"
          >
            <StatCard
              icon={ClockIcon}
              value="34.5 Min"
              label="Average Videos Watch Time"
            />
            <StatCard
              icon={GlobeIcon}
              value="2.8B+"
              label="Users Across the Globe"
            />
          </motion.div>
        </div>

        {/* Partners — pinned to bottom */}
        <Partners />
      </div>
    </section>
  );
}

window.HeroSection = HeroSection;
