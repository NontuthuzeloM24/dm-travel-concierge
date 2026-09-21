import { ArrowUpRight } from "lucide-react";

import { Link } from "react-router-dom";

import usePageTitle from "../hooks/usePageTitle";

import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";

function About() {
  usePageTitle("About");

  return (
    <>
      <PageHero
        eyebrow="About DM Travel Concierge"
        title="The art of effortless travel."
        description="Experience, insight and a personal approach to creating extraordinary journeys."
        image="/images/about.jpg"
      />

      <section className="section about-story">
        <div className="container about-grid">
          <div className="about-stat">
            <span className="about-stat-number">20+</span>

            <span className="about-stat-label">
              Years of aviation
              <br />
              expertise
            </span>
          </div>

          <div className="about-copy">
            <SectionHeading
              eyebrow="Our Story"
              title="Travel with confidence."
            />

            <p className="about-lead">
              Founded by Desigan Naidoo, DM Travel Concierge brings extensive
              aviation experience to the art of bespoke travel.
            </p>

            <p>
              With insider knowledge of airlines, airports, car rentals and
              travel logistics, we understand that exceptional travel is found
              in the details.
            </p>

            <p>
              Our approach is personal, discreet and considered. We take care of
              the complexity behind the scenes so that you can focus on
              experiencing the journey.
            </p>
          </div>
        </div>
      </section>

      <section className="about-feature">
        <img
          src="/images/chapmans-peak.jpg"
          alt="Chapman's Peak coastline"
          loading="lazy"
        />

        <div className="about-feature-caption">
          <span>01</span>

          <p>The world is vast. Your journey should feel personal.</p>
        </div>
      </section>

      <section className="section philosophy-section">
        <div className="container">
          <SectionHeading
            eyebrow="Our Philosophy"
            title="Precision behind the scenes. Freedom in the moment."
            description="Every journey is an opportunity to remove friction and create space for what truly matters."
            align="center"
          />

          <div className="philosophy-grid">
            <article>
              <span>01</span>

              <h3>Listen</h3>

              <p>
                We begin with you — your preferences, priorities and the kind of
                experience you want to create.
              </p>
            </article>

            <article>
              <span>02</span>

              <h3>Curate</h3>

              <p>
                We bring together destinations, stays and experiences suited to
                your individual journey.
              </p>
            </article>

            <article>
              <span>03</span>

              <h3>Deliver</h3>

              <p>
                Every detail is coordinated with care, allowing you to travel
                with confidence.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="simple-cta">
        <div className="container">
          <SectionHeading
            eyebrow="Ready when you are"
            title="Let's create something extraordinary."
            align="center"
          />

          <Link to="/contact" className="button button-dark">
            Plan Your Journey
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}

export default About;
