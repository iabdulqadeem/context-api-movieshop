import React from "react";
import { useState, createContext } from "react";



export const MovieContext = createContext();




export const MovieProvider = (props)=>{
    const [movies, setMovies] = useState([
        {
            name: "Harry Potter",
            price: "Rs: 2200",
            id: 92
        },
        {
            name: "The Witcher",
            price: "Rs: 2900",
            id: 76
        
        },
        {
            name: "The Shawshank Redemption",
            price: "Rs: 3250",
            id: 1
        
        }
        ]);

        
  return (
    <div>
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    </div>
  )
}