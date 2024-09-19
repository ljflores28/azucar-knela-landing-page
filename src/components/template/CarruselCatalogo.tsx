import { Props } from '../../types/Interfaces';
import Catalogo from '../Catalogo';
import HeaderH2 from '../atomos/HeaderH2';

const CarruselCatalogo : React.FC<Props> = ({ id }): JSX.Element =>  {
  return (
    <section id={id}>
     <HeaderH2>🍰 Así lo hacemos 🍪</HeaderH2>
      <Catalogo />
    </section>
  );
};

export default CarruselCatalogo;
