import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: 0 15px;
  margin-top: 20px;
`;

export const Box = styled.div`
  padding: 0 15px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 18px;
  color: #191992;
`;

export const NavItem = styled(NavLink)`
  color: #191992;

  &.active {
    color: red;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: red;
  }
`;

export const Back = styled(Link)`
  padding: 5px 10px;
  font-weight: 600;
  text-decoration: none;

  color: black;
  background-color: #b64c51;
`;

export const BackBox = styled.div`
  margin-top: 20px;
  margin-left: 15px;
  /* width: 50px; */
`;
