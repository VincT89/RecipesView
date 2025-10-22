import { Card } from "../components/Card";
import Button from "../components/Button";

const RecipesViewPage = () => {
  // dati finti x vedere l'impaginazione
  const fakeRecipes = [
    {
      id: 1,
      name: "Pizza Margherita",
      description: "Classica ricetta italiana",
      image: "https://cdn.dummyjson.com/recipe-images/1.webp"
    },
    {
      id: 2,
      name: "Wok di verdure",
      description: "verdure miste",
      image: "https://cdn.dummyjson.com/recipe-images/2.webp"
    },
    {
      id: 3,
      name: "Pizza Margherita",
      description: "Classica ricetta italiana",
      image: "https://cdn.dummyjson.com/recipe-images/1.webp"
    },
    {
      id: 3,
      name: "Wok di verdure",
      description: "verdure miste",
      image: "https://cdn.dummyjson.com/recipe-images/2.webp"
    },
    {
      id: 4,
      name: "Pizza Margherita",
      description: "Classica ricetta italiana",
      image: "https://cdn.dummyjson.com/recipe-images/1.webp"
    },
    {
      id: 5,
      name: "Wok di verdure",
      description: "verdure miste",
      image: "https://cdn.dummyjson.com/recipe-images/2.webp"
    },
    {
      id: 6,
      name: "Pizza Margherita",
      description: "Classica ricetta italiana",
      image: "https://cdn.dummyjson.com/recipe-images/1.webp"
    },
    {
      id: 7,
      name: "Wok di verdure",
      description: "verdure miste",
      image: "https://cdn.dummyjson.com/recipe-images/2.webp"
    },
    {
      id: 8,
      name: "Pizza Margherita",
      description: "Classica ricetta italiana",
      image: "https://cdn.dummyjson.com/recipe-images/1.webp"
    },
    {
      id: 9,
      name: "Wok di verdure",
      description: "verdure miste",
      image: "https://cdn.dummyjson.com/recipe-images/2.webp"
    },
    {
      id: 10,
      name: "Pizza Margherita",
      description: "Classica ricetta italiana",
      image: "https://cdn.dummyjson.com/recipe-images/1.webp"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight mb-6">Recipes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {fakeRecipes.map((recipe) => (
          <Card
            key={recipe.id}
            image={recipe.image}
            name={recipe.name}
            description={recipe.description}
          />
        ))}
      </div>

      <div className="mt-10 flex justify-center gap-4">
        <Button className="px-3 py-1.5 text-sm">Prev</Button>
        <Button className="px-3 py-1.5 text-sm">Next</Button>
      </div>
    </section>
  );
};

export default RecipesViewPage;
