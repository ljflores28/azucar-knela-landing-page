/* eslint-disable react-refresh/only-export-components */
import { SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import CarruselWrapper from "../hoc/CarruselWrapper";

const listaDePasteles = [
  {
    urlImagen: "images/pastel-1.webp",
    alt: "Imagen Pastel 1",
  },
  {
    urlImagen: "images/pastel-2.webp",
    alt: "Imagen Pastel 2",
  },
  {
    urlImagen: "images/pastel-3.webp",
    alt: "Imagen Pastel 3",
  },
  {
    urlImagen: "images/pastel-4.webp",
    alt: "Imagen Pastel 4",
  },
  {
    urlImagen: "images/pastel-5.webp",
    alt: "Imagen Pastel 5",
  },
].map((imag, index) => {
  return (
    <SplideSlide key={index}>
      <img
        className="rounded-xl aspect-auto"
        srcSet={imag.urlImagen}
        alt={imag.alt}
        style={{ objectFit: "cover" }}
      />
    </SplideSlide>
  );
});

const Catalogo: React.FC = () => {
  return <>{listaDePasteles}</>;
};

export default CarruselWrapper(Catalogo);
