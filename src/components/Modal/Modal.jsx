import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import * as SC from './Modal.styled';
import { getShortAddress, numberWithCommas } from '../../utils';
import CloseIcon from './CloseIcon';

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
    rentalCompany,
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
  const firstStringDetails = [
    shortAddress.country,
    shortAddress.city,
    `Id: ${id}`,
    `Year: ${year}`,
    `Type: ${type}`,
  ].join(' | ');
  const secondStringDetails = [
    `Fuel Consumption: ${fuelConsumption}`,
    `Engine Size: ${engineSize}`,
  ].join(' | ');
  const accessoriesString = accessories.join(' | ');
  const functionalitiesString = functionalities.join(' | ');

  const conditions = [
    ...rentalConditions.split('\n').map(item => item.split(':', 2)),
    ['Mileage', numberWithCommas(mileage)],
    ['Price', rentalPrice],
  ];

  return createPortal(
    <SC.ModalBackdrop onClick={onBackdropClick}>
      <SC.ModalContent>
        <SC.ImageThumb>
          <SC.StyledImage src={imgURL} alt={`${make} ${model}`} />
        </SC.ImageThumb>
        <SC.CarTextWrapper>
          <div>
            <SC.StyledCarInfo>
              {make} <SC.AccentedInfo>{model}</SC.AccentedInfo>, {year}
            </SC.StyledCarInfo>
            <SC.StyledCarDetailsWrapper>
              <SC.StyledCarDetails>{firstStringDetails}</SC.StyledCarDetails>
              <SC.StyledCarDetails>{secondStringDetails}</SC.StyledCarDetails>
            </SC.StyledCarDetailsWrapper>
            <SC.StyledCarDescription>{description}</SC.StyledCarDescription>
          </div>
          <div>
            <SC.AdditionalInfoHeader>Accessories and functionalities:</SC.AdditionalInfoHeader>
            <SC.StyledCarDetailsWrapper>
              <SC.StyledCarDetails>{accessoriesString}</SC.StyledCarDetails>
              <SC.StyledCarDetails>{functionalitiesString}</SC.StyledCarDetails>
            </SC.StyledCarDetailsWrapper>
          </div>
          <div>
            <SC.AdditionalInfoHeader>Rental Conditions: </SC.AdditionalInfoHeader>
            <SC.RentalConditionsList>
              {conditions.map((condition, idx) => (
                <li key={idx}>
                  {condition[1] ? (
                    <SC.RentalConditionsText>
                      {`${condition[0]}: `}
                      <SC.RentalConditionsAccented>{condition[1]}</SC.RentalConditionsAccented>
                    </SC.RentalConditionsText>
                  ) : (
                    <SC.RentalConditionsText>{condition[0]}</SC.RentalConditionsText>
                  )}
                </li>
              ))}
              {/* <SC.RentalConditionsText></SC.RentalConditionsText> */}
            </SC.RentalConditionsList>
          </div>
          <div>
            <SC.StyledButton href="tel:+380730000000">Rental car</SC.StyledButton>
          </div>
        </SC.CarTextWrapper>

        <CloseIcon
          color="rgba(18, 20, 23, 1)"
          hoverColor="rgba(11, 68, 205, 1)"
          size={24}
          onClick={onToggleModal}
        />
        {/* {children} */}
      </SC.ModalContent>
    </SC.ModalBackdrop>,
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
