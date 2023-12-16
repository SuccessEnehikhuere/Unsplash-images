import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext()

  const handleSubmit = (e)=>{
    e.preventDefault();
    const searchInput = e.target.elements.search.value
    if (!searchInput) return
    setSearchTerm(searchInput)
  }
  
  return (
    <main>
      <h2 className="title">Unsplash images</h2>
      <form className="search-form" onSubmit={handleSubmit}>
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