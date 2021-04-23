import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Push from "./Push";
import firebase from "../../firebase";

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
  flex-direction: column;
  width: 100%;
  overflow: scroll;
`;

const Activities = () => {
  const [nots, setNots] = useState([]);
  const col = firebase.firestore().collection("employeeNotifications");

  useEffect(() => {
    const items: any = [];
    col.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      console.log(items);
      setNots(items);
    });
  }, []);

  console.log(nots);

  return (
    <Container>
      <h2>Activity</h2>
      <Notifications>
        {nots.length && nots.map((item) => <Push content={nots} />)}
      </Notifications>
    </Container>
  );
};

export default Activities;
