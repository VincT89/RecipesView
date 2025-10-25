import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

// Importiamo dallo slice searchSlice:
// 1. setSearchTerm --> azione per aggiornare il testo della ricerca nello store
// 2. fetchRecipesBySearch --> thunk per recuperare le ricette filtrate dalla API
import { setSearchTerm, fetchRecipesBySearch, resetResults } from "../store/features/searchSlice";

const SearchInput = () => {
  // Creiamo la funzione dispatch per inviare azioni o thunk allo store Redux
  const dispatch = useDispatch(); // serve per aggiornare lo store: searchTerm = "mozzarella"

  // Leggiamo il valore attuale del campo di ricerca dallo store Redux
  const searchText = useSelector((state) => state.searchInput.searchTerm) || "";

  // Recuperiamo le ricette filtrate dallo store Redux
  const filteredRecipes = useSelector((state) => state.searchInput.results);

  // Stato locale per il debounce (nel senso che si intende la pagina corrente di dove ci si trova..?)
  const [debouncedQuery, setDebouncedQuery] = useState(searchText);

  // Aggiorniamo debouncedQuery 500ms dopo l'ultimo input dell'utente
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchText);
    }, 500); // 500ms di attesa

    // Pulizia del timeout se l'utente digita di nuovo prima dei 500ms
    return () => clearTimeout(handler);
  }, [searchText]);

  // Effettuiamo la fetch quando debouncedQuery cambia
  useEffect(() => {
    if (debouncedQuery.trim() === "") {
      dispatch(resetResults()); // Se il campo è vuoto, resettiamo i risultati
    } else {
      dispatch(fetchRecipesBySearch(debouncedQuery)); // Fetch delle ricette filtrate
    }
  }, [debouncedQuery, dispatch]);

  // Funzione che si attiva ogni volta che l’utente digita qualcosa nell’input
  const handleInput = (event) => {
    const value = event.target.value; // Prendiamo il testo scritto dall’utente

    // Aggiorniamo lo stato del testo nello store
    // Così il componente rimane "controlled" e mostra correttamente ciò che digiti
    dispatch(setSearchTerm(value));
  };

  return (
    <div>
      {/* Input per la ricerca */}
      <input
        type="text" // Input di tipo testo
        value={searchText} // Valore controllato dallo store Redux
        onChange={handleInput} // Chiama la funzione handleInput ad ogni cambiamento
        placeholder="Cerca una ricetta..." // Testo mostrato quando l'input è vuoto
        // Styling con Tailwind CSS: bordo, angoli arrotondati, padding, larghezza piena
        className="w-full rounded-xl bg-gray-100 px-4 py-2 text-gray-700 shadow-inner focus:shadow-md focus:shadow-blue-100 focus:outline-none transition"
      />
      {/* Mostriamo quante ricette sono state trovate */}
      <p className="mt-2 font-semibold">
        Ricette: {filteredRecipes.length}
      </p>

      {/* Mostriamo le ricette filtrate sotto l'input */}
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div
            key={recipe.id || recipe.name}
            className="max-w-lg w-full border rounded-lg overflow-hidden mt-9 p-6 flex justify-center items-center shadow-lg"
          >
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover text-center overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            <div className="p-4 flex flex-col justify-between">
              <div className="mb-4">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  {recipe.name}
                </div>
                {/* Lista degli ingredienti della ricetta - fatta con un <ul> e <li> mappati */}
                <ul>
                  {recipe.ingredients.map((ingredient, index) => (
                    <li
                      key={index}
                      className="text-gray-700 text-base list-disc list-inside"
                    >
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))
      ) : (
        // Se non ci sono ricette filtrate mostriamo questo messaggio
        <p className="font-bold mt-6 text-center">Nessuna ricetta trovata</p>
      )}
    </div>
  );
};

// Esportiamo il componente per poterlo usare in altre parti dell'app
export default SearchInput;
