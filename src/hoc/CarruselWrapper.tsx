import { Options, Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";


type ComponentType = React.FC;

const CarruselWrapper = (Component: ComponentType, perPage: number, autoplay: boolean, options?: Options) => {
  return () => (
    <Splide options={{ perPage, rewind: true, gap: '10rem', autoplay, trimSpace: true, mediaQuery: 'max',  breakpoints: { 440: { perPage: 1, gap: 8, perMove: 1, focus: 'center', arrows: false, autoplay: true, pagination: false }} }}>
      <Component />
    </Splide>
  );
};

export default CarruselWrapper;


