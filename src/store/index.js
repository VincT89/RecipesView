import { configureStore } from '@reduxjs/toolkit';
import searchInputReducer from '../store/searchSlice';

const store = configureStore({
  reducer: {
    searchInput: searchInputReducer,
  },
});

export default store;