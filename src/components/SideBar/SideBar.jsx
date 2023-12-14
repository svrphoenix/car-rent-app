import {
  StyledSideBar,
  StyledLink,
  StyleMenuItem,
  StyleMenuWrapper,
  Image,
  Logo,
} from './SideBar.styled';
import PhoneLink from '../PhoneLink/PhoneLink';
import { callBtnLabel, menuItems } from '../../content';

const SideBar = () => {
  return (
    <StyledSideBar $hasVerticalScrollbar={window.innerHeight < 580}>
      <nav>
        <Logo href="/" aria-label="logo">
          <Image src="./images/car-rent-logo.png" alt="Logo" />
        </Logo>
        <StyleMenuWrapper>
          <StyleMenuItem>
            <StyledLink to="/">{menuItems[0].value}</StyledLink>
          </StyleMenuItem>
          <StyleMenuItem>
            <StyledLink to="/catalog">{menuItems[1].value}</StyledLink>
          </StyleMenuItem>
          <StyleMenuItem>
            <StyledLink to="/favorites">{menuItems[2].value}</StyledLink>
          </StyleMenuItem>
        </StyleMenuWrapper>
      </nav>
      <div style={{ textAlign: 'center' }}>
        <PhoneLink number="+380730000000">{callBtnLabel}</PhoneLink>
      </div>
    </StyledSideBar>
  );
};

export default SideBar;
