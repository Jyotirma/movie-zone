import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Card/Card'
import './Movies.css'

const Movies = () => {
    const api_key = `56137255ea81452ec54d1e656f3be830`

    const {type} = useParams()

    const [movieList, setMovieList] = useState('')

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "now_playing"}?api_key=${api_key}&language=en-US&page=1`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

    console.log( "movie list:" +movieList);
    useEffect(()=>{
        getData()
    }, [])

    useEffect(()=>{
        getData()
    }, [type])


  return (
    <div className='list'>
      <h2 className='title'>{(type? type : "trending").toUpperCase()}</h2>
      <div className="movie_cards">
        {
             movieList && movieList.map(movie =>(
                <Card movie={movie}/>
            ))
        }
      </div>
    </div>
  )
}

export default Movies
