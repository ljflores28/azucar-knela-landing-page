import React from "react";
import FormLabel from "../atomos/FormLabel";
import InputField from "../atomos/InputField";
import { Button, Stack } from "rsuite";
import DatePickerInput from "../atomos/DatePickerInput";

// Componente para el formulario
const FormContent: React.FC<{
  setNombre: React.Dispatch<React.SetStateAction<string>>;
  setFecha: React.Dispatch<React.SetStateAction<Date | null>>;
  setDescripcion: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
}> = ({ setNombre, setFecha, setDescripcion, handleSubmit }) => (
  <Stack spacing={10} direction="column" alignItems="stretch">
    <Stack.Item alignSelf="flex-start">
      <FormLabel htmlFor="fechaCelebracion" text="Fecha de la celebración:" />
    </Stack.Item>
    <DatePickerInput id="fechaCelebracion" onChange={setFecha} />

    <Stack.Item alignSelf="flex-start">
        <FormLabel htmlFor="nombre" text="Dinos tu nombre:" />
    </Stack.Item>
    <InputField
      id="nombre"
      placeholder="Escribe tu nombre"
      onChange={setNombre}
      as="input"
    />

    <Stack.Item alignSelf="flex-start">
        <FormLabel htmlFor="descripcion" text="Danos una breve descripción:" />
    </Stack.Item>
    <InputField
      id="descripcion"
      placeholder="Describe tu pastel"
      onChange={setDescripcion}
      as="textarea"
      maxLength={200}
    />

    <Button
      appearance="primary"
      size="lg"
      style={{ width: "100%", background: "#fb7185" }}
      onClick={handleSubmit}
    >
      Enviar
    </Button>
  </Stack>
);

export default FormContent;
