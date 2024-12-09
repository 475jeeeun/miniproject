import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MovieCard from "./components/MovieCard";
import MovieDetail from "./components/MovieDetail";
import movieListData from "./movieListData.json";
import NavBar from "./components/NavBar";

const App = () => {
  const [movies] = useState(movieListData.results);

  return (
    
    <div>
      <NavBar />
      {/* 라우트 설정 */}
      <Routes>
        {/* 메인 페이지: MovieCard 리스트 렌더링 */}
        <Route
          path="/"
          element={
            
            <div style={{ display: "flex", justifyContent:"center",flexWrap: "wrap", gap: "20px" }}>
              
              {movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  posterUrl={movie.poster_path}
                  average={movie.vote_average}
                />
              ))}
            </div>
          }
        />
        
        {/* 상세 페이지: MovieDetail */}
        <Route path="/MovieDetail" element={<MovieDetail />} />
       
        {/* 404 Not Found */}
      </Routes>
    </div>
  );
};

export default App;
