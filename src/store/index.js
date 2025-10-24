import { configureStore } from '@reduxjs/toolkit'; 
import searchInputReducer from '../store/searchSlice';

const store = configureStore({ // configuriamo lo store Redux
  reducer: {
    searchInput: searchInputReducer,
  },
});

export default store;