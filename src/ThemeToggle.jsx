import React from 'react'
import { useGlobalContext } from './context'
import { BsMoonFill } from 'react-icons/bs'
import { BsSunFill } from 'react-icons/bs'



const ThemeToggle = () => {
 const { isDarkTheme, toggleDarkTheme } = useGlobalContext()
 
 
  return (
    <main className="toggle-container">
      <button onClick={toggleDarkTheme} className="dark-toggle">
        {isDarkTheme ? (
          <BsMoonFill className="toggle-icon dark-icon" />
        ) : (
          <BsSunFill className="toggle-icon" />
        )}
      </button>
    </main>
  )
}

export default ThemeToggle