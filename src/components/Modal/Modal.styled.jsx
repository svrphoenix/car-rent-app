import { styled } from 'styled-components';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(18, 20, 23, 0.5);
  /* z-index: 5; */
`;

const ModalContent = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* gap: 24px; */
  overflow: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 541px;
  max-height: 100vh;
  border-radius: 24px;
  /* border: 1px solid var(--modal-border-solid-color); */
  box-shadow: var(--modal-box-shadow-color);
  padding: 40px;
  background-color: #fff;
  /* @media screen and (min-width: 768px) {
    width: 468px;
    padding: 32px;
  } */
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
  /* object-position: center; //можливо center */
`;

const CarTextWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledCarInfo = styled.h2`
  color: #121417;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px; /* 150% */
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

const StyledCarDetails = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
`;

const StyledCarDescription = styled.p`
  margin-top: 8px;
  color: #121417;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`;

const AdditionalInfoHeader = styled.h3`
  color: #121417;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
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
  font-style: normal;
  /* font-weight: 400; */
  line-height: 18px; /* 150% */
  letter-spacing: -0.24px;
`;

const RentalConditionsAccented = styled.span`
  color: #3470ff;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.24px;
`;

const StyledButton = styled.a`
  cursor: pointer;
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  /* align-items: center;
   */
  /* margin-top: auto; */
  /* width: 100%; */
  /* padding: 12px 0; */
  border-radius: 12px;
  background-color: #3470ff;
  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
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
  StyledCarInfo,
  AccentedInfo,
  StyledCarDetails,
  StyledCarDescription,
  AdditionalInfoHeader,
  RentalConditionsList,
  RentalConditionsText,
  RentalConditionsAccented,
  CarTextWrapper,
  StyledCarDetailsWrapper,
  StyledButton,
};
