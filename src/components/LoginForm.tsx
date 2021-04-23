import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { signup } from "../services/authMethods";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const StyledContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  max-height: 100%;
`;

const LoginForm = () => {
  const [data, setData] = useState({ login: "", password: "" });
  const user = useContext(AuthContext);

  const history = useHistory();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await signup(data.login, data.password);
    response && history.push("/");
  };

  return (
    <StyledContainer>
      <form onSubmit={handleSubmit}>
        <input
          name="login"
          onChange={(e) => setData({ ...data, login: e.target.value })}
        />
        <input
          name="password"
          type="password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit">LOGIN</button>
      </form>
    </StyledContainer>
  );
};

export default LoginForm;
