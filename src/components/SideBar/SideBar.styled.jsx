import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledSideBar = styled.aside`
  width: 240px;
  padding: 8px 0 50px 0;
  min-height: 100vh;
  height: auto;
  background-color: #3470ff;
`;

const StyleMenuWrapper = styled.ul`
  margin: 32px 0 120px 0;
`;

const StyleMenuItem = styled.li`
  padding: 12px 20px;
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;

const StyledLink = styled(NavLink)`
  display: block;
  width: 100%;
  height: 100%;
  color: #fff;
  text-transform: uppercase;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;

  &.active {
    text-decoration: underline;
  }
`;

const Image = styled.img`
  max-width: 208px;
  width: 208px;
`;

export { StyledSideBar, StyleMenuWrapper, StyleMenuItem, StyledLink, Image };
