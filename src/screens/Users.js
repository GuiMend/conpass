import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Title from "components/UI/Title";
import TopSection from "components/UI/TopSection";
import UserList from "components/UserList";

const Wrapper = styled.div`
  margin: 80px 120px;
`;

const ActionButton = styled(Button)`
  && {
    font-size: 1em;
    padding: 10px;
    color: white;
    text-transform: none;
  }
`;

export default () => (
  <Wrapper>
    <TopSection marginBottom="50">
      <Title title="Users" />
      <Link to="/newuser">
        <ActionButton variant="contained" color="primary">
          Add new user
        </ActionButton>
      </Link>
    </TopSection>
    <UserList />
  </Wrapper>
);
