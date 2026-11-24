import wineCellar from "../assets/images/gallery/wine-cellar.webp";
import staircase from "../assets/images/gallery/staircase.webp";
import barInterior from "../assets/images/gallery/bar-interior.webp";
import bookshelf from "../assets/images/gallery/bookshelf.webp";
import customSeating from "../assets/images/gallery/custom-seating.webp";

const galleryImages = [
  {
    image: wineCellar,
    title: "Vinkällare",
    description: "Platsbyggd vinkällare med specialanpassad förvaring.",
  },
  {
    image: staircase,
    title: "Trappa",
    description: "Specialbyggd trappa med klassiska detaljer.",
  },
  {
    image: barInterior,
    title: "Barinredning",
    description: "Specialtillverkad barinredning för offentlig miljö.",
  },
  {
    image: bookshelf,
    title: "Platsbyggd bokhylla",
    description: "Måttanpassad bokhylla med integrerade skåp.",
  },
  {
    image: customSeating,
    title: "Specialinredning",
    description: "Specialbyggd sitt- och trappinredning.",
  },
];

function Gallery() {
  return (
    <section className="gallery">
      <div className="gallery__header">
        <h1>Våra arbeten</h1>
        <p>Här kan du se ett urval av våra specialsnickerier och projekt.</p>
      </div>

      <div className="gallery__grid">
        {galleryImages.map((item) => (
          <article className="gallery-card" key={item.title}>
            <div className="gallery-card__image">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="gallery-card__content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
