import React from "react";
import styled from "styled-components";

export const Divider = styled.div`
  height: 100%;
  width: 2px;
  background: black;
  ${(props) => props.opacity && `opacity: ${props.opacity};`}
`;
