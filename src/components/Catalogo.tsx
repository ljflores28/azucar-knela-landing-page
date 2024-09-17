/* eslint-disable react-refresh/only-export-components */
import { SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import CarruselWrapper from "../hoc/CarruselWrapper";

type imageCard = {
    urlImagen: string,
    alt: string,
}

const cakeListImg: imageCard[] = [
  {
    'urlImagen': "images/pastel-1.webp",
    'alt':"Imagen Pastel 1",
  },
  {
    'urlImagen': "images/pastel-2.webp",
    'alt':"Imagen Pastel 2",
  },
  {
    'urlImagen': "images/pastel-3.webp",
    'alt':"Imagen Pastel 3",
  },
  {
    'urlImagen': "images/pastel-4.webp",
    'alt':"Imagen Pastel 4",
  },
  {
    'urlImagen': "images/pastel-5.webp",
    'alt':"Imagen Pastel 5",
  },
];

const Catalogo: React.FC = () => {

  const listaDePasteles = cakeListImg.map((imag) => {
      return <SplideSlide>
              <div  className="object-cover shadow-xl ">
                <img
                  className="rounded-xl aspect-auto"
                  src={imag.urlImagen}
                  alt={imag.alt}
                />
              </div> 
            </SplideSlide>
  });

  return (
      <>
        {listaDePasteles}
      </>
  );
}

export default CarruselWrapper(Catalogo);
