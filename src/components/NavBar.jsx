// NavBar.js
import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

// 스타일드 컴포넌트
const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #000000;
  color: white;
  padding: 10px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 0.8rem;
  margin: 0 15px;
 
  

  &:hover {
    color: #00bcd4;
  }
`;

const SearchInput = styled.input`
  width: 200px;
  padding: 5px;
  border: none;
  border-top: 0px;
  border-radius: 10px;
  margin-left: 10px;
`


const NavBar = () => {
  return (
   
    <NavBarContainer>
      
      <NavLink to="/">Home</NavLink>
     <SearchInput type="text"  />
      <NavLink to="/login">로그인</NavLink>
      <NavLink to="/register">회원가입</NavLink>
   
     

    
    </NavBarContainer>
  );
};

export default NavBar;
