export default function Hero() {

    return (
        <section className="grid sm:grid-cols-1 md:grid-cols-2">
          {/*MENSAJE*/}
          <div className="flex flex-col self-center justify-center gap-4 mx-3">
            <h1 className="font-merriweather xs:mt-5 sm:mt-0 text-3xl leading-[3.0rem] md:text-4xl md:leading-[4.0rem] xl:text-6xl xl:leading-[5.0rem]">
              Las tortas más <br /> deliciosas de <span className="inline-block -rotate-12 text-violet-700">BA!</span>
            </h1>
            <p className="text-sm font-light font-poppins md:text-sm xl:text-xl">
              Pasteleria y postres personalizados.<br />¡Haz que tus momentos
              se vuelvan <br /> dulces con nosotros!
            </p>
            <div className="text-white font-poppins xl:text-xl">
              <button className=" bg-rose-400 w-full sm:w-fit py-2 px-10 rounded-3xl hover:scale-110 duration-200 hover:bg-[#23EBD9] focus:ring-4 focus:outline-none focus:ring-[#FFB1D6] transition ease-in-out delay-150 hover:-translate-y-1">
                ¡Pedí tu presupuesto!
              </button>
            </div>
          </div>
          {/*IMAGEN*/}
          <div className="relative flex self-center mt-4 sm:mt-0 md:col-span-1 xl:col-span-1">
            <img
              src="cake-hero.png"
              alt="_blank"
              className="absolute"
            />
            <img
              src="blob.svg"
              alt="_blank"
              className=""
            />
          </div>
        </section>
    )
}