import { createSelector } from '@reduxjs/toolkit';

const selectCars = state => state.adverts.cars;
const selectFavoriteCars = state => state.adverts.favoriteCars;
const selectPage = state => state.adverts.page;
const selectFilter = state => state.adverts.filter;
const selectIsLoading = state => state.adverts.isLoading;
const selectIsPagination = state => state.adverts.isPagination;
const selectError = state => state.adverts.error;

const applyFilter = (cars, searchFilter) => {
  if (!searchFilter) return cars;
  const { carBrand, maxPrice, mileageRange } = searchFilter;

  if (carBrand)
    cars = cars.filter(({ make }) => make.toLowerCase().includes(carBrand.toLowerCase()));

  if (maxPrice)
    cars = cars.filter(({ rentalPrice }) => Number(rentalPrice.slice(1)) <= Number(maxPrice));

  if (mileageRange?.min && mileageRange?.max)
    cars = cars.filter(
      ({ mileage }) => mileage >= Number(mileageRange.min) && mileage <= Number(mileageRange.max)
    );

  return cars;
};

const selectVisibleCars = createSelector([selectCars, selectFilter], applyFilter);

const selectVisibleFavoriteCars = createSelector([selectFavoriteCars, selectFilter], applyFilter);

export {
  selectCars,
  selectError,
  selectIsLoading,
  selectPage,
  selectIsPagination,
  selectFavoriteCars,
  selectFilter,
  selectVisibleCars,
  selectVisibleFavoriteCars,
};
