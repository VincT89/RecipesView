import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Importiamo le azioni che ci servono dallo slice:
// - setSearchTerm: serve per salvare ciò che l’utente digita nello store Redux
// - fetchRecipes: serve per eseguire la chiamata API e prendere le ricette filtrate
import { setSearchTerm, fetchRecipes } from "./store/recipesSlice";
 


//   HO CREATO UNA FUNZIONE CHIAMATA "fetchRecipesSearchInput" CHE UTILIZZA 
//   LA FUNZIONE DI REDUX TOOLKIT "CREATEASYNCTHUNK" PER FETCHARE LE RIETTE CHE RISPETTANO 
//   I TERMINI DI RICERCA INSERITI NELL'INPUT (INPUT CHE CREERò DOPO NELLA COMPONENTE CHE CHIAMERò "SEARCHBAR"). 
//   IL TERMINE DI RICERCA SRAEBBE LA "QUERY". 
//   LA FETCH CI DEVE RESPONDERE CON LE RICETTE CHE RISPETTANO IL REQUISITO DELLA QUERY 
//   (CONST RESPONSE SERVE A QUESTO) CONST DATA CONVERTE IN DATI LEGGIBILI LA RISPOSTA. 
//   RETURN DATA CI RESTITUISCE LA RISPOSTA TRADOTTA, OVVERO LE NOSTRE RICETTE FILTRATE PER TERMINE DI RICERCA.
  
// FETCH PER RICETTE FILTRATE PER TERMINI DI RICERCATI NELL'INPUT
export const fetchRecipesSearchInput = createAsyncThunk(
    "recipes/fetchBySearch",
    async (query) => {
      const response = await fetch('https://dummyjson.com/recipes=${query}');
      const data = await response.json();
      return data;
    }
  );




const SearchSlice = () => {
  // useDispatch() ci permette di inviare azioni (dispatch) allo store Redux
  const dispatch = useDispatch();

  // useSelector() serve per leggere dati dallo store Redux
  // Qui leggiamo il valore attuale del campo di ricerca (searchTerm)
  const searchTerm = useSelector((state) => state.recipes.searchTerm);

  // Funzione che si attiva ogni volta che l’utente digita qualcosa nell’input
  const handleChange = (e) => {
    const value = e.target.value; // Prendiamo il testo digitato
    dispatch(setSearchTerm(value)); // Aggiorniamo lo stato Redux con il nuovo testo
    dispatch(fetchRecipes(value)); // Eseguiamo subito la ricerca con quel testo
  };

  // JSX: l’input di ricerca
  return (
    <input
      type="text"  
      value={searchTerm} // Il valore viene preso dallo store Redux
      onChange={handleChange} // Ogni volta che si digita, aggiorniamo lo stato e lanciamo la ricerca
      placeholder="Cerca una ricetta..."// Testo grigio mostrato quando il campo è vuoto
      className="border p-2 rounded w-full" // Stile: bordo, padding, angoli arrotondati, larghezza piena
    />
  );
};

// Esportiamo il componente per poterlo usare in altre parti dell’app (es. in RecipesPage)
export const { setSearchTerm } = recipesSlice.actions;
export default recipesSlice.reducer;