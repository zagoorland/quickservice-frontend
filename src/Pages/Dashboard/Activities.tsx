import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  height: 100%;
  width: 200px;
  right: 0;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 0 28px 28px 0;
`;

const Activities = () => {
  return (
    <Container>
      <h2>Activity</h2>
    </Container>
  );
};

export default Activities;
