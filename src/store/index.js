import { configureStore } from '@reduxjs/toolkit';
import searchInputReducer from '../store/searchSlice';

const store = configureStore({
  reducer: {
    SearchInput: searchInputReducer,
  },
});

export default store;