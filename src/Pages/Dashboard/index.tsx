import React from "react";
import SectionContainer from "../../components/SectionContainer";
import Activities from "./Activities";
import styled from "styled-components";
import Card from "./Card";

const Container = styled.main`
  display: flex;
  flex-direction: column;
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
        <Card />
      </Container>
      <Activities />
    </SectionContainer>
  );
};

export default Dashboard;
