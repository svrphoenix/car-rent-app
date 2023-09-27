import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledSideBar = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 240px;
  padding: 8px 0;
  min-height: 100vh;
  height: auto;
  background-color: #3470ff;
  position: fixed;
`;

const StyleMenuWrapper = styled.ul`
  margin: 32px 0;
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

const ImageThumb = styled.div`
  width: auto;
  height: auto;
`;

const Image = styled.img`
  max-width: auto;
  margin: 0 auto;
`;

export { StyledSideBar, StyleMenuWrapper, StyleMenuItem, StyledLink, ImageThumb, Image };
