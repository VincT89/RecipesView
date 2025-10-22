import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


  /* 
  ALLORA HO CREATO UN ALTRA FUNZIONE CHIAMATA "fetchRecipesSearchInput" CHE UTILIZZA 
  LA FUNZIONE DI REDUX TOOLKIT "CREATEASYNCTHUNK" PER FETCHARE LE RIETTE CHE RISPETTANO 
  I TERMINI DI RICERCA INSERITI NELL'INPUT (INPUT CHE CREERò DOPO NELLA COMPONENTE CHE CHIAMERò "SEARCHBAR"). 
  IL TERMINE DI RICERCA SRAEBBE LA "QUERY". 
  LA FETCH CI DEVE RESPONDERE CON LE RICETTE CHE RISPETTANO IL REQUISITO DELLA QUERY 
  (CONST RESPONSE SERVE A QUESTO) CONST DATA CONVERTE IN DATI LEGGIBILI LA RISPOSTA. 
  RETURN DATA CI RESTITUISCE LA RISPOSTA TRADOTTA, OVVERO LE NOSTRE RICETTE FILTRATE PER TERMINE DI RICERCA.
  */

  import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// FETCH RICETTE FILTRATE PER TERMINE DI RICERCA
export const fetchRecipesBySearch = createAsyncThunk(
  "search/fetchRecipesBySearch",
  async (query) => {
    const response = await fetch(`https://dummyjson.com/recipes/search?q=${query}`);
    if (!response.ok) throw new Error("Errore nel fetch della ricerca");
    const data = await response.json();
    return data.recipes; // l'API restituisce le ricette in un array dentro "recipes"
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    results: [], // le ricette trovate
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipesBySearch.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRecipesBySearch.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.results = action.payload;
      })
      .addCase(fetchRecipesBySearch.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default searchSlice.reducer;
