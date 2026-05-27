// FadingVideo.jsx
// rAF-driven opacity crossfade — no CSS transitions.
// Loop is implemented manually via the `ended` event.

const { useRef, useEffect } = React;

const FADE_MS      = 500;   // fade duration in milliseconds
const FADE_OUT_LEAD = 0.55; // seconds before end to begin fade-out

function FadingVideo({ src, className, style }) {
  const videoRef    = useRef(null);
  const rafRef      = useRef(null);
  const fadingOutRef = useRef(false);

  // Fade video opacity from its current value to `target` over `duration` ms.
  function fadeTo(video, target, duration) {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const start     = performance.now();
    const startOpacity = parseFloat(video.style.opacity) || 0;

    function step(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      video.style.opacity = startOpacity + (target - startOpacity) * progress;

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        rafRef.current = null;
      }
    }

    rafRef.current = requestAnimationFrame(step);
  }

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Start hidden
    video.style.opacity = "0";

    function onLoadedData() {
      video.style.opacity = "0";
      video.play().catch(() => {});
      fadeTo(video, 1, FADE_MS);
    }

    function onTimeUpdate() {
      if (!fadingOutRef.current) {
        const remaining = video.duration - video.currentTime;
        if (remaining <= FADE_OUT_LEAD && remaining > 0) {
          fadingOutRef.current = true;
          fadeTo(video, 0, FADE_MS);
        }
      }
    }

    function onEnded() {
      video.style.opacity = "0";
      setTimeout(() => {
        video.currentTime = 0;
        fadingOutRef.current = false;
        video.play().catch(() => {});
        fadeTo(video, 1, FADE_MS);
      }, 100);
    }

    video.addEventListener("loadeddata", onLoadedData);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("ended",      onEnded);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      video.removeEventListener("loadeddata", onLoadedData);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("ended",      onEnded);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      playsInline
      preload="auto"
      // loop is intentionally OFF — we handle it manually
      className={className}
      style={{ opacity: 0, ...style }}
    />
  );
}

window.FadingVideo = FadingVideo;
