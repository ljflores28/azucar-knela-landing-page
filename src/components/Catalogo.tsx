/* eslint-disable react-refresh/only-export-components */
import { SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import CarruselWrapper from "../hoc/CarruselWrapper";

const Catalogo: React.FC = () => {
  return (
      <>
          <SplideSlide >
            <img
              src="Pastel1.png"
              alt="pastel 1"
              className=" object-cover rounded-xl w-60 shadow-xl"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="Pastel2.png"
              alt="pastel 1"
              className=" object-cover rounded-xl w-60 shadow-xl"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="Pastel3.png"
              alt="pastel 1"
              className=" object-cover rounded-xl w-60 shadow-xl"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="Pastel4.png"
              alt="pastel 1"
              className=" object-cover rounded-xl w-60 shadow-xl"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="Pastel5.png"
              alt="pastel 1"
              className=" object-cover rounded-xl w-60 shadow-xl"
            />
          </SplideSlide>
      </>
  );
}

export default CarruselWrapper(Catalogo, 4);
