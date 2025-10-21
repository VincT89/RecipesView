import { Card } from "../components/Card";
import Button from "../components/Button";

const RecipesViewPage = () => {
  // dati finti
  const fakeRecipes = [
    {
      id: 1,
      name: "Pizza Margherita",
      description: "Classica ricetta italiana",
      image: "https://cdn.dummyjson.com/recipe-images/1.webp"
    },
    {
      id: 2,
      name: "Pasta Carbonara",
      description: "Con uova, pancetta e pepe",
      image: "https://cdn.dummyjson.com/recipe-images/2.webp"
    }
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Le nostre ricette 🍽️</h1>

      {/* griglia  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {fakeRecipes.map((recipe) => (
          <Card
            key={recipe.id}
            image={recipe.image}
            name={recipe.name}
            description={recipe.description}
          />
        ))}
      </div>

      {/* bottoni  */}
      <div className="flex justify-center gap-4 mt-8">
        <Button>← Precedente</Button>
        <Button>Successivo →</Button>
      </div>
    </div>
  );
};

export default RecipesViewPage;
