export function Header () {

    return (
        <header className="bg-white flex flex-col items-center justify-center h-10vh sm:p-7 xl:flex-row xl:h-[20vh] xl:p-12 xl:justify-between">
            <img src="Logo-rosa.png" alt="Logo de Azucas & Canela" />
            <nav className="flex gap-8 font-sourceSans font-light sm:text-sm sm:w-full sm:gap-2 sm:justify-center xl:mb-auto xl:mr-20 " >
                <a href="#header" className=" hover:text-violet-300">Inicio</a>
                <a href="#section2-1" className=" hover:text-violet-300 hover:underline">Catalogo</a>
                <a href="#section3-1" className=" hover:text-violet-300 hover:underline">Reseñas</a>
                <a href="#footer" className=" hover:text-violet-300 hover:underline">Contacto</a>
            </nav>
        </header>
    )
}