import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar.jsx'
import movieData from '../lib/movie-data.jsx'
import MovieCard from '../Components/Moviecard.jsx'

const Tvshows = () => {

 const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        
        const fetchMovie = async () => {
            const response = await fetch('https://api.tvmaze.com/shows?page=2');
            const movies = await response.json();
            setMovieData(movies);
        }
        fetchMovie();
        
    }, []);



  return (
    <div>
        <h1>pkkkkkk</h1>
        
        <div className='  text-white flex flex-wrap justify-center h-auto mt-10 mx-40'>
            {
                movieData.map((movie)=>
                    <MovieCard key={movie.id} movie={movie} />
                )
            }

        </div>
      
    </div>
  )
}

export default Tvshows