import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from "./recipesSlice"; // importo il reducer dello slice per il fetch delle ricette


const store = configureStore({
  reducer: {
    recipes: recipesReducer, // lo slice per scaricare le ricette

  },
});

export default store;