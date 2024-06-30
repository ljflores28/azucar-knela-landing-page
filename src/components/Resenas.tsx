/* eslint-disable react-refresh/only-export-components */
import { SplideSlide } from "@splidejs/react-splide";
import { FaStar, FaRegStar } from "react-icons/fa";
import CarruselWrapper from "../hoc/CarruselWrapper";

type reviewCard = {
  urlImagen: string,
  fecha: string,
  nombre: string,
  descripcion: string,
  reviewStars: number
};

const reviewList: reviewCard[] = [
  {
    "urlImagen": "https://lh3.googleusercontent.com/a-/ALV-UjXOsO_IGKwCmBmxcqmBY3XnNhlo7FlOBSegKJoB-gC01adVZNHTog=w48-h48-p-rp-mo-br100",
    "fecha": "2024-04-28",
    "nombre": "Sofia Vivas Reyes",
    "descripcion": "¡Los postres más ricos de Buenos Aires! Su atención, responsabilidad y calidad también los caracterizan. Sin dudarlo presentes en todas las celebraciones de mi familia.",
    "reviewStars": 5
  },
  {
    "urlImagen": "https://lh3.googleusercontent.com/a-/ALV-UjXTxqBuIqfKTqtU-ZNaiPOPJIx2ysa67Pg_9UroyVNKYI7Dlyef=w48-h48-p-rp-mo-br100",
    "fecha": "2024-04-28",
    "nombre": "Carlos Hernandez",
    "descripcion": "Excelente ambiente ! Buen lugar para encontrar los mejores postres y demás en una juntada de amigos !",
    "reviewStars": 5
  },
  {
    "urlImagen": "https://lh3.googleusercontent.com/a-/ALV-UjV5NNOIL6yPxcrWJqq6y-HEbY_s7pNbh5wNwaTOgid69ngRvVBX=w48-h48-p-rp-mo-br100",
    "fecha": "2024-06-26",
    "nombre": "Andrea Gutierrez",
    "descripcion": "🥰 Les recomiendo este lugar para disfrutar de momentos dulces y especiales! En esta pastelería, disfruto de deliciosos cafés y una increíble variedad de postres exquisitos. ☕🧁🍰",
    "reviewStars": 5
  },
  {
    "urlImagen": "https://lh3.googleusercontent.com/a/ACg8ocITkQHF2TgxmnrZ180ZyIpB_p4_YJGeKKLFr2zFjIultrZakg=w48-h48-p-rp-mo-br100",
    "fecha": "2024-04-28",
    "nombre": "Jose Escalona",
    "descripcion": "La atención es fantástica, buen asesoramiento por WhatsApp, la tartaleta de frutillas es riquísima y la decoración muy cuidada 😃❤️ ",
    "reviewStars": 5
  },
];

const Resenas: React.FC = () => {
  
  const StarsReviews = (startsNumber: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++){
      (i <= startsNumber) ? 
       stars.push(<FaStar className={"text-yellow-400"} />) :
       stars.push(<FaRegStar />)
    } 
    return stars;
  }
  
  const reviewCards = reviewList.map((review, index) => {
    return <SplideSlide key={index} >
      <div className="relative hover:cursor-pointer bg-violet-200 flex flex-col sm:p-5 sm:w-[100%] sm:h-auto xl:h-[250px] xl:w-[351px] shadow-lg rounded-lg xl:p-10 gap-2">
        <div className="flex items-center gap-3 ">
          <img
            src={review.urlImagen}
            className="rounded-full object-cover w-12"
          />
          <div className="">
            <h1 className=" text-lg font-righteous font-semibold">
              {review.nombre}
            </h1>
            <p className=" text-start text-sm font-sourceSans font-light">{review.fecha}</p>
          </div>
        </div>
        <div className="flex gap-1 text-xl">
          {StarsReviews(review.reviewStars)}
        </div>
        <p className="text-sm text-start font-sourceSans font-semibold">
          {review.descripcion}
        </p>
        <div className="absolute top-0 right-0 p-3">
            <img src="google-logo.png" alt="" className=" sm:w-4 xl:w-12" />
          </div>
      </div>
    </SplideSlide>
  });

  return (
    <>
      {reviewCards}
    </>
    ); 
};

export default CarruselWrapper(Resenas, 2, false);
