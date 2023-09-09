import { useDispatch, useSelector } from 'react-redux';

import CarList from '../components/CarList/CarList';
import SearchForm from '../components/SearchForm/SearchForm';
import { StyledContainer } from './common.styled';
import LoadMore from '../components/LoadMore/LoadMore';
import { selectIsPagination, selectVisibleCars } from '../redux/selectors';
import { updateFavorites } from '../redux/slice';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectVisibleCars);
  const isCars = Boolean(cars.length);
  const isLoadMore = useSelector(selectIsPagination);

  const handleFavoriteClick = id => dispatch(updateFavorites(id));

  return (
    <StyledContainer>
      <SearchForm />
      <section>
        {isCars && <CarList cars={cars} handleFavoriteClick={handleFavoriteClick} />}
        {isLoadMore && <LoadMore />}
      </section>
    </StyledContainer>
  );
};

export default CatalogPage;
