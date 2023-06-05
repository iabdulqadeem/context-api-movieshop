import React from 'react'
import { useContext } from 'react'
import { MovieContext } from './MovieContext'

function Nav() {

    const [movies, setMovies] = useContext(MovieContext)

  return (
    <div className='Navbar'>
      <h2>MovieShop</h2>
      <h3>Available Movies: {movies.length}</h3>
    </div>
  )
}

export default Nav
