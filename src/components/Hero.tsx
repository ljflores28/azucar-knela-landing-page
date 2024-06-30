export function Hero(){
    return (
        <section className="bg-white h-[80vh] justify-items-center grid sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-2">
            <div className="relative flex flex-col justify-center p-12 bottom-10  md:col-span-1 xl:col-span-1 ">
                <div className="flex flex-col gap-4">
                    <h1 className="font-righteous sm:text-2xl sm:leading-[2.5rem] md:text-3xl md:leading-[4.0rem] xl:text-4xl xl:leading-[4.0rem]">Los pasteles más <br /> deliciosos de <span className=" inline-block -rotate-12 text-violet-700">BA!</span></h1>
                    <p className="font-sourceSans font-light sm:text-xs md:text-sm  xl:text-xl">Pasteleria y postres personalizados. <br /> ¡Haz que tus momentos se vuelvan  <br /> dulces con nosotros!</p>
                    <div className=" text-white xl:text-xl">
                        <button className=" bg-rose-400 py-2 px-3 sm:w-full rounded-xl hover:scale-110 duration-300 hover:bg-[#23EBD9] focus:ring-4 focus:outline-none focus:ring-[#FFB1D6] transition ease-in-out delay-150 hover:-translate-y-1">¡Ordena Ahora!</button>
                    </div>
                </div>
            </div>
            <div className="relative flex items-center bottom-10 sm:bottom-16 md:col-span-1 xl:col-span-1">
                <img src="cake-hero.png" alt="" className="object-cover z-10 sm:relative sm:w-[20rem] md:w-[25rem] xl:w-[30rem]" />
                <img src="blob.svg" alt="" className="absolute object-cover translate-x-0 w-[90vh]" />
            </div>
        </section>
    )
}