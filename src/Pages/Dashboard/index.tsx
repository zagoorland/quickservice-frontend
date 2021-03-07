import React from "react";
import SectionContainer from "../../components/SectionContainer";
import Activities from "./Activities";
import styled from "styled-components";

const Container = styled.main`
  display: flex;
  width: 100%;
  padding: 20px;
`;

const Topbar = styled.div`
  height: 100px;
  width: 100%;
  border-bottom: 1px solid black;
`;

const Dashboard = () => {
  return (
    <SectionContainer>
      <Container>
        <Topbar>welcome</Topbar>
      </Container>
      <Activities />
    </SectionContainer>
  );
};

export default Dashboard;
