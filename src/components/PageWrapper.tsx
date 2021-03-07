import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 20px;
  padding-top: 100px;
  background: #d3cce3; /* fallback for old browsers */
  background: linear-gradient(
    120deg,
    #e9e4f0,
    #eeecf1
  ); /* Chrome 10-25, Safari 5.1-6 */
`;

interface IWrapper {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: IWrapper) => (
  <StyledWrapper>{children}</StyledWrapper>
);
export default PageWrapper;
