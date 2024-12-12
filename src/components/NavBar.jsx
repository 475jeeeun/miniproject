import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import useDebounce from "./useDebounce";
import MovieCard from "./MovieCard";

const API_KEY = import.meta.env.VITE_API_KEY_SEARCH;
const BASE_URL = "https://api.themoviedb.org/3";

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태
  const [movies, setMovies] = useState([]); // 검색 결과 상태
  const debouncedSearchTerm = useDebounce(searchTerm, 100); // 지연 시간 500ms 적용

  // 검색어가 변경되면 TMDb API 호출
  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchMovies(debouncedSearchTerm);
    } else {
      setMovies([]);
    }
  }, [debouncedSearchTerm]);

  // TMDb API를 호출하여 영화 검색
  const fetchMovies = async (query) => {
    try {
      const response = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
          api_key: API_KEY,
          query,
        },
      });
      setMovies(response.data.results || []);
    } catch (error) {
      console.error("영화 검색 중 오류 발생:", error);
    }
  };
console.log(setSearchTerm)
  return (
    <div>
      <NavBarContainer>
        <LeftSection>
          <NavLink to="/">Logo</NavLink>
          <SearchInput
            type="text"
           
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </LeftSection>
        <RightSection>
          <LoginLink to="/login">로그인</LoginLink>
          <RegisterLink to="/register">회원가입</RegisterLink>
        </RightSection>
      </NavBarContainer>

      {/* 검색 결과를 MovieCard로 렌더링 */}
      <SearchResults>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterUrl={movie.poster_path}
            average={movie.vote_average}
          />
        ))}
      </SearchResults>
    </div>
  );
};

export default NavBar;

// 스타일 정의
const NavBarContainer = styled.nav`
  height: 50px;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;
  color: white;
  z-index: 1000;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 0.8rem;

  &:hover {
    color: #00bcd4;
  }
`;

const LoginLink = styled(NavLink)`
  background: linear-gradient(45deg, #7f0098, #d500f9);
  width: 50px;
  height: 20px;
  border-radius: 5px;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  line-height: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;

const RegisterLink = styled(NavLink)`
  background: linear-gradient(45deg, #7f0098, #d500f9);
  width: 50px;
  height: 20px;
  border-radius: 5px;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  line-height: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;

const SearchInput = styled.input`
  width: 200px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
`;

const SearchResults = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 60px;
  gap: 20px;
  padding: 20px;
`;
