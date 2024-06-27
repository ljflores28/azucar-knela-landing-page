export function Header () {

    return (
        <header className="flex items-center justify-between h-[20vh] bg-white p-12">
            <img src="Logo-rosa.png" alt="Logo de Azucas & Canela" className=" w-[20%]" />
            <nav className="relative flex gap-8 mr-20 font-sourceSans font-light mb-auto " >
                <a href="#header" className=" hover:text-violet-300">Inicio</a>
                <a href="#section2-1" className=" hover:text-violet-300 hover:underline">Catalogo</a>
                <a href="#section3-1" className=" hover:text-violet-300 hover:underline">Reseñas</a>
                <a href="#footer" className=" hover:text-violet-300 hover:underline">Contacto</a>
            </nav>
        </header>
    )
}