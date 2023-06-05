import React from 'react'
import MoviesList from './MoviesList'
function Movie({name, price}) {
  return (
    <div>
        <h3>{name}</h3>
        <h4>{price}</h4>
    </div>
  )
}

export default Movie
