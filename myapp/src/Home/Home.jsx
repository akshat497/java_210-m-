import React, { useState } from 'react'
import "./Home.css"
export default function Home() {
    const [movies, setMovies] = useState([]);

   async function fetchMovies(){
        try{
            let res=await fetch("https://allinoneapi.vercel.app/movies");
            let data=await res.json();
            console.log("data", data);
            setMovies(data);

        }catch(err){
            console.log("error", err);
        }
    }
    fetchMovies();
  return (
    <>
        <div className='movieContainer'>
            {
            movies.map((movie)=>{
                return (
                    <div key={movie.id} className='movie-card'>
                        <h1>{movie.title}</h1>
                        <img src={movie.img} alt={movie.title}  height="300px" width={300}/>
                    </div>
                )
            })
        }
        </div>
    </>
  )
}
