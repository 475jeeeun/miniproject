import React, { useState, useEffect } from "react";
import styled from "styled-components";
import movieDetailData from "../movieDetailData.json";


const MovieDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const MoviePoster = styled.img`
  width: 300px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;

  h1 {
    margin: 0;
    font-size: 2rem;
  }

  p {
    margin: 0;
    font-size: 0.8rem;
  }
`;

const GenreList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px 0;

  span {
    background-color: #f0f0f0;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 0.7rem;
  }
`;



const MovieDetail = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // API 요청
    setMovie(movieDetailData);
  }, []);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <MovieDetailContainer>
   
      <MoviePoster
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={`${movie.title} poster`}
      />

  
      <MovieInfo>
        <h1>{movie.title}</h1>
        
        <p><strong>Rating:</strong> {movie.vote_average.toFixed(1)} </p>
        <p><strong>Overview:</strong> {movie.overview}</p>
      </MovieInfo>

    
      <GenreList>
        {movie.genres.map((genre) => (
          <span key={genre.id}>{genre.name}</span>
        ))}
      </GenreList>

     
   
    </MovieDetailContainer>
  );
};

export default MovieDetail;
