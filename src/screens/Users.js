import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Title from "components/UI/Title";
import TopSection from "components/UI/TopSection";
import UserList from "components/UserList";
import ActionButton from "components/UI/ActionButton";

const Wrapper = styled.div`
  margin: 80px 120px;
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
