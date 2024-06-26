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
    "urlImagen": "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg",
    "fecha": "2024-04-28",
    "nombre": "leopoldo flores",
    "descripcion": "tremendo local lo recomiendo al 100% son lo mejor mundial del mundo mundial",
    "reviewStars": 5
  },
  {
    "urlImagen": "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg",
    "fecha": "2024-04-28",
    "nombre": "leopoldo flores",
    "descripcion": "tremendo local lo recomiendo al 100%",
    "reviewStars": 5
  },
  {
    "urlImagen": "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg",
    "fecha": "2024-04-28",
    "nombre": "leopoldo flores",
    "descripcion": "tremendo local lo recomiendo al 100%",
    "reviewStars": 5
  },
  {
    "urlImagen": "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg",
    "fecha": "2024-04-28",
    "nombre": "leopoldo flores",
    "descripcion": "tremendo local lo recomiendo al 100%",
    "reviewStars": 5
  }
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
    return <SplideSlide key={index} onClick={() => window.location.href="https://google.com"}>
      <div className=" hover:cursor-pointer bg-violet-200 flex flex-col h-[250px] w-[351px] shadow-lg rounded-lg p-10 gap-2">
        <div className="flex items-center gap-3 ">
          <img
            src={review.urlImagen}
            className=" rounded-full object-cover w-12"
          />
          <div className="">
            <h1 className=" text-xl font-righteous font-semibold">
              {review.nombre}
            </h1>
            <p className=" text-start text-sm font-sourceSans font-light">2024-06-24</p>
          </div>
        </div>
        <div className="flex gap-1 text-xl">
          {StarsReviews(review.reviewStars)}
        </div>
        <p className="text-sm text-start font-sourceSans font-semibold">
          {review.descripcion}
        </p>
        <div className="flex justify-center mt-auto">
          <img src="google-logo.png" alt="" className="w-12" />
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

export default CarruselWrapper(Resenas, 2);
