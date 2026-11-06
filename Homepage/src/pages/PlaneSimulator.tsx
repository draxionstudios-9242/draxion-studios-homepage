import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/s2.png",
    caption: "Down-valley — glacier light, late cloud.",
  },
  {
    src: "/images/s3.png",
    caption: "Bank into the saddle.",
  },
  {
    src: "/images/s4.png",
    caption: "Shadowed granite, sun on the fabric wing.",
  },
];

export function PlaneSimulator() {
  const [heroLive, setHeroLive] = useState(false);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setHeroLive(true);
      return;
    }
    const boot = window.setTimeout(() => setHeroLive(true), 280);
    return () => window.clearTimeout(boot);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, [paused]);

  const slide = slides[index];

  return (
    <main className="sim">
      <div className="grain" aria-hidden />

      <section className={`sim-hero ${heroLive ? "is-live" : ""}`}>
        <img src="/images/s1.png" alt="Cream high-wing over snow mountains" />
        <div className="sim-hero-copy">
          <p className="sim-reg">SP-ICS · In production</p>
          <h1>Plane Simulator</h1>
          <p>
            An alpine flight study from Draxion Studios. Not a circuit game. A
            machine that asks you to read wind, light, and the shape of the range.
          </p>
        </div>
        <Hud altitude={9420} heading={214} frame="01/04" />
      </section>

      <section className="sim-body">
        <div className="sim-copy">
          <h2>High country, cream wing.</h2>
          <p>
            The aircraft is a fabric high-wing, registration SP-ICS. The world is
            winter ridgelines, cirrus, and the long blue of distance. The first
            still is the approach. The rest of the range lives in the stills below.
          </p>
        </div>
      </section>

      <section
        className="sim-carousel edge-trace is-on"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        aria-roledescription="carousel"
        aria-label="Flight stills"
      >
        <div className="sim-viewport">
          <div
            className="sim-track"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {slides.map((item) => (
              <figure key={item.src} className="sim-slide">
                <img src={item.src} alt={item.caption} />
              </figure>
            ))}
          </div>
          <div className="sim-stage-veil" />
        </div>
        <div className="sim-chrome">
          <p className="sim-caption">{slide.caption}</p>
          <div className="sim-controls">
            <button type="button" onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}>
              Prev
            </button>
            <div className="sim-dots">
              {slides.map((item, i) => (
                <button
                  key={item.src}
                  type="button"
                  className={i === index ? "is-on" : ""}
                  aria-label={`Still ${i + 2}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
            <button type="button" onClick={() => setIndex((i) => (i + 1) % slides.length)}>
              Next
            </button>
          </div>
          <Hud
            altitude={11040 + index * 1480}
            heading={(268 + index * 22) % 360}
            frame={`0${index + 2}/04`}
          />
        </div>
      </section>
    </main>
  );
}

function Hud({
  altitude,
  heading,
  frame,
}: {
  altitude: number;
  heading: number;
  frame: string;
}) {
  return (
    <div className="hud" aria-hidden>
      <span>SP-ICS</span>
      <span>ALT {altitude.toLocaleString()} FT</span>
      <span>HDG {String(heading).padStart(3, "0")}</span>
      <span>FRM {frame}</span>
    </div>
  );
}
