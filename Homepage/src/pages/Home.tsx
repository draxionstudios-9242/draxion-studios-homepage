import { Link } from "react-router-dom";
import { CubeField } from "../components/CubeField";
import { STUDIO } from "../studio";

export function Home() {
  return (
    <main className="home">
      <CubeField />
      <section className="hero">
        <p className="eyebrow">Independent studio</p>
        <h1>
          Products with
          <em> gravity.</em>
        </h1>
        <p className="lede">
          Draxion Studios builds investigation software for go-to-market teams and
          flight games that treat landscape as the main character. Two practices.
          One house.
        </p>
      </section>

      <section className="product-grid" aria-label="Products">
        <a
          className="product product-intel edge-trace"
          href="https://leadintel.draxionstudios.dev"
        >
          <p className="product-kicker">Live product · Software</p>
          <h2>LeadIntel</h2>
          <p>
            Typed investigation pipeline. Domain in, sourced dossier out — market
            signals, stack, hiring, news, competitors. Built for GTM teams who
            prepare before they reach out.
          </p>
          <span className="product-cta">Open LeadIntel →</span>
        </a>

        <Link className="product product-sim edge-trace" to="/games/plane-simulator">
          <div className="product-still" aria-hidden>
            <img src="/images/s1.png" alt="" />
          </div>
          <p className="product-kicker">In production · Games</p>
          <h2>Plane Simulator</h2>
          <p>
            High-country flying in a cream high-wing over snow and ridgeline.
            A quiet study of weather, altitude, and the hour when the peaks
            catch last light.
          </p>
          <span className="product-cta">Enter the range →</span>
        </Link>
      </section>

      <section className="about" id="about">
        <p className="eyebrow">About</p>
        <h2>A small studio, two crafts.</h2>
        <p>
          Draxion is software and games under one roof. LeadIntel is live.
          Plane Simulator is in production. Follow the work, the builds, and
          the studio notes.
        </p>
        <div className="about-links">
          <a className="about-link edge-trace" href={STUDIO.linkedin} target="_blank" rel="noreferrer">
            <span className="about-kicker">Network</span>
            LinkedIn
            <span className="product-cta">Open profile →</span>
          </a>
          <a className="about-link edge-trace" href={STUDIO.youtube} target="_blank" rel="noreferrer">
            <span className="about-kicker">Watch</span>
            YouTube
            <span className="product-cta">Open channel →</span>
          </a>
        </div>
      </section>
    </main>
  );
}
