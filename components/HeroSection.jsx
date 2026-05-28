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


// ── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
  const { FadingVideo, BlurText, Navbar, ArrowUpRight, Play, ImageIcon, GlobeIcon } = window;

  // Custom Users icon component
  const UsersIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-white">
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>
  );

  return (
    <section
      id="about"
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
              Thumbnail Designer & AI Consultant
            </span>
          </motion.div>

          {/* Headline */}
          <BlurText
            text="Make Your Content Impossible to Ignore"
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
            I design thumbnails that stop the scroll, and help creators & educators harness AI to grow faster.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(1.1)}
            className="flex items-center gap-6 mt-6"
          >
            <a
              href="#portfolio"
              className="liquid-glass-strong flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white font-body"
              style={{ cursor: "pointer", border: "none", textDecoration: "none" }}
            >
              See My Work
              <ArrowUpRight className="h-5 w-5" />
            </a>

            <a
              href="mailto:unfollowaman@gmail.com"
              className="flex items-center gap-2 text-sm font-medium text-white font-body bg-transparent border-none"
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              Work With Me
              <Play className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            {...fadeUp(1.3)}
            className="flex items-stretch gap-4 mt-8"
          >
            <StatCard
              icon={ImageIcon}
              value="100+"
              label="Thumbnails Created"
            />
            <StatCard
              icon={UsersIcon}
              value="20+"
              label="Creators Served"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

window.HeroSection = HeroSection;
