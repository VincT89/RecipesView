// Importa React e gli hook necessari
import React, { useEffect, useState } from 'react';

// Importa gli hook di Redux per interagire con lo store
import { useDispatch, useSelector } from 'react-redux';

// Importa l'action creator per ottenere le ricette
import { fetchRecipes } from '../features/recipes/recipesSlice';

const RecipesList = () => {
  // Hook Redux per inviare azioni
  const dispatch = useDispatch();

  // Estrae lo stato delle ricette dallo store
  const { items, status, error } = useSelector((state) => state.recipes);

  // Stato locale per gestire il numero di ricette da caricare
  const [limit, setLimit] = useState(12);

  // Stato locale per gestire quale card è espansa
  const [expandedId, setExpandedId] = useState(null);

  // Effetto che si attiva ogni volta che cambia il limite
  useEffect(() => {
    dispatch(fetchRecipes(limit));
  }, [limit, dispatch]);

  // Gestisce l'espansione della card per mostrare gli ingredienti
  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Mostra messaggio di caricamento
  if (status === 'loading') return <p>Caricamento ricette...</p>;

  // Mostra eventuale errore
  if (status === 'failed') return <p>Errore: {error}</p>;

  return (
    <>
      {/* Input per modificare il numero di ricette da caricare */}
      <div style={{ padding: '1rem' }}>
        <label htmlFor="limit">Numero di ricette: </label>
        <input
          id="limit"
          type="number"
          value={limit}
          min={1}
          max={50}
          onChange={(e) => setLimit(Number(e.target.value))}
          style={{ marginLeft: '0.5rem', padding: '0.3rem' }}
        />
      </div>

      {/* Griglia delle ricette */}
      <div
        style={{
          display: 'grid',
          gap: '1.5rem',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          padding: '2rem'
        }}
      >
        {items.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '10px',
              padding: '1rem',
              backgroundColor: '#fff',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
            }}
          >
            {/* Immagine */}
            <img
              src={recipe.image}
              alt={recipe.name}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                marginBottom: '0.5rem'
              }}
            />

            {/* Titolo */}
            <h3 style={{ marginBottom: '0.5rem' }}>{recipe.name}</h3>

            {/* Tipo di cucina */}
            <p>
              <strong>Cucina:</strong> {recipe.cuisine}
            </p>

            {/* Bottone per mostrare/nascondere ingredienti */}
            <button
              onClick={() => toggleExpand(recipe.id)}
              style={{
                marginTop: '0.5rem',
                padding: '0.5rem 1rem',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              {expandedId === recipe.id ? 'Nascondi ingredienti' : 'Mostra ingredienti'}
            </button>

            {/* Lista ingredienti */}
            {expandedId === recipe.id && (
              <div style={{ marginTop: '1rem' }}>
                <h4>Ingredienti:</h4>
                <ul style={{ paddingLeft: '1.2rem' }}>
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default RecipesList;
