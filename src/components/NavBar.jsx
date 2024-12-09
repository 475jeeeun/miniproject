import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  background-color: #000000;
  color: white;
  padding: 10px 20px;
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

// 기본 NavLink 스타일
const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 0.8rem;

  &:hover {
    color: #00bcd4;
  }
`;


const LoginLink = styled(NavLink)`
  background-color: #2b91ff; 
  padding: 5px 15px;
  border-radius: 5px;
  font-size: 0.8rem;


  
`;


const RegisterLink = styled(NavLink)`
  background-color: #0c902b; 
  padding: 5px 15px;
  border-radius: 5px;
  font-size: 0.8rem;
  

  

`;

const SearchInput = styled.input`
  width: 400px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <LeftSection>
        <NavLink to="/">Logo</NavLink>
        <SearchInput type="text"/>
      </LeftSection>

      
      <RightSection>
        <LoginLink to="/login">로그인</LoginLink>
        <RegisterLink to="/register">회원가입</RegisterLink>
      </RightSection>
    </NavBarContainer>
  );
};

export default NavBar;
