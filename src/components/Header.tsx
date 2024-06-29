export function Header () {

    return (
        <header className="bg-white flex flex-col items-center justify-center h-10vh sm:p-7 md:flex-row md:h-[20vh] md:p-12 md:justify-between">
            <img src="Logo-rosa.png" alt="Logo de Azucas & Canela" className="sm:w-[40vw] md:w-[20vw]" />
            <nav className="flex gap-8 font-sourceSans font-light sm:text-sm sm:w-full sm:gap-2 sm:justify-center md:mb-auto md:mr-20 " >
                <a href="#header" className=" hover:text-violet-300">Inicio</a>
                <a href="#section2-1" className=" hover:text-violet-300 hover:underline">Catalogo</a>
                <a href="#section3-1" className=" hover:text-violet-300 hover:underline">Reseñas</a>
                <a href="#footer" className=" hover:text-violet-300 hover:underline">Contacto</a>
            </nav>
        </header>
    )
}