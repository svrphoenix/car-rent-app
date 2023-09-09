import { StyledSideBar, StyledLink, StyleMenuItem, StyleMenuWrapper } from './SideBar.styled';

const SideBar = () => {
  return (
    <StyledSideBar>
      <img src="/car-rent-logo.png" alt="Logo" />
      <nav>
        <StyleMenuWrapper>
          <StyleMenuItem>
            <StyledLink to="/">Home</StyledLink>
          </StyleMenuItem>
          <StyleMenuItem>
            <StyledLink to="/catalog">Catalog</StyledLink>
          </StyleMenuItem>
          <StyleMenuItem>
            <StyledLink to="/favorites">Favorites</StyledLink>
          </StyleMenuItem>
        </StyleMenuWrapper>
      </nav>
      <img src="/car-picture.png" alt="Car picture" style={{ transform: 'rotate(-10deg)' }} />
    </StyledSideBar>
  );
};

export default SideBar;
