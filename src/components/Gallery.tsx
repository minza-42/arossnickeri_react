const galleryItems = [
  {
    image: "specialbyggda-mobler.webp",
    title: "Specialbyggda möbler",
    category: "Specialsnickeri",
  },
  {
    image: "offentliga-miljö.webp",
    title: "Offentliga miljöer",
    category: "Inredning",
  },
  {
    image: "bokhylla-header.webp",
    title: "Platsbyggda bokhyllor",
    category: "Specialsnickeri",
  },
  {
    image: "trappor_header.webp",
    title: "Inomhustrappor",
    category: "Byggnadssnickeri",
  },
];

function Gallery() {
  return (
    <section className="gallery" id="referenser">
      <div className="container">
        <div className="gallery__intro">
          <p className="gallery__eyebrow">Våra arbeten</p>

          <h2>Utvalda arbeten.</h2>

          <p className="gallery__description">
            Ett urval av snickerier och inredningar skapade med fokus på
            kvalitet och detaljer.
          </p>
        </div>

        <div className="gallery__grid">
          {galleryItems.map((item) => (
            <article className="gallery-card" key={item.image}>
              <div className="gallery-card__image">
                <img
                  src={`/src/assets/images/${item.image}`}
                  alt={item.title}
                />
              </div>

              <div className="gallery-card__content">
                <p>{item.category}</p>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
