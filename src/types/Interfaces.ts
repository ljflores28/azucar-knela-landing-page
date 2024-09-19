export interface Props {
    id: string;
  }

export interface PropsFormulario {
    setNombre: React.Dispatch<React.SetStateAction<string>>;
    setFecha: React.Dispatch<React.SetStateAction<Date | null>>;
    setDescripcion: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: () => void;
}