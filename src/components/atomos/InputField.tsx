import React from "react";
import { Input } from "rsuite";


// Componente para campos de entrada (input/textarea)
const InputField: React.FC<{
    id: string;
    placeholder: string;
    as: "input" | "textarea";
    onChange: (value: string) => void;
    maxLength?: number;
  }> = ({ id, placeholder, as, onChange, maxLength }) => (
    <Input
      id={id}
      as={as}
      placeholder={placeholder}
      size="lg"
      style={{ width: "100%" }}
      onChange={(value) => onChange(value)}
      maxLength={maxLength}
    />
  );

export default InputField;