import React from "react";
import styled from "styled-components";
import logo from "img/conpass.png";

const Header = styled.div`
display: flex
justify-content: center
height: 150px
align-items: center;
background: white;`;

export default () => (
  <Header>
    <img src={logo} alt="Conpass" height="45px" />
  </Header>
);
