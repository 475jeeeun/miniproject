import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"


const MovieCard = ({id, posterUrl, title, average }) => {
  const navigate = useNavigate(); // 상세 페이지 이동을 위한 네비게이션 객체
  
   return (
    <Container>
    <Card onClick={() => navigate(`/movie/${id}`)}>
      <Poster
        src={`https://image.tmdb.org/t/p/w500${posterUrl}`}
        alt={`${title} poster`}
        />


       
      <Title>{title}</Title>
      <Rating>평점: {average.toFixed(1)}</Rating>
     
     
    </Card>
    </Container>
  );
};


export default MovieCard;



// 스타일 정의

const Container = styled.div`
 display: flex;
  flex-direction: row; 
  justify-content: center; 
  flex-wrap: wrap; 
  margin-top: 30px;
  

`


const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 
  width: 200px;
  height: 320px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`;

const Poster = styled.img`
display: flex;
 flex-wrap: wrap;
  width: 100%;
  height: 70%;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin: 5px 0;
  color: #333;
`;

const Rating = styled.span`
  font-size: 0.9rem;
  color: #656565;
`;
