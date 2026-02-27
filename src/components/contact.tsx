function Contact() {
    
    return (
        <section id="contact" className="bg-gray-200 text-black dark:bg-gray-700 dark:text-white p-6">
            <h2 className="text-3xl font-bold mb-4">Contacto</h2>
            <p className="dark:text-white text-gray-700">
                Correo: {" "}
                <a 
                    href="mailto:osvaldomares03@gmail.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                    osvaldomares03@gmail.com
                </a>
            </p>
            <p className="dark:text-white text-gray-700">
                Puedes ver mis proyectos en{" "}
                <a 
                    href="https://github.com/IZeonI" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                    mi GitHub
                </a>
            </p>
        </section>
    )
}

export default Contact