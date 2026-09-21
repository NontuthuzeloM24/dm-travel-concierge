import { Link } from "react-router-dom";
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

        {/* Takes the visitor to the enquiry form with this destination filled in */}
        <Link
          to={`/contact?destination=${encodeURIComponent(title)}`}
          className="inline-link"
        >
          Enquire
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}

export default DestinationCard;
