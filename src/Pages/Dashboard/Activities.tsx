import React from "react";
import styled from "styled-components";
import Push from "./Push";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  height: 100%;
  width: 300px;
  right: 0;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 0 28px 28px 0;
`;

const Notifications = styled.div`
  margin-top: 50px;
  display: flex;
  width: 100%;
`;

const Activities = () => {
  return (
    <Container>
      <h2>Activity</h2>
      <Notifications>
        <Push />
      </Notifications>
    </Container>
  );
};

export default Activities;
