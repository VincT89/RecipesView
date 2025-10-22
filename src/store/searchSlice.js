import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
 
//   HO CREATO UNA FUNZIONE CHIAMATA "fetchRecipesSearchInput" CHE UTILIZZA 
//   LA FUNZIONE DI REDUX TOOLKIT "CREATEASYNCTHUNK" PER FETCHARE LE RIETTE CHE RISPETTANO 
//   I TERMINI DI RICERCA INSERITI NELL'INPUT (INPUT CHE CREERò DOPO NELLA COMPONENTE CHE CHIAMERò "SEARCHBAR"). 
//   IL TERMINE DI RICERCA SRAEBBE LA "QUERY". 
//   LA FETCH CI DEVE RESPONDERE CON LE RICETTE CHE RISPETTANO IL REQUISITO DELLA QUERY 
//   (CONST RESPONSE SERVE A QUESTO) CONST DATA CONVERTE IN DATI LEGGIBILI LA RISPOSTA. 
//   RETURN DATA CI RESTITUISCE LA RISPOSTA TRADOTTA, OVVERO LE NOSTRE RICETTE FILTRATE PER TERMINE DI RICERCA.
  

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
      searchTerm: "", // testo dell'input

    },
    reducers: {
      setSearchTerm: (state, action) => {
        state.searchTerm = action.payload;
      },
      /*
      setSearchTerm --> è un reducer nello slice di Redux.
      Serve a aggiornare lo stato del testo della ricerca nello store.
      state.searchTerm: --> è la variabile che contiene quello che l’utente scrive nell’input.
      action.payload --> è il valore che gli viene passato, cioè quello che l’utente digita.
      */
    },
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
  


// Esportiamo il componente per poterlo usare in altre parti dell’app (es. in RecipesPage)
export const { setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;