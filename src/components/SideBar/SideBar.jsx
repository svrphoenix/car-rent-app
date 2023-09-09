import { SideBarWrapper, StyledLink, StyleMenuItem, StyleMenuWrapper } from './SideBar.styled';

const SideBar = () => {
  return (
    <SideBarWrapper>
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
      <img src="/car-picture.png" alt="Car picture" style={{ marginTop: '120px' }} />
    </SideBarWrapper>
  );
};

export default SideBar;
