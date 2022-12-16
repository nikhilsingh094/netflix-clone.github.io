import axios from './LocalAxios';
import React, { useEffect, useState } from 'react'
import './css/row.css'

function Row({title,isLargeRow,fetchURL}) {

    const [movies,setMovies] = useState([]);

    const baseURL = "https://image.tmdb.org/t/p/original";

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchURL)

            setMovies(request.data.results);
            return request
        }

        fetchData();
    },[fetchURL])
  return (
    <div className='row'>
        <h2>{title}</h2>

        <div className='row_poster'>
        {
            movies.map(movie=>{
                return  <img src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                 alt='poster' className = {`rowposter ${isLargeRow && "largeImg"}`} key= {movie.id} />

            })
        }
        </div>
    </div>
  )
}

export default Row