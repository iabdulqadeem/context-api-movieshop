import React, { useState, useContext } from 'react'
import { MovieContext } from './MovieContext';

function AddMovie() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = (e)=> {
        setName(e.target.value);
    }

    const updatePrice = (e)=> {
        setPrice(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setMovies(prevMovies =>[...prevMovies, {name: name, price: price}]);
    }



  return (
    <div>
        <h2>Add New Movie</h2>
      <form className='addMovie' onSubmit={handleSubmit}>
        <label>Name</label>
        <input className='inp1' type='text' name='name' value={name} onChange={updateName}/>
        <label>Price</label>
        <input className='inp2' type='text' name='price' value={price} onChange={updatePrice}/>
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default AddMovie
