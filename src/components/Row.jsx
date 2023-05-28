import React, { useEffect, useState } from 'react'
import './Row.css'
import { Link, NavLink } from 'react-router-dom'
const Row = ({id}) => {

    const api_key = `56137255ea81452ec54d1e656f3be830`

    const [latest, setLatest] = useState('')

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${api_key}&language=en-US&page=1`)
            .then(res => res.json())
            .then(data => setLatest(data))

    }, [])
    console.log(latest);
    
  return (
    <>
    <div className='row'>
      <h2>Similar Movies</h2>
    
      <div className='row-posters'>
        {/* row posters */}
        {latest && latest.results.map(movie => (
            <Link href={`/movie/${movie.id}`} target="_blank" className='link' >
          <img
            key={movie.id}
            className= 'postersm'
            src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} alt={movie.name} />
        </Link>
        ))}
        
      </div>
    </div>

    
    </>
  )
}

export default Row
