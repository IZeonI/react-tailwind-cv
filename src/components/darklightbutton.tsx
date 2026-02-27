import { useState, useEffect } from 'react'
import { GiMoon  } from "react-icons/gi";
import { HiSun } from "react-icons/hi";

const DarkLightButton: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  // useEffect para usar el tema default del sistema operativo
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(prefersDark);
  }, []);

  //useEffect para cambiar el tema de la pagina mediante un boton
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleMode = () => {
    setIsDark(!isDark);
  };


  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="flex items-center cursor-pointer">
        <button onClick={toggleMode} 
        aria-label='change theme'
        className="text-xl"
        > 
          {isDark ? 
          <GiMoon 
          className='hover:bg-gray-400 rounded-xs transition-colors duration-300'
          /> : 
          <HiSun 
          className="text-black hover:bg-gray-300 rounded-xs transition-colors duration-300"
          />}
        </button>
      </div>
    </div>
  )

}

export default DarkLightButton
