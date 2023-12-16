import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const {searchTerm} = useGlobalContext()
  return (
    <main>
      <h2 className="title">Unsplash images</h2>
      <form className="search-form">
        <input  
          type="text"
          className="search-input"
          name="search"
          placeholder="cat"
        />
        <button className="btn">search</button>
      </form>
    </main>
  )
}

export default SearchForm