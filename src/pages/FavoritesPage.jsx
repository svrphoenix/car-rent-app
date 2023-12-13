import { useDispatch, useSelector } from 'react-redux';
import CarList from '../components/CarList/CarList';
import { StyledContainer } from './common.styled';
import { selectFavoriteCars, selectVisibleFavoriteCars } from '../redux/selectors';
import { deleteFromFavorites } from '../redux/slice';
import SearchForm from '../components/SearchForm/SearchForm';
import { getPrices, uniqBrands } from '../utils';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectVisibleFavoriteCars);
  const brands = uniqBrands(useSelector(selectFavoriteCars), 'make');

  const isCars = Boolean(favoriteCars.length);
  const prices = getPrices();
  const handleFavoriteClick = id => dispatch(deleteFromFavorites(id));

  return (
    <StyledContainer>
      <SearchForm brands={brands} prices={prices} />
      <section>
        {isCars && <CarList cars={favoriteCars} handleFavoriteClick={handleFavoriteClick} />}
      </section>
    </StyledContainer>
  );
};

export default FavoritesPage;
