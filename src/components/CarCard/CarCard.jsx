import PropTypes from 'prop-types';

import useModalToggle from '../../hooks/useModalToggle';
import {
  CardWrapper,
  ImageThumb,
  StyledImage,
  StyledCarDetails,
  TextWrapper,
  StyledCarHeader,
  StyledCarPrice,
  CarHeaderWrapper,
  StyledButton,
  AccentedInfo,
  StyledCarDetailsText,
  StyledCarDetailsItem,
} from './CarCard.styled';
import HeartIcon from '../HeartIcon/HeartIcon';
import Modal from '../Modal/Modal';
import { getShortAddress, numberWithCommas } from '../../utils';

const CarCard = ({ car, handleFavoriteClick }) => {
  const {
    id,
    favorite,
    img: imgURL,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    accessories,
  } = car;

  const { showModal, onToggleModal } = useModalToggle();
  const shortAddress = getShortAddress(address);
  const detailsFirstRow = [shortAddress.country, shortAddress.city, rentalCompany];
  const detailsSecondRow = [type, make, numberWithCommas(mileage), accessories[0]];

  return (
    <>
      <CardWrapper>
        <ImageThumb>
          <StyledImage src={imgURL} alt={`${make} ${model}`} />
          <HeartIcon
            color="#ffffffcc"
            activeColor="#3470ff"
            size={24}
            handleClick={() => handleFavoriteClick(id)}
            isActive={favorite}
          />
        </ImageThumb>
        <CarHeaderWrapper>
          <StyledCarHeader>
            {`${make} `} <AccentedInfo>{model}</AccentedInfo>
            {`, ${year}`}
          </StyledCarHeader>
          <StyledCarPrice>{rentalPrice}</StyledCarPrice>
        </CarHeaderWrapper>
        <TextWrapper>
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
        </TextWrapper>
        <StyledButton type="button" onClick={onToggleModal}>
          Learn more
        </StyledButton>
      </CardWrapper>
      {showModal && <Modal car={car} onToggleModal={onToggleModal}></Modal>}
    </>
  );
};

CarCard.propTypes = {
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
  }).isRequired,
  handleFavoriteClick: PropTypes.func.isRequired,
};

export default CarCard;
