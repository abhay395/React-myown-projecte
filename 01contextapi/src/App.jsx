import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeBtn from "./components/Thembtn";
import Card from "./components/Card";

function App() {
  const [ThemeMode,setThemMode]=useState('light')
const lightThem=()=>{
  setThemMode('light')
}
const darkThem=()=>{
  setThemMode('dark')
}
useEffect(()=>{
  document.querySelector('html').classList.remove('dark','light')
  document.querySelector('html').classList.add(ThemeMode)
  
},[ThemeMode])

  return (
    <ThemeProvider value={{ThemeMode,lightThem,darkThem}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card/>
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
