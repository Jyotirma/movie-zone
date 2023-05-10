import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

import './Card.css'

const Card = ({movie}) => {
    const[isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        setTimeout(() => {
            setIsLoading(false)
        }, 2000);
    }, [])


  return (
    <>
      {
        isLoading ?
        <div className='skeleton'> 
            <SkeletonTheme highlightColor='#444' baseColor='#202020'>
                <Skeleton height={300} duration={2}></Skeleton>
            </SkeletonTheme>
        </div>
        :
        <Link to={`/movie/${movie.id}`}  style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img className='card_img' src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} alt="movie poster" />
                <div className="card_overlay">
                    <div className="card_title">{movie? movie.original_title: ''}</div>
                    <div className="date">{movie? movie.release_date: ''}
                    <span className="poster_rating">{movie?movie.vote_average:""}<i className="fa-solid fa-star"></i>
                    </span> </div>
                    <div className="card_desc">{movie ? movie.overview.slice(0,100)+"..." : ""}</div>
                </div>
            </div>
        </Link>
      }
    </>
  )
}

export default Card
