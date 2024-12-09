import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const NavBarContainer = styled.nav`
  height: 30px;
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
  height: 5px;
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
