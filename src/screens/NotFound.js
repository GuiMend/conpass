import React from "react";
import styled from "styled-components";

const Body = styled.div`
  background: #12c1c7;
  color: #fff;
  font-family: "Open Sans", sans-serif;
  overflow: hidden;
  text-align: center;
  display: block;
  position: relative;
  padding-bottom: 80px;
`;

const Title = styled.div`
  font-size: 220px;
  position: relative;
  display: inline-block;
  z-index: 2;
  height: 250px;
  letter-spacing: 15px;
`;

const Subtitle = styled.div`
  text-align: center;
  display: block;
  position: relative;
  letter-spacing: 12px;
  font-size: 4em;
  line-height: 80%;
`;

const Subtitle2 = styled.div`
  text-align: center;
  display: block;
  position: relative;
  font-size: 20px;
  margin: 10px 0;
`;

const Button = styled.a`
  background-color: rgb(255, 255, 255);
  position: relative;
  display: inline-block;
  width: 358px;
  padding: 5px;
  z-index: 5;
  font-size: 25px;
  margin: 0 auto;
  color: #12c1c7;
  text-decoration: none;
  margin-right: 10px;
`;

const Divider = styled.hr`
  padding: 0;
  border: none;
  border-top: 5px solid #fff;
  color: #fff;
  text-align: center;
  margin: 0px auto;
  width: 420px;
  height: 10px;
  z-index: -10;
`;

export default () => (
  <Body>
    <Title>404</Title>
    <Divider />
    <Subtitle>THE PAGE</Subtitle>
    <Subtitle2>WAS NOT FOUND</Subtitle2>
    <Button href="/users">BACK TO CONPASS</Button>
  </Body>
);
