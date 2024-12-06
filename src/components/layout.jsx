      
      
// Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <LayoutContainer>
      <NavBar /> {/* 공통 네비게이션 바 */}
      <Main>
        <Outlet /> {/* 자식 라우트의 콘텐츠가 렌더링되는 위치 */}
      </Main>
    </LayoutContainer>
  );
};

export default Layout;

// 스타일 정의
const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1; /* 콘텐츠 영역을 화면에 꽉 채우기 */
  padding: 20px;
  background-color: #f5f5f5;
`;
