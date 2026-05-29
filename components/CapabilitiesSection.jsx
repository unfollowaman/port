// CapabilitiesSection.jsx
// Second full-height section: background video + capabilities grid.

const CAPABILITIES_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4";

// ── Capability Card ──────────────────────────────────────────────────────────
function CapabilityCard({ icon: Icon, tags, title, body }) {
  return (
    <div
      className="liquid-glass flex flex-col p-6"
      style={{ borderRadius: "1.25rem", minHeight: 360 }}
    >
      {/* Top row: icon + tags */}
      <div className="flex items-start justify-between gap-4">
        {/* Icon wrapper */}
        <div
          className="liquid-glass flex items-center justify-center flex-shrink-0"
          style={{ width: 44, height: 44, borderRadius: "0.75rem" }}
        >
          <Icon />
        </div>

        {/* Tag pills */}
        <div className="flex flex-wrap justify-end gap-1.5" style={{ maxWidth: "70%" }}>
          {tags.map((tag) => (
            <span
              key={tag}
              className="liquid-glass rounded-full px-3 py-1 font-body whitespace-nowrap"
              style={{ fontSize: 11, color: "rgba(255,255,255,0.9)" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom: title + body */}
      <div className="mt-6">
        <h3
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic",
            fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
            color: "#fff",
            letterSpacing: "-1px",
            lineHeight: 1,
            margin: 0,
          }}
        >
          {title}
        </h3>
        <p
          className="text-sm text-white/90 font-body font-light leading-snug mt-3"
          style={{ maxWidth: "32ch" }}
        >
          {body}
        </p>
      </div>
    </div>
  );
}

// ── Capabilities Section ─────────────────────────────────────────────────────
function CapabilitiesSection() {
  const { FadingVideo, ImageIcon, MovieIcon, LightbulbIcon } = window;

  const cards = [
    {
      icon: ImageIcon,
      tags: ["Eye-catching", "Click-worthy", "On-brand", "Fast Turnaround"],
      title: "Thumbnail Design",
      body: "I create thumbnails that speak before the video does. Each design is built to maximize CTR and match your channel's identity.",
    },
    {
      icon: LightbulbIcon,
      tags: ["Workflows", "Automation", "Tools", "Strategy"],
      title: "AI Consulting",
      body: "I help educators, coaches, and YouTubers integrate AI into their content pipeline — saving hours every week without losing their voice.",
    },
    {
      icon: MovieIcon,
      tags: ["Reels", "YouTube", "Shorts", "Engaging Cuts"],
      title: "Video Editing",
      body: "Clean, fast-paced edits that keep viewers watching. Optimized for both long-form YouTube and short-form social content.",
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full bg-black overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Background Video — full-bleed */}
      <FadingVideo
        src={CAPABILITIES_VIDEO}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content layer */}
      <div
        className="relative z-10 flex flex-col px-8 md:px-16 lg:px-20 pt-24 pb-10"
        style={{ minHeight: "100vh" }}
      >
        {/* Header */}
        <div className="mb-auto">
          <p className="text-sm font-body mb-6" style={{ color: "rgba(255,255,255,0.8)" }}>
            // What I Do
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
            Skills evolved for<br />the creator economy
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {cards.map((card) => (
            <CapabilityCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

window.CapabilitiesSection = CapabilitiesSection;
