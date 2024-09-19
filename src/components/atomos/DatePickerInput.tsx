import { isBefore } from 'date-fns';
import React from "react";
import { FaBirthdayCake } from "react-icons/fa";
import { DatePicker } from "rsuite";

// Componente para el ícono personalizado
const CustomIcon: React.FC = () => <FaBirthdayCake color="#B0AEEF" />;

// Configuración de la propiedad locale abstraída
const datePickerLocaleConfig = {
  sunday: "Sa",
  monday: "Lu",
  tuesday: "Ma",
  wednesday: "Mi",
  thursday: "Ju",
  friday: "Vi",
  saturday: "Do",
  ok: "OK",
  today: "Hoy",
  yesterday: "Mañana",
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