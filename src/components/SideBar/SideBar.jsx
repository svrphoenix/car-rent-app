import {
  StyledSideBar,
  StyledLink,
  StyleMenuItem,
  StyleMenuWrapper,
  ImageThumb,
  Image,
} from './SideBar.styled';
import logoImg from '/assets/car-rent-logo.png';
import carImg from '/assets/car-picture.png';
import PhoneLink from '../PhoneLink/PhoneLink';

const SideBar = () => {
  return (
    <StyledSideBar>
      <ImageThumb>
        <Image src={logoImg} alt="Logo" />
      </ImageThumb>
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
      <div style={{ textAlign: 'center' }}>
        <PhoneLink number="+380730000000">Click to call us</PhoneLink>
        <ImageThumb>
          <Image src={carImg} alt="Car picture" style={{ transform: 'rotate(-10deg)' }} />
        </ImageThumb>
      </div>
    </StyledSideBar>
  );
};

export default SideBar;
