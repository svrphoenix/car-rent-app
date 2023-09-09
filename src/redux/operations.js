import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ITEMS_PER_PAGE = 8;
axios.defaults.baseURL = 'https://64f6b1759d775408495278e0.mockapi.io/';

export const getAdverts = createAsyncThunk('adverts/getAdverts', async (page, thunkAPI) => {
  // const state = thunkAPI.getState();
  const options = {
    params: {
      page,
      limit: ITEMS_PER_PAGE,
    },
  };
  try {
    const { data } = await axios.get('adverts', options);
    // const favoriteCars = [];
    // is id===id favorite=true
    // if (data.length === 0) return thunkAPI.rejectWithValue('No more data');
    return { items: data, perPage: ITEMS_PER_PAGE };
  } catch (err) {
    alert(`Error happend on the server while loading adverts: (${err.message})`);
    return thunkAPI.rejectWithValue(err.code);
  }
});
