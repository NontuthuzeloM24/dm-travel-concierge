import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import usePageTitle from "../hooks/usePageTitle";

import PageHero from "../components/PageHero";

function Contact() {
  usePageTitle("Contact");

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's plan your next journey."
        description="Tell us where you would like to go, and we will take care of the details."
        image="/images/contact.jpg"
      />

      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-intro">
            <span className="eyebrow">Begin the conversation</span>

            <h2>Your journey starts with a conversation.</h2>

            <p>
              Whether you have a destination in mind or simply know that you
              would like to get away, we would love to hear from you.
            </p>

            <div className="contact-details">
              <a href="mailto:desigan@dmtravelconcierge.co.za">
                <Mail size={18} />

                <span>
                  <small>Email</small>
                  desigan@dmtravelconcierge.co.za
                </span>
              </a>

              <a href="tel:+27000000000">
                <Phone size={18} />

                <span>
                  <small>Telephone</small>
                  +27 81 447 5990
                </span>
              </a>

              <div>
                <MapPin size={18} />

                <span>
                  <small>Based in</small>
                  Cape Town, South Africa
                </span>
              </div>
            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Your name</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email address</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="destination">Destination</label>

              <input
                id="destination"
                name="destination"
                type="text"
                placeholder="Where would you like to go?"
              />
            </div>

            <div className="form-field">
              <label htmlFor="message">Tell us about your journey</label>

              <textarea
                id="message"
                name="message"
                rows="7"
                placeholder="Tell us what you have in mind..."
              />
            </div>

            <button type="submit" className="button button-dark">
              Send Enquiry
              <ArrowUpRight size={17} />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
