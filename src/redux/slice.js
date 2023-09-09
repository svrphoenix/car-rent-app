import { createSlice } from '@reduxjs/toolkit';
import { getAdverts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.page = state.page - 1;
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    cars: [],
    isLoading: false,
    error: '',
    page: 1,
    isPagination: false,
    filter: null,
    favoriteCars: [],
  },
  reducers: {
    incrementPage(state) {
      // state.filter = null;
      state.page = state.page + 1;
    },

    updateFavorites(state, { payload }) {
      state.cars = state.cars.map(car => {
        if (car.id === payload) {
          return car?.favorite ? { ...car, favorite: undefined } : { ...car, favorite: true };
        }
        return car;
      });
      state.favoriteCars = state.cars.filter(car => car?.favorite);
    },

    deleteFromFavorites(state, { payload }) {
      state.favoriteCars = state.favoriteCars.filter(car => car.id !== payload);
      state.cars = state.cars.map(car => {
        if (car.id === payload) {
          delete car.favorite;
        }
        return car;
      });
    },

    setFilter(state, action) {
      state.filter = action.payload;
    },
  },

  extraReducers: builder => {
    builder.addCase(getAdverts.pending, handlePending);
    builder.addCase(getAdverts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      const updatedCars = action.payload.items.map(car => {
        if (state.favoriteCars.find(item => item.id === car.id)) {
          return { ...car, favorite: true };
        }
        return car;
      });
      state.cars = [...state.cars, ...updatedCars];

      if (action.payload.items.length < action.payload.perPage) {
        state.isPagination = false;
      } else {
        state.isPagination = true;
      }
    });
    builder.addCase(getAdverts.rejected, handleRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;
export const { incrementPage, updateFavorites, deleteFromFavorites, setFilter } =
  advertsSlice.actions;
