import React from 'react'
import { useGlobalContext } from './context'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}&query=girl`


console.log(import.meta.env.VITE_API_KEY);

function Gallery() {
  const { searchTerm } = useGlobalContext()

  const response = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const result = await axios.get(url)

      return result.data
    },
  })

  if (response.isLoading) {
    return (
      <section>
        <h4>loading...</h4>
      </section>
    )
  }

  if (response.isError) {
    return (
      <section>
        <h4>there was an error...</h4>
      </section>
    )
  }

  const results = response.data.results
  if (results < 1) {
    return (
      <section>
        <h4>no result found...</h4>
      </section>
    )
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className="img"
          />
        )
      })}
    </section>
  )
}

export default Gallery
