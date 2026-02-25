import { useState } from 'react'
import { GiMoon  } from "react-icons/gi";
import { LuSun } from "react-icons/lu";

const DarkLightButton: React.FC = () => {

  const [isDark, setIsDark] = useState<boolean>(false);

  const handleLight = () => {
    console.log("Se cambio a modo claro ☀️");
  };

  const handleDark = () => {
    console.log("Se cambio a modo oscuro 🌙");
  };

  const handleClick = () => {
    if (isDark) {
      handleLight();
    } else {
      handleDark();
    }
    setIsDark(!isDark);
  };


  return (
    <div className="flex items-center cursor-pointer rounded hover:bg-gray-700 transition-colors duration-300">
      <button onClick={handleClick} className="text-xl"> 
        {isDark ? <GiMoon /> : <LuSun />}
      </button>
    </div>
  )

}

export default DarkLightButton
