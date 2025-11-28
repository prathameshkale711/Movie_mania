import React from 'react'

const Moviecard = ({key ,movie}) => {
  return (
   <div className='border-transparent h-auto p-4 m-4 rounded-lg shadow-md w-64 hover:shadow-xl hover:border-gray-300 transition-all duration-300'>
        <img src={movie.image}   alt={movie.title} className='w-full h-64 object-cover rounded-md mb-4'/>

      <h1>Title : {movie.title}</h1>
      <p>Description : {movie.description}</p>
      <p>Rating : {movie.rating}</p>
      <p>Genre : {movie.genre}</p>
    </div>
  )
}

export default Moviecard
