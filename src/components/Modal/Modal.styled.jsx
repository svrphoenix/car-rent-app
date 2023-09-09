import { styled } from 'styled-components';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(18, 20, 23, 0.5);
`;

const ModalContent = styled.div`
  overflow: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 541px;
  max-height: 100vh;
  border-radius: 24px;
  padding: 40px;
  background-color: #fff;
`;

const ImageThumb = styled.div`
  width: 100%;
  height: 248px;
  overflow: hidden;
  background-color: #f3f3f2;
  border-radius: 14px;
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CarTextWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledCarHeader = styled.h2`
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 133%;
`;

const AccentedInfo = styled.span`
  color: #3470ff;
`;

const StyledCarDetailsWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StyledCarDetails = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
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
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  height: 18px;
  color: rgba(18, 20, 23, 0.5);
`;

const StyledCarDescription = styled.p`
  margin-top: 8px;
  color: #121417;
  font-size: 14px;
  font-weight: 400;
  line-height: 143%;
`;

const AdditionalInfoHeader = styled.h3`
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 143%;
`;

const RentalConditionsList = styled.div`
  margin-top: 8px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const RentalConditionsText = styled.p`
  padding: 7px 14px;
  border-radius: 35px;
  background-color: #f9f9f9;
  color: #363535;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.24px;
`;

const RentalConditionsAccented = styled.span`
  color: #3470ff;
  font-weight: 600;
`;

const StyledButton = styled.a`
  cursor: pointer;
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  border-radius: 12px;
  background-color: #3470ff;
  color: #fff;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 143%;
  &:hover,
  &:focus {
    background-color: #0b44cd;
    border-color: #0b44cd;
  }
`;

export {
  ModalBackdrop,
  ModalContent,
  ImageThumb,
  StyledImage,
  StyledCarHeader,
  AccentedInfo,
  StyledCarDetails,
  StyledCarDetailsItem,
  StyledCarDetailsText,
  StyledCarDescription,
  AdditionalInfoHeader,
  RentalConditionsList,
  RentalConditionsText,
  RentalConditionsAccented,
  CarTextWrapper,
  StyledCarDetailsWrapper,
  StyledButton,
};
