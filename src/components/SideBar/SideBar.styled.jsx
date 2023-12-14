import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledSideBar = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  width: 240px;
  padding: 8px 8px 32px 8px;
  height: 100vh;
  overflow-y: ${props => (props.$hasVerticalScrollbar ? 'auto' : 'hidden')};
  overflow-x: hidden;
  background-color: #3470ff;
  background-image: url('./images/car-picture.png');
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 85%;
  position: fixed;
`;

const Logo = styled.a`
  margin-bottom: 32px;
`;

const StyleMenuWrapper = styled.ul`
  margin-bottom: 32px;
`;

const StyleMenuItem = styled.li``;

const StyledLink = styled(NavLink)`
  width: 100%;
  height: 100%;
  padding: 8px 20px;

  color: #fff;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  line-height: calc(20 / 16);
  transition: background-color 0.5s ease;

  &.active {
    text-decoration: underline;
  }

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;

const Image = styled.img`
  margin: 0 auto;
`;

export { StyledSideBar, Logo, StyleMenuWrapper, StyleMenuItem, StyledLink, Image };
