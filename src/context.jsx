import { Children, createContext, useContext, useState } from "react"



const AppContext = createContext();

export const AppProvider = ({children})=>{
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchTerm, setSearchTerm] = useState('dog');

  const toggleDarkTheme = ()=>{
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme)
    const body = document.querySelector('body')
    body.classList.toggle('dark-theme', newDarkTheme)
    console.log(body);
  }
return(
  <AppContext.Provider value={{isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm}}>
    {children}
  </AppContext.Provider>
)
}

export const useGlobalContext = ()=> useContext(AppContext)
