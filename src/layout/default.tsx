import React, { useState } from "react";
// Outlet
import { NavigateFunction, Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  :root {
    --parmary-color: #557086;
  }
`;
const LayoutBase = styled.div`
  --rv-tabbar-item-icon-size: 1.8rem;
`;

const DefaultLayout: React.FC<{}> = (props) => {
  const [routeProps, setRouteProps] = React.useState({});

  return (
    <LayoutBase>
      {/* 页面头部 */}
      {/* 路由内容 */}
      <GlobalStyle />
      <Outlet context={[routeProps, setRouteProps]} />
      {/* 页面尾部 */}
    </LayoutBase>
  );
};

export default DefaultLayout;
