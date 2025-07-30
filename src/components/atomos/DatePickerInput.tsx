import { isBefore } from 'date-fns';
import React from "react";
import { FaBirthdayCake } from "react-icons/fa";
import { DatePicker } from "rsuite";

// Componente para el ícono personalizado
const CustomIcon: React.FC = () => <FaBirthdayCake color="#B0AEEF" />;

// Configuración de la propiedad locale abstraída
const datePickerLocaleConfig = {
  sunday: "Do",      // Domingo
  monday: "Lu",      // Lunes
  tuesday: "Ma",     // Martes
  wednesday: "Mi",   // Miércoles
  thursday: "Ju",    // Jueves
  friday: "Vi",      // Viernes
  saturday: "Sa",    // Sábado
  ok: "OK",
  today: "Hoy",
  yesterday: "Ayer", // Corrección aquí
};


// Componente para el DatePicker
const DatePickerInput: React.FC<{ id: string; onChange: (date: Date | null) => void }> = ({ id, onChange }) => (
    <DatePicker
      id={id}
      oneTap
      caretAs={CustomIcon}
      format="dd/MM/yyyy"
      style={{ width: "100%" }}
      locale={datePickerLocaleConfig}
      onChange={onChange}
      shouldDisableDate={date => isBefore(date, new Date())}
      editable={false}
    />
  );

export default DatePickerInput;