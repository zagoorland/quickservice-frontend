import React from "react";
import PageWrapper from "../PageWrapper";
import styled from "styled-components";
import Sidebar from "./Sidebar";

const StyledSection = styled.div`
  display: flex;
  max-width: 1200px;
  height: 700px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border-radius: 28px;

  &:before {
    pointer-events: none;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 28px;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0px;
    z-index: 200;
  }
`;

interface ISection {
  children?: React.ReactNode;
}

const SectionContainer = ({ children }: ISection) => {
  return (
    <PageWrapper>
      <StyledSection>
        <Sidebar />
        {children}
      </StyledSection>
    </PageWrapper>
  );
};

export default SectionContainer;
