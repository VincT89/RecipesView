import React from 'react';


const Card = ({ recipe, isExpanded, onToggle }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-[200px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{recipe.name}</h3>
        <p className="mt-1"><strong>Cucina:</strong> {recipe.cuisine}</p>
        <button
          onClick={() => onToggle(recipe.id)}
          className="mt-2 px-4 py-2 rounded text-white border-none cursor-pointer"
          style={{
            backgroundColor: 'var(--color-button-500)'
          }}
          onMouseOver={e => {
            e.currentTarget.style.backgroundColor = 'var(--color-buttonHover-800)';
            e.currentTarget.style.color = 'var(--color-buttonTextHover-600)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.backgroundColor = 'var(--color-button-500)';
            e.currentTarget.style.color = 'white';
          }}
        >
          {isExpanded ? 'Nascondi ingredienti' : 'Mostra ingredienti'}
        </button>
        {isExpanded && (
          <ul className="mt-4 pl-5 list-disc">
            {recipe.ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Card;
