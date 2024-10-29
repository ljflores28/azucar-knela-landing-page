import { FaSearch } from "react-icons/fa";
import { Input, InputGroup } from "rsuite";

const Buscador : React.FC< {handleFilter : (target : string) => void}> = ( { handleFilter } ) => {


  return (
    <>
      <InputGroup>
        <Input
          placeholder="Buscar"
          onChange={(target) => {
            handleFilter(target.toUpperCase())
          }}
        />
        <InputGroup.Addon className="bg-pink-200 ">
          <FaSearch />
        </InputGroup.Addon>
      </InputGroup>
    </>
  );
};

export default Buscador;
