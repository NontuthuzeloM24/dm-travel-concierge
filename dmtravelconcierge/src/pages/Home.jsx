import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import usePageTitle from "../hooks/usePageTitle";

import SectionHeading from "../components/SectionHeading";
import DestinationCard from "../components/DestinationCard";

import { destinations, experiences } from "../data/content";

function Home() {
  usePageTitle("Bespoke Luxury Travel Experiences");

  return (
    <>
      {/* HERO */}

      <section className="hero">
        <div className="hero-background" />

        <div className="hero-overlay" />

        <div className="container hero-content">
          <span className="eyebrow eyebrow-light">DM Travel Concierge</span>

          <h1>
            Travel,
            <br />
            <span className="accent">beautifully considered.</span>
          </h1>

          <p className="hero-description">
            Bespoke journeys created with precision, discretion and a deep
            understanding of extraordinary travel.
          </p>

          <div className="hero-actions">
            <Link to="/contact" className="button button-gold">
              Begin Your Journey
              <ArrowUpRight size={17} />
            </Link>

            <Link to="/about" className="button button-outline">
              Discover DM
            </Link>
          </div>
        </div>

        <div className="hero-scroll" aria-hidden="true">
          <ArrowDown size={15} />
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* INTRODUCTION */}

      <section className="section intro-section">
        <div className="container intro-grid">
          <div className="intro-number" aria-hidden="true">
            01
          </div>

          <div className="intro-content">
            <SectionHeading
              eyebrow="The Concierge"
              title="More than travel. A journey designed around you."
            />

            <div className="intro-text">
              <p>
                DM Travel Concierge creates considered journeys for travellers
                who value time, privacy and exceptional experiences.
              </p>

              <p>
                From the first conversation to the moment you return home, every
                detail is thoughtfully considered — allowing you to travel with
                confidence and ease.
              </p>
            </div>

            <Link to="/about" className="inline-link">
              Our story
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}

      <section className="section destinations-section">
        <div className="container">
          <SectionHeading
            eyebrow="Selected Destinations"
            title="Go somewhere extraordinary."
            description="From South Africa's wild landscapes to secluded island escapes, discover journeys curated around the places that inspire you."
            align="center"
            light
          />

          <div className="destination-grid">
            {destinations.map((destination) => (
              <DestinationCard key={destination.title} {...destination} />
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}

      <section className="section experience-section">
        <div className="container">
          <div className="experience-header">
            <span className="eyebrow">The DM Difference</span>

            <h2>Quietly exceptional.</h2>
          </div>

          <div className="experience-grid">
            {experiences.map((item) => (
              <article className="experience-card" key={item.number}>
                <span className="experience-number">{item.number}</span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="final-cta">
        <div className="final-cta-background" />

        <div className="final-cta-overlay" />

        <div className="container final-cta-content">
          <span className="eyebrow eyebrow-light">Your next journey</span>

          <h2>
            Let us make
            <br />
            travel effortless.
          </h2>

          <Link to="/contact" className="button button-gold">
            Start a Conversation
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
