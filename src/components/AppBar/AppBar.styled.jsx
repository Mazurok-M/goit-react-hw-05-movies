import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.nav`
  display: flex;
  gap: 20px;
  padding: 30px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 5px 10px rgba(0, 0, 0, 0.2);
`;

export const NavItem = styled(NavLink)`
  color: black;

  &.active {
    color: red;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: red;
  }
`;
