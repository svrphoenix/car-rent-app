import { useDispatch } from 'react-redux';
import { incrementPage } from '../../redux/slice';
import { StyledButton } from './LoadMore.styled';

const LoadMore = () => {
  const dispatch = useDispatch();
  return (
    <StyledButton type="button" onClick={() => dispatch(incrementPage())}>
      Load more
    </StyledButton>
  );
};

export default LoadMore;
