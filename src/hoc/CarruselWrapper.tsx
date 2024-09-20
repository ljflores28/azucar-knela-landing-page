import {Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";


type ComponentType = React.FC;

const CarruselWrapper = (Component: ComponentType) => {
  return () => (
    <Splide options={{ perPage: 1, rewind: true, gap: '50px', arrows: false, autoplay: true, trimSpace: true, mediaQuery: 'min',  breakpoints: { 
      785: { perPage: 3, gap: 8, perMove: 1, focus: 'center', arrows: true, autoplay: true, pagination: false },
      } }}>
      <Component />
    </Splide>
  );
};

export default CarruselWrapper;