import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Importiamo dallo slice searchSlice:
// 1. setSearchText → azione per aggiornare il testo della ricerca nello store
// 2. fetchRecipesSearchInput → thunk per recuperare le ricette filtrate dalla API
import { setSearchText, fetchRecipesSearchInput } from "../store/searchSlice";

const SearchInput = () => {
  // Creiamo la funzione dispatch per inviare azioni o thunk allo store Redux
  const dispatch = useDispatch();

  // Leggiamo il valore attuale del campo di ricerca dallo store Redux
  const searchText = useSelector((state) => state.search.text);

  // Funzione che si attiva ogni volta che l’utente digita qualcosa nell’input
  const handleInput = (event) => {
    const value = event.target.value; // Prendiamo il testo scritto dall’utente

    // Aggiorniamo lo stato del testo nello store
    // Così il componente rimane "controlled" e mostra correttamente ciò che digiti
    dispatch(setSearchText(value));

    // Eseguiamo la fetch delle ricette filtrate in base al testo digitato
    dispatch(fetchRecipesSearchInput(value));
  };

  return (
    <input
      type="text"                  // Input di tipo testo
      value={searchText}            // Valore controllato dallo store Redux
      onChange={handleInput}        // Chiama la funzione handleInput ad ogni cambiamento
      placeholder="Cerca una ricetta..." // Testo mostrato quando l'input è vuoto
      className="border rounded-md p-2 w-full" // Styling con Tailwind CSS: bordo, angoli arrotondati, padding, larghezza piena
    />
  );
};

// Esportiamo il componente per poterlo usare in altre parti dell'app
export default SearchInput;
