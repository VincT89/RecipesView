import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Importiamo dallo slice searchSlice:
// 1. setSearchTerm --> azione per aggiornare il testo della ricerca nello store
// 2. fetchRecipesBySearch --> thunk per recuperare le ricette filtrate dalla API
import { setSearchTerm, fetchRecipesBySearch } from "../store/searchSlice"; 


const SearchInput = () => {
    // Creiamo la funzione dispatch per inviare azioni o thunk allo store Redux
    const dispatch = useDispatch(); // serve per aggiornare lo store: searchTerm = "mozzarella"

    // Leggiamo il valore attuale del campo di ricerca dallo store Redux
    const searchText = useSelector((state) => state.searchInput.searchTerm) || "";

    // Recuperiamo le ricette filtrate dallo store Redux
    const filteredRecipes = useSelector((state) => state.searchInput.results);

    // Funzione che si attiva ogni volta che l’utente digita qualcosa nell’input
    const handleInput = (event) => {
        const value = event.target.value; // Prendiamo il testo scritto dall’utente

        // Aggiorniamo lo stato del testo nello store
        // Così il componente rimane "controlled" e mostra correttamente ciò che digiti
        dispatch(setSearchTerm(value));

        // Eseguiamo la fetch delle ricette filtrate in base al testo digitato
        dispatch(fetchRecipesBySearch(value));
    };

    return (
        <div>
            {/* Input per la ricerca */}
            <input
                type="text"                  // Input di tipo testo
                value={searchText}           // Valore controllato dallo store Redux
                onChange={handleInput}       // Chiama la funzione handleInput ad ogni cambiamento
                placeholder="Cerca una ricetta..." // Testo mostrato quando l'input è vuoto
                className="border rounded-md p-2 w-full" // Styling con Tailwind CSS: bordo, angoli arrotondati, padding, larghezza piena
            />

            {/* Mostriamo le ricette filtrate sotto l'input */}
            {filteredRecipes.length > 0 ? (filteredRecipes.map((recipe) => (
                <div key={recipe.id || recipe.name} className="max-w-sm w-full lg:max-w-full lg:flex mb-4 border rounded-lg overflow-hidden">

                    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover text-center overflow-hidden">
                        <img src={recipe.image} alt={recipe.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 flex flex-col justify-between">
                        <div className="mb-4">
                            <div className="text-gray-900 font-bold text-xl mb-2">{recipe.name}</div>
                            <p className="text-gray-700 text-base">{recipe.description}</p>
                        </div>
                    </div>
                </div>
            ))
            ) : (
                // Se non ci sono ricette filtrate mostriamo questo messaggio
                <p>Nessuna ricetta trovata</p>
            )}
        </div>
    );
};

// Esportiamo il componente per poterlo usare in altre parti dell'app
export default SearchInput;
