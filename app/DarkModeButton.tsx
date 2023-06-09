"use client"
import {useTheme} from "next-themes"
import {useState, useEffect} from "react"
import {BsSunFill,BsSun} from "react-icons/bs"

function DarkModeButton() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
 
  useEffect(() =>{
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
 
  return (
  <div className="absolute top-20 right-1">
        {currentTheme === "dark" ? (
            <BsSun 
            className="h-8 w-8 cursor-pointer text-yellow-500"
            onClick={() => setTheme ("light")} 
            /> 
        ) : (
            <BsSunFill
            className="h-8 w-8 cursor-pointer text-gray-900" 
            onClick={() => setTheme("dark")}
            />
        )}
    </div>
  );
}

export default DarkModeButton;