import React from "react";

// Componente reutilizable para etiquetas
const FormLabel: React.FC<{ htmlFor: string; text: string }> = ({
    htmlFor,
    text,
  }) => <label htmlFor={htmlFor} className="font-poppins text-start">{text}</label>;

export default FormLabel;