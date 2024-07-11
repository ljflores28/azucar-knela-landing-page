import useFocus from "../../hook/useFocus";
import { RiEBike2Fill } from "react-icons/ri";

const FAB = () => {
  const [buttonRef, isFocused] = useFocus<HTMLButtonElement>();

  return (
    <div className="relative z-20 ">
      <button
        ref={buttonRef}
        className="fixed flex justify-center items-center bg-fuchsia-900 active:bg-[#BAB0EF] focus:ringfont-bold size-16 sm:size-20 shadow-xl shadow-slate-700 rounded-xl bottom-8 right-8 transform active:scale-75 "
      >
        <RiEBike2Fill fill="#ffff" size={23} />
      </button>
      {
        <div
          className={`flex flex-col gap-2 fixed bottom-16 sm:bottom-20 right-10 sm:right-11`}
        >
          <button
            onClick={() =>
              (window.location.href = "https://wa.me/c/5491167953259")
            }
            className={
              "flex justify-center items-center font-bold size-12 sm:size-14 rounded-lg shadow-2xl shadow-slate-700  opacity-100 transform active:scale-75 animate-slide-in"
            }
            style={
              isFocused
                ? { animation: "slide-in 0.3s forwards" }
                : { animation: "slide-out 0.3s forwards" }
            }
          >
            <img
              src="whatsapp-logo.png"
              alt=""
              className="rounded-lg object-cover"
            />
          </button>
          <button
            onClick={() =>
              (window.location.href =
                "https://www.rappi.com.ar/restaurantes/214908-azucar-y-knela")
            }
            className={
              "flex justify-center items-centerfont-bold size-12 sm:size-14 rounded-lg shadow-2xl shadow-slate-700 transform active:scale-75 animate-slide-in"
            }
            style={
              isFocused
                ? { animation: "slide-in 0.3s forwards" }
                : { animation: "slide-out 0.3s forwards" }
            }
          >
            <img
              src="Rappi-logo.png"
              alt=""
              className="rounded-lg object-cover"
            />
          </button>
          <button
            onClick={() =>
              (window.location.href =
                "https://www.pedidosya.com.ar/restaurantes/buenos-aires/azucar-y-knela-menu")
            }
            className={
              "flex justify-center items-center font-bold size-12 sm:size-14 rounded-lg shadow-2xl shadow-slate-700 transform active:scale-75 animate-slide-in"
            }
            style={
              isFocused
                ? { animation: "slide-in 0.3s forwards" }
                : { animation: "slide-out 0.3s forwards" }
            }
          >
            <img
              src="pedidosya-logo.png"
              alt=""
              className="rounded-lg object-cover"
            />
          </button>
        </div>
      }
    </div>
  );
};

export default FAB;
