import React from "react";
import styled from "styled-components";
import qs_logo from "../../assets/qs_logo.svg";
import { MdDashboard } from "react-icons/md";

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  z-index: 10;
  height: 100%;
  width: 100px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 28px 0 0 28px;
`;

const Logo = styled.img`
  width: 45px;
  height: 45px;
  margin-bottom: 80px;
`;

const Menu = styled.ul`
  width: 100%;
  padding: 0;
  list-style: none;
`;

const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  pointer-events: auto;
  width: 100%;
  height: 70px;
  & > svg {
    filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.4));
  }
  /* box-shadow: inset 4px 4px 11px 0 rgba(0, 0, 0, 0.2),
    inset -4px -4px 8px 0 rgba(255, 255, 255, 0.8); */
`;

const Sidebar = () => {
  return (
    <Container>
      <Logo src={qs_logo} />
      <Menu>
        <MenuItem>
          <MdDashboard size={30} />
        </MenuItem>
        <MenuItem>
          <MdDashboard size={30} />
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default Sidebar;
