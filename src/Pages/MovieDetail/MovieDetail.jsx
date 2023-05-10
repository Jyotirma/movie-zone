import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import './MovieDetail.css'
import Row from '../../components/Row'

const MovieDetail = () => {

    const api_key = `56137255ea81452ec54d1e656f3be830`

    const {id} = useParams()

    const [movie, setMovie] = useState('')

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }
    
    useEffect(()=>{
        getData()
    }, [])

  return (
    <div className='movie'>
      <div className="intro">
        <img className='intro_img' src={`https://image.tmdb.org/t/p/original${movie ? movie.backdrop_path : ""}`} alt="" />
        <div className="mdetail">
            <div className="left">
                <img className='mposter' src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} alt="" />
            </div>
            <div className="right">
                <div className="rightTop">
                    <div className="mname"> {movie? movie.original_title : ''} </div>
                    <div className="mtagline"> {movie? movie.tagline : ''} </div>
                    <div className="mrating"> {movie? movie.vote_average : ''} <i className="fa-solid fa-star"></i>
                    <span className='vote'>
                        {movie? '(' + movie.vote_count + ') votes' : ''}
                    </span>
                     </div>
                     <div className="runtime"> {movie? movie.runtime + "mins" : ''} </div>
                     <div className="mdate"> Release Date:  {movie? movie.release_date : ''} </div>

                     <div className="genres"> {movie && movie.genres  ? 
                        movie.genres.map(g =>(
                            <span className='genre' id='g.id'>{g.name}</span>
                        )) : ''
                    } </div>
                </div>
                <div className="rightBottom">
                    <div className="detail">
                        <h2>Synopsis</h2>
                        {movie? movie.overview : ''}
                    </div>
                </div>
            </div>
            </div>
            {/* <div className="production">
                <h3>Production Company</h3>
                {
                    movie && movie.production_companies && movie.production_companies.map(c =>(
                        <>
                        {
                            c.logo_path &&
                            <span className='pimage'>
                                <img src= {"https://image.tmdb.org/t/p/original" + c.logo_path}alt="" />
                                <span>{c.name}</span>
                            </span>
                        }
                        </>
                    ))
                }
            </div> */}
        
      </div>
      <Row id={id}/>
    </div>
  )
}

export default MovieDetail
