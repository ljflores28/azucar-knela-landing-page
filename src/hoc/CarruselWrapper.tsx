import { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

type ComponentType = React.FC;

const CarruselWrapper = (Component: ComponentType, perPage: number) => {
  return () => (
    <Splide options={{ perPage , padding: '2rem', width:'100%'}}>
      <Component />
    </Splide>
  );
};

export default CarruselWrapper;
