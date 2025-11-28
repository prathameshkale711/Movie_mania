import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import movieData from '../lib/movie-data.jsx'
import MovieCard from '../Components/Moviecard.jsx'

const Movies = () => {




  return (
    <div>
        
        <div className=' border flex flex-wrap justify-center h-auto mt-10 mx-40'>
            {
                movieData.map((movie)=>
                    <MovieCard key={movie.id} movie={movie} />
                )
            }

        </div>
      
    </div>
  )
}

export default Movies