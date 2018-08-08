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
    color: ${props => props.textColor};
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

export default ({ name, date, avatar }) => (
  <Card>
    <UserInfo>
      <CustomAvatar size="50" src={avatar}>
        {!avatar && getInitials(name)}
      </CustomAvatar>
      <UserText variant="title">{name}</UserText>
    </UserInfo>

    <UserText variant="title" textColor="gray">
      {date && moment(date).format("LLL")}
    </UserText>
  </Card>
);
