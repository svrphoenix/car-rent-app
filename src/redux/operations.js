import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

const ITEMS_PER_PAGE = 8;
axios.defaults.baseURL = 'https://64f6b1759d775408495278e0.mockapi.io/';

export const getAdverts = createAsyncThunk('adverts/getAdverts', async (page, thunkAPI) => {
  const options = {
    params: {
      page,
      limit: ITEMS_PER_PAGE,
    },
  };
  try {
    const { data } = await axios.get('adverts', options);
    return { items: data, perPage: ITEMS_PER_PAGE };
  } catch (err) {
    toast.error('Error happend on the server while loading adverts');
    return thunkAPI.rejectWithValue(err.code);
  }
});
