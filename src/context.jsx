import { Children, createContext, useContext, useEffect, useState } from "react"



const AppContext = createContext();

const getDarkTheme = ()=>{
  const prefersDarkTheme = window.matchMedia('(prefers-color-scheme:dark)').matches
  const storeDarkTheme = localStorage.getItem('dark-theme') === 'true'
  return storeDarkTheme || prefersDarkTheme;
}


export const AppProvider = ({children})=>{
  const [isDarkTheme, setIsDarkTheme] = useState(getDarkTheme());
  const [searchTerm, setSearchTerm] = useState('dog');

  const toggleDarkTheme = ()=>{
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem('dark-theme', newDarkTheme)
  }

  useEffect(()=>{
    document.body.classList.toggle('dark-theme', isDarkTheme)
  }, [isDarkTheme])

return(
  <AppContext.Provider value={{isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm}}>
    {children}
  </AppContext.Provider>
)
}

export const useGlobalContext = ()=> useContext(AppContext)
