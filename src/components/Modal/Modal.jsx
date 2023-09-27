import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import {
  ModalBackdrop,
  ModalContent,
  ImageThumb,
  StyledImage,
  AccentedInfo,
  StyledCarDetails,
  StyledCarDescription,
  AdditionalInfoHeader,
  RentalConditionsList,
  RentalConditionsText,
  RentalConditionsAccented,
  CarTextWrapper,
  StyledCarDetailsWrapper,
  StyledCarHeader,
  StyledCarDetailsItem,
  StyledCarDetailsText,
} from './Modal.styled';
import { getShortAddress, numberWithCommas } from '../../utils';
import CloseIcon from './CloseIcon';
import PhoneLink from '../PhoneLink/PhoneLink';

const Modal = ({ car, onToggleModal }) => {
  const {
    id,
    img: imgURL,
    make,
    model,
    year,
    fuelConsumption,
    engineSize,
    description,
    rentalPrice,
    address,
    type,
    mileage,
    accessories,
    functionalities,
    rentalConditions,
  } = car;

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onToggleModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onToggleModal]);

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onToggleModal();
    }
  };

  const shortAddress = getShortAddress(address);

  const detailsFirstRow = [
    shortAddress.country,
    shortAddress.city,
    `Id: ${id}`,
    `Year: ${year}`,
    `Type: ${type}`,
  ];

  const detailsSecondRow = [`Fuel Consumption: ${fuelConsumption}`, `Engine Size: ${engineSize}`];

  const conditions = [
    ...rentalConditions.split('\n').map(item => item.split(':', 2)),
    ['Mileage', numberWithCommas(mileage)],
    ['Price', rentalPrice],
  ];

  return createPortal(
    <ModalBackdrop onClick={onBackdropClick}>
      <ModalContent>
        <ImageThumb>
          <StyledImage src={imgURL} alt={`${make} ${model}`} />
        </ImageThumb>
        <CarTextWrapper>
          <div>
            <StyledCarHeader>
              {make} <AccentedInfo>{model}</AccentedInfo>, {year}
            </StyledCarHeader>
            <StyledCarDetailsWrapper>
              <StyledCarDetails>
                {detailsFirstRow.map((item, idx) => (
                  <StyledCarDetailsItem key={idx}>
                    <StyledCarDetailsText>{item}</StyledCarDetailsText>
                  </StyledCarDetailsItem>
                ))}
              </StyledCarDetails>
              <StyledCarDetails>
                {detailsSecondRow.map((item, idx) => (
                  <StyledCarDetailsItem key={idx}>
                    <StyledCarDetailsText>{item}</StyledCarDetailsText>
                  </StyledCarDetailsItem>
                ))}
              </StyledCarDetails>
            </StyledCarDetailsWrapper>
            <StyledCarDescription>{description}</StyledCarDescription>
          </div>
          <div>
            <AdditionalInfoHeader>Accessories and functionalities:</AdditionalInfoHeader>
            <StyledCarDetailsWrapper>
              <StyledCarDetails>
                {accessories.map((item, idx) => (
                  <StyledCarDetailsItem key={idx}>
                    <StyledCarDetailsText>{item}</StyledCarDetailsText>
                  </StyledCarDetailsItem>
                ))}
              </StyledCarDetails>
              <StyledCarDetails>
                {functionalities.map((item, idx) => (
                  <StyledCarDetailsItem key={idx}>
                    <StyledCarDetailsText>{item}</StyledCarDetailsText>
                  </StyledCarDetailsItem>
                ))}
              </StyledCarDetails>
            </StyledCarDetailsWrapper>
          </div>
          <div>
            <AdditionalInfoHeader>Rental Conditions: </AdditionalInfoHeader>
            <RentalConditionsList>
              {conditions.map((condition, idx) => (
                <li key={idx}>
                  {condition[1] ? (
                    <RentalConditionsText>
                      {`${condition[0]}: `}
                      <RentalConditionsAccented>{condition[1]}</RentalConditionsAccented>
                    </RentalConditionsText>
                  ) : (
                    <RentalConditionsText>{condition[0]}</RentalConditionsText>
                  )}
                </li>
              ))}
            </RentalConditionsList>
          </div>
          <div>
            <PhoneLink number="+380730000000">Rental car</PhoneLink>
          </div>
        </CarTextWrapper>
        <CloseIcon
          color="rgba(18, 20, 23, 1)"
          hoverColor="rgba(11, 68, 205, 1)"
          size={24}
          onClick={onToggleModal}
        />
      </ModalContent>
    </ModalBackdrop>,
    document.querySelector('#modal-root')
  );
};

Modal.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    favorite: PropTypes.bool,
    img: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
    accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
    functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
    rentalConditions: PropTypes.string.isRequired,
  }),
  onToggleModal: PropTypes.func.isRequired,
};

export default Modal;
