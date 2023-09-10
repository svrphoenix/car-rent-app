import PropTypes from 'prop-types';

import CarCard from '../CarCard/CarCard';
import { StyledList } from './CarList.styled';

const CarList = ({ cars, handleFavoriteClick }) => {
  return (
    <StyledList>
      {cars.map(car => (
        <li key={car.id}>
          <CarCard car={car} handleFavoriteClick={handleFavoriteClick} />
        </li>
      ))}
    </StyledList>
  );
};

CarList.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  handleFavoriteClick: PropTypes.func.isRequired,
};

export default CarList;
