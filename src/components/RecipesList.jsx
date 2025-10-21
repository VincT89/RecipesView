import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../features/recipes/recipesSlice';

const RecipesList = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.recipes);
  const [expandedId, setExpandedId] = useState(null); // ID della ricetta espansa

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRecipes());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <p>Caricamento...</p>;
  if (status === 'failed') return <p>Errore: {error}</p>;

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <ul>
      {items.map((recipe) => (
        <li key={recipe.id} onClick={() => toggleExpand(recipe.id)} style={{ cursor: 'pointer', marginBottom: '1rem' }}>
          <strong>{recipe.name}</strong> - {recipe.cuisine}
          {expandedId === recipe.id && (
            <ul style={{ marginTop: '0.5rem' }}>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default RecipesList;
