import DarkLightButton from './darklightbutton'

function Navbar() {

    return (
        <nav className="flex items-center justify-between p-6 bg-gray-800 text-white">
            <div className="text-2xl font-bold">Osvaldo Martinez Espinosa</div>
            <ul className="flex space-x-4 items-center">
            <DarkLightButton />
            <li><a href="#about" className="hover:text-gray-400">Acerca de mi</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contacto</a></li>
            </ul>
        </nav>
    )

}

export default Navbar