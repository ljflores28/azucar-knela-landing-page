import { GiShop } from "react-icons/gi";
import useFocus from "../../hook/useFocus";
import { RiEBike2Fill } from "react-icons/ri";

const FAB: React.FC = () => {
  const [buttonRef, isFocused] = useFocus<HTMLButtonElement>();

  return (
    <div className="relative z-20">
      <button
        ref={buttonRef}
        aria-label="Floating Action Button for services"
        className="fixed flex justify-center items-center bg-fuchsia-900 active:bg-[#BAB0EF] focus:ring-2 focus:ring-white focus:outline-none font-bold text-lg sm:text-xl shadow-xl shadow-slate-700 rounded-xl bottom-8 right-8 transform active:scale-75 size-16 sm:size-20"
      >
        <RiEBike2Fill fill="#fff" size={23} />
      </button>

      {isFocused && (
        <div
          className="fixed flex flex-col gap-2 bottom-16 sm:bottom-20 right-10 sm:right-11"
          aria-live="polite"
        >
          <a
            href="http://mpago.li/2Sn1Myp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
            className="flex items-center justify-center text-lg font-bold transform rounded-lg shadow-2xl opacity-100 sm:text-xl shadow-slate-700 active:scale-75 animate-slide-in size-12 sm:size-14 bg-[#00A8EA]"
            style={
              isFocused 
              ? { animation: "slide-in 0.3s forwards" }
              : { animation: "slide-out 0.3s forwards" }
            }
          >
            <div className="flex flex-col items-center">
              <GiShop size={25} color="fff" aria-label="Mercado Pago Delivery"/>
              <span className="text-xs text-white ">MP</span>    
            </div>
          </a>

          <a
            href="https://www.rappi.com.ar/restaurantes/214908-azucar-y-knela"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order from Rappi"
            className="flex items-center justify-center text-lg font-bold transform rounded-lg shadow-2xl opacity-100 sm:text-xl shadow-slate-700 active:scale-75 animate-slide-in size-12 sm:size-14"
            style={
              isFocused 
              ? { animation: "slide-in 0.3s forwards" }
              : { animation: "slide-out 0.3s forwards" }
            }
          >
            <img
              src="images/Rappi-logo.webp"
              alt="Rappi Logo"
              className="object-cover rounded-lg"
            />
          </a>

          <a
            href="https://www.pedidosya.com.ar/restaurantes/buenos-aires/azucar-y-knela-menu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order from PedidosYa"
            className="flex items-center justify-center text-lg font-bold transform rounded-lg shadow-2xl sm:text-xl shadow-slate-700 active:scale-75 animate-slide-in size-12 sm:size-14"
            style={
              isFocused 
              ? { animation: "slide-in 0.3s forwards" }
              : { animation: "slide-out 0.3s forwards" }
            }
          >
            <img
              src="images/pedidosya-logo.webp"
              alt="PedidosYa Logo"
              className="object-cover rounded-lg"
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default FAB;
