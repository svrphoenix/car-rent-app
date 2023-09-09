import PropTypes from 'prop-types';
import { useLayoutEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import CarCard from '../CarCard/CarCard';
import { StyledList } from './CarList.styled';
import { selectFilter, selectPage } from '../../redux/selectors';

const CarList = ({ cars, handleFavoriteClick }) => {
  // const filter = useSelector(selectFilter);
  const page = useSelector(selectPage);
  const isMounted = useRef(false);

  useLayoutEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    if (page > 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  });

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
