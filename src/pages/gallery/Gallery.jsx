import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_3.jpg";
import "./gallery.css";

const Gallery = () => {
  const galleryLength = 15;
  const images = [];

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));
  }

  return (
    <>
      <Header title="Gallery" image={HeaderImage}>
        lorem Ips et dolor sit amet, consectetur adipis occ tempor invidunt ut
        labore et dolore magna aliqu sapient voluptatem. Lorem ipsum dolor sit
        amet, consectetur.
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {images.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt={`Gallery Img ${index + 1}`} />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
