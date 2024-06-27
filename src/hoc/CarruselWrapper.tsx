import { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";


type ComponentType = React.FC;

const CarruselWrapper = (Component: ComponentType, perPage: number, autoplay: boolean) => {
  return () => (
    <Splide options={{ perPage , padding: '2rem', rewind: true, autoplay, trimSpace: true }}>
      <Component />
    </Splide>
  );
};

export default CarruselWrapper;


