// App.js
import React, { useEffect, useState } from "react";
import { Routes, Route, data } from "react-router-dom";
import MovieCard from "./components/MovieCard";
import MovieDetail from "./components/MovieDetail";
import axios from "axios";
import Layout from "./components/Layout";

const App = () => {
  const [movies,setMovies] = useState([]);
 
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjZiZDk0MGM1OWE2ZjZiMGYxZGI5ZjIwMjc4Y2Y4ZCIsIm5iZiI6MTczMjg2NzYwNi4wODUsInN1YiI6IjY3NDk3NjE2MDkzNmI2ZTRmYjlmOTkwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k6tHlEdcwCyv90Ux-hwXm2z3dd4zNNDX5c6npZy5icY'
    }
  };
  const filteredMovies = movies.filter(
    (movie) => !movie.adult
  );
  
  
  useEffect(() => { axios
    .request(options)
    .then((res)=>{setMovies(res.data.results)})
    .catch(err => console.error(err))
   
  }, [])

  

  return (
    
    <Routes>
      {/* Layout이 공통 레이아웃을 담당 */}
      <Route path="/" element={<Layout />}>
        {/* 메인 페이지 */}
        <Route
          index
          element={ 
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
              {filteredMovies?.map((movie) => (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  posterUrl={movie.poster_path}
                  average={movie.vote_average}
                />
              ))}
            </div>
          }
        />

        {/* 상세 페이지 */}
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Route>
    </Routes>
  );
};

export default App;
