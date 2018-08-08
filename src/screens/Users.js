import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const Body = styled.div`
  margin: 80px 120px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
font-size: 3em
font-weight: 300`;

const ActionButton = styled(Button)`
  && {
    padding: 16px;
    color: white;
  }
`;

export default () => (
  <Body>
    <Header>
      <Title>Users</Title>
      <Link to="/newuser">
        <ActionButton variant="contained" color="primary">
          Add new user
        </ActionButton>
      </Link>
    </Header>
  </Body>
);
