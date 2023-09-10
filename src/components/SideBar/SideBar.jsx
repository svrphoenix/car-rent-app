import { StyledSideBar, StyledLink, StyleMenuItem, StyleMenuWrapper } from './SideBar.styled';
import logoImg from '/assets/car-rent-logo.png';
import carImg from '/assets/car-picture.png';

const SideBar = () => {
  return (
    <StyledSideBar>
      <img src={logoImg} alt="Logo" />
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
      <img src={carImg} alt="Car picture" style={{ transform: 'rotate(-10deg)' }} />
    </StyledSideBar>
  );
};

export default SideBar;
