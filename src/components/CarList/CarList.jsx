// import PropTypes from 'prop-types';

import CarCard from '../CarCard/CarCard';
import * as SC from './CarList.styled';
import { useLayoutEffect, useRef } from 'react';

const CarList = ({ cars, handleFavoriteClick }) => {
  // const cars = useSelector(selectCars);
  const isMounted = useRef(false);

  // useLayoutEffect(() => {
  //   if (!isMounted.current) {
  //     isMounted.current = true;
  //     return;
  //   }
  //   const bodyHeight = document.body.getBoundingClientRect().height;
  //   window.scrollTo({ top: bodyHeight, behavior: 'smooth' });
  // });

  return (
    <SC.StyledList>
      {cars.map(car => (
        <li key={car.id}>
          <CarCard car={car} handleFavoriteClick={handleFavoriteClick} />
        </li>
      ))}
    </SC.StyledList>
  );
};

// CarList.propTypes = {};

export default CarList;
