import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import SharedLayout from './SharedLayout/SharedLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getAdverts } from '../redux/operations';
import { selectPage } from '../redux/selectors';
const MainPage = lazy(() => import('../pages/MainPage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage'));
const FavoritesPage = lazy(() => import('../pages/FavoritesPage'));

const App = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);

  useEffect(() => {
    dispatch(getAdverts(page));
  }, [dispatch, page]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
