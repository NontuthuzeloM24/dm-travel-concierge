import usePageTitle from "../hooks/usePageTitle";

import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";

import { blogPosts } from "../data/content";

function Blog() {
  usePageTitle("Journal");

  return (
    <>
      <PageHero
        eyebrow="The Journal"
        title="Thoughts from the road."
        description="Destination inspiration, travel stories and considered ways to experience the world."
        image="/images/about.jpg"
      />

      <section className="section journal-section">
        <div className="container">
          <SectionHeading
            eyebrow="Travel Journal"
            title="Stories worth travelling for."
            description="A collection of destinations, experiences and ideas from the world of considered travel."
          />

          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article className="blog-card" key={post.title}>
                <div className="blog-image-wrapper">
                  <img src={post.image} alt={post.title} loading="lazy" />
                </div>

                <div className="blog-content">
                  <span className="blog-category">{post.category}</span>

                  <h3>{post.title}</h3>

                  <p>{post.excerpt}</p>

                  {/* No article pages exist yet, so no dead "Read story" button. */}
                  <span className="blog-soon"></span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
