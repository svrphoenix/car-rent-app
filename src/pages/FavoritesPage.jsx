import { useDispatch, useSelector } from 'react-redux';
import CarList from '../components/CarList/CarList';
// import LoadMore from "../components/LoadMore/LoadMore";
import { StyledContainer } from './common.styled';
import { selectVisibleFavoriteCars } from '../redux/selectors';
import { deleteFromFavorites } from '../redux/slice';
import SearchForm from '../components/SearchForm/SearchForm';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  // const page = useSelector(selectPage);
  const cars = useSelector(selectVisibleFavoriteCars);
  const isCars = Boolean(cars.length);
  const handleFavoriteClick = id => dispatch(deleteFromFavorites(id));

  // const isLoadMore = useSelector(selectIsPagination);

  return (
    <StyledContainer>
      <SearchForm />
      {isCars && <CarList cars={cars} handleFavoriteClick={handleFavoriteClick} />}
      {/* {isLoadMore && <LoadMore />} */}
    </StyledContainer>
  );
};

export default FavoritesPage;
