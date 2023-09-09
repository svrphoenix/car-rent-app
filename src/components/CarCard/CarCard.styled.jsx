import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */

  width: 274px;
  height: 426px;
  border: 0 none;
`;

const ImageThumb = styled.div`
  width: 100%;
  height: 268px;
  overflow: hidden;
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(18, 20, 23, 0.5) 2.5%, rgba(18, 20, 23, 0) 41.07%),
    #f3f3f2;
  position: relative;
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  display: flex;
  margin-top: 8px;
  flex-direction: column;
  gap: 4px;
`;

const CarHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
`;

const CarInfoStyles = `
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;`;

const StyledCarHeader = styled.h2`
  ${CarInfoStyles}
`;

const StyledCarPrice = styled.p`
  ${CarInfoStyles}
`;

const AccentedInfo = styled.span`
  color: #3470ff;
`;

const StyledCarDetails = styled.ul`
  display: flex;
  gap: 16px;
`;

const StyledCarDetailsItem = styled.li`
  position: relative;
  display: inline-flex;
  align-items: center;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 0;
    right: -8px;
    width: 1px;
    background-color: rgba(18, 20, 23, 0.1);
    height: 100%;
  }
`;

const StyledCarDetailsText = styled.p`
  height: 18px;
  overflow: hidden;
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  color: rgba(18, 20, 23, 0.5);
`;

const StyledButton = styled.button`
  cursor: pointer;
  margin-top: auto;
  width: 100%;
  padding: 12px 0;
  border-radius: 12px;
  background-color: #3470ff;
  color: #fff;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  &:hover,
  &:focus {
    background-color: #0b44cd;
    border-color: #0b44cd;
  }
`;

const StyledFavoriteIcon = styled.svg`
  cursor: pointer;
  position: absolute;
  right: 14px;
  top: 14px;
  width: 18px;
  height: 18px;
  fill: rgba(255, 255, 255, 0.8);
  /* margin-top: auto;
  width: 100%;
  padding: 12px 0;
  border-radius: 12px;
  background-color: #3470ff;
  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px; /* 142.857% 
  &:hover,
  &:focus {
    background-color: #0b44cd;
  } */
`;

export {
  CardWrapper,
  ImageThumb,
  StyledImage,
  TextWrapper,
  StyledCarHeader,
  StyledCarPrice,
  AccentedInfo,
  StyledCarDetails,
  StyledCarDetailsItem,
  StyledCarDetailsText,
  StyledButton,
  CarHeaderWrapper,
  StyledFavoriteIcon,
};
