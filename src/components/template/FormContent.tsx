import React from "react";
import FormLabel from "../atomos/FormLabel";
import InputField from "../atomos/InputField";
import { Button, Stack } from "rsuite";
import DatePickerInput from "../atomos/DatePickerInput";
import { PropsFormulario } from "../../types/Interfaces";

// Componente para el formulario
const FormContent: React.FC<PropsFormulario> = ({ setNombre, setFecha, setDescripcion, handleSubmit }) => (
  <Stack spacing={10} direction="column" alignItems="stretch">

    <Stack.Item alignSelf="flex-start">
        <FormLabel htmlFor="nombre" text="Cual es tu nombre:" />
    </Stack.Item>
    <InputField
      id="nombre"
      placeholder="Escribe tu nombre"
      onChange={setNombre}
      as="input"
    />

    <Stack.Item alignSelf="flex-start">
      <FormLabel htmlFor="fechaCelebracion" text="Fecha de la celebración:" />
    </Stack.Item>
    <DatePickerInput id="fechaCelebracion" onChange={setFecha} />

    <Stack.Item alignSelf="flex-start">
        <FormLabel htmlFor="descripcion" text="Danos una breve descripción:" />
    </Stack.Item>
    <InputField
      id="descripcion"
      placeholder="Describe tu pastel"
      onChange={setDescripcion}
      as="textarea"
      maxLength={100}
    />

    <Button
      appearance="primary"
      size="lg"
      className=" bg-[#fb7185] w-full hover:bg-[#fb71cb] focus:bg-[#fb7185]"
      onClick={handleSubmit}
    >
      Enviar
    </Button>
  </Stack>
);

export default FormContent;
