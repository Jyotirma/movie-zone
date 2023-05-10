import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';

import './Home.css'
import Row from '../../components/Row';
import Movies from '../../components/Movies/Movies';

const Home = () => {
    const api_key = `56137255ea81452ec54d1e656f3be830`

    const [popular, setPopular] = useState('')

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
            .then(res => res.json())
            .then(data => setPopular(data))

    }, [])

    console.log(popular);
    return (
        <>
        <div className='poster'>
           
            <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false}
            >
                {
                    popular && popular.results.map((movie, i) => (
                        <Link key={i} style={{ textDecoration: 'none', color: 'white' }} to={`/movie/${movie.id}`}>
                            <div className='posterImage'>
                                <img  src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="Movie poster" />
                            </div>
                            <div className='poster_overlay'>
                                <div className='poster_title'>{movie ? movie.original_title : ''} </div>
                                <div className="movie_release">Release Date: {movie ? movie.release_date : ''}
                                 <span className="poster_rating">
                                            {movie ? movie.vote_average :""}
                                            <i className="fa-solid fa-star"></i>{" "}
                                        </span>
                                   </div>
                                <div className='poster_desc'> {movie? movie.overview.slice(0,180)+"..." : ""} </div>
                            </div>
                        </Link>
                    ))
                }
            </Carousel>
        </div>
        <Movies/>
        </>
    )
}

export default Home
