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
    'urlImagen': "Pastel1.png",
    'alt':"Imagen Pastel 1",
  },
  {
    'urlImagen': "Pastel2.png",
    'alt':"Imagen Pastel 2",
  },
  {
    'urlImagen': "Pastel3.png",
    'alt':"Imagen Pastel 3",
  },
  {
    'urlImagen': "Pastel4.png",
    'alt':"Imagen Pastel 4",
  },
  {
    'urlImagen': "Pastel5.png",
    'alt':"Imagen Pastel 5",
  },
];

const Catalogo: React.FC = () => {

  const listaDePasteles = cakeListImg.map((imag) => {
      return <SplideSlide>
              <div  className="object-cover w-70 shadow-xl ">
                <img
                  className="rounded-xl"
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

export default CarruselWrapper(Catalogo, 4, false);
