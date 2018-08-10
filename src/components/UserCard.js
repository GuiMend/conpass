import React from "react";
import Avatar from "@material-ui/core/Avatar";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import { getInitials } from "utils/helper";

const Card = styled.div`
  margin: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserText = styled(Typography)`
  && {
    font-weight: 400;
    color: ${props => props.text_color};
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const CustomAvatar = styled(Avatar)`
  && {
    height: ${props => props.size}px;
    width: ${props => props.size}px;
    margin-right: 16px;
  }
`;

export default ({ firstName, lastName, created_at, profilePhoto }) => (
  <Card>
    <UserInfo>
      <CustomAvatar size="50" src={profilePhoto}>
        {!profilePhoto && getInitials(`${firstName} ${lastName}`)}
      </CustomAvatar>
      <UserText variant="title">{`${firstName} ${lastName}`}</UserText>
    </UserInfo>

    <UserText variant="title" text_color="gray">
      {created_at && moment(created_at).format("LLL")}
    </UserText>
  </Card>
);
