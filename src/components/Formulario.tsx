import React, { useState } from "react";
import {  Notification, useToaster } from "rsuite";
import HeaderH2 from "./atomos/HeaderH2";
import FormContent from "./template/FormContent";
import 'rsuite/dist/rsuite-no-reset.min.css';


// Componente principal
const Formulario: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState<Date | null>(null);
  const [descripcion, setDescripcion] = useState("");
  const [mensaje, setMensaje] = useState("");
  const toaster = useToaster();

  // Función para mostrar notificaciones
  const showNotification = (type: "success" | "warning", message: string) => {
    toaster.push(
      <Notification type={type} header={type === "success" ? "Éxito" : "Advertencia"}>
        {message}
      </Notification>,
      { placement: "topEnd", duration: 3000 }
    );
  };

  // Validaciones de formulario y generación del mensaje
  const handleSubmit = () => {
    if (!nombre || !fecha || !descripcion) {
      showNotification("warning", "Por favor, rellena todos los campos.");
      return;
    }

    if (descripcion.length > 200) {
      showNotification("warning", "La descripción no debe exceder los 200 caracteres.");
      return;
    }

    setMensaje(
      `Soy ${nombre}, necesito en la fecha ${fecha.toLocaleDateString()} un pastel con estas características: ${descripcion}`
    );
    showNotification("success", "Solicitud enviada correctamente.");
  };

  return (
    <section id="QuienSomos">
      <HeaderH2>¡Pedí tu torta personalizada!</HeaderH2>
      <div className="grid items-center justify-center gap-4 sm:grid-cols-1 md:grid-cols-2 md:grid-rows-1">
        <div className="rounded-lg p-4 bg-[#88EADA] border-2 border[#B0AEEF] w-[90%]">
          <FormContent
            setNombre={setNombre}
            setFecha={setFecha}
            setDescripcion={setDescripcion}
            handleSubmit={handleSubmit}
          />
          {mensaje && <p className="mt-4 text-lg font-bold">{mensaje}</p>}
        </div>
        <p className="text-lg text-left font-extralight font-poppins -tracking-wider">
          ¡Queremos ser parte de tus momentos especiales!
          y podemos ayudarte siguiendo estos pasos:
          <br/><br/>
          ¿Fecha de celebración?<br/>
          Indicanos la fecha que necesitas tu pedido.
          <br/><br/>
          Queremos conocerte:<br/>
          Nos interesa saber con quien hablamos, danos tu nombre para ofercerte una atencion mas cercana.
          <br/><br/>
          !Nos inpiramos en tus ideas!<br/>
          Escribenos tus ideas o envianos una foto de referencia.
        </p>
      </div>
    </section>
  );
};


export default Formulario;
