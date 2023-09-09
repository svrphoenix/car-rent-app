import { useEffect } from 'react';
import CarList from '../components/CarList/CarList';
import SearchForm from '../components/SearchForm/SearchForm';
import { StyledContainer } from './common.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getAdverts } from '../redux/operations';
import LoadMore from '../components/LoadMore/LoadMore';
import {
  selectCars,
  selectFilter,
  selectIsPagination,
  selectPage,
  selectVisibleCars,
} from '../redux/selectors';
import { updateFavorites } from '../redux/slice';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const cars = useSelector(selectVisibleCars);
  const filter = useSelector(selectFilter);

  console.log('filter', filter);
  console.log(cars);
  const isCars = Boolean(cars.length);
  const isLoadMore = useSelector(selectIsPagination);

    const handleFavoriteClick = id => dispatch(updateFavorites(id));

  return (
    <StyledContainer>
      <SearchForm />
      {isCars && <CarList cars={cars} handleFavoriteClick={handleFavoriteClick} />}
      {isLoadMore && <LoadMore />}
    </StyledContainer>
  );
};

export default CatalogPage;
