import { ArrowUpRight } from "lucide-react";

function DestinationCard({ title, subtitle, description, image }) {
  return (
    <article className="destination-card">
      <div className="destination-image-wrapper">
        <img
          src={image}
          alt={title}
          className="destination-image"
          loading="lazy"
        />
      </div>

      <div className="destination-content">
        <span className="destination-location">{subtitle}</span>

        <h3>{title}</h3>

        <p>{description}</p>

        <button type="button" className="inline-link">
          Discover
          <ArrowUpRight size={16} />
        </button>
      </div>
    </article>
  );
}

export default DestinationCard;
