import styled from "styled-components";

export default styled.a`
  width: ${props => props.size}px;
  height: ${props => props.size}px;

  && svg {
    fill: ${props => props.fill};
    width: ${props => props.size}px;
    height: ${props => props.size}px;
  }
`;
