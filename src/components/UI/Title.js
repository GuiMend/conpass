import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const Title = styled(Typography)`
  && {
    font-weight: 300;
  }
`;

export default ({ title }) => <Title variant="display3">{title}</Title>;
