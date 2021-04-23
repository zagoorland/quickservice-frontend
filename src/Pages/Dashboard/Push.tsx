import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100px;
  border: 1px solid black;
`;

interface IPush {
  content: any;
}

const Push = ({ content }: IPush) => {
  console.log(content);
  return (
    <Container>
      {content.userName} {content.title} {content.statusTitle} na{" "}
      {content.changedStatusTitle}
    </Container>
  );
};

export default Push;
