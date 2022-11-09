import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  margin-bottom: 30px;
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

export const TrendingList = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5px;
`;
