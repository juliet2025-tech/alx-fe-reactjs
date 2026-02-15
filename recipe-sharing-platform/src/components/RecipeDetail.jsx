import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"; // for dynamic routing
import recipesData from "../data.json"; // import your mock data

const RecipeDetail = () => {
  const { id } = useParams(); // get recipe ID from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // find the recipe by ID from data.json
    const selectedRecipe = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-8">Recipe not found!</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back to Home */}
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
        &larr; Back to Home
      </Link>

      {/* Recipe Title */}
      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>

      {/* Recipe Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full max-h-96 object-cover rounded-lg mb-6"
      />

      {/* Summary Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-2">Summary</h2>
        <p className="text-gray-700">{recipe.summary}</p>
      </div>

      {/* Ingredients Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700">
          {(recipe.ingredients || ["Example ingredient 1", "Example ingredient 2"]).map(
            (item, index) => (
              <li key={index}>{item}</li>
            )
          )}
        </ul>
      </div>

      {/* Steps Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside text-gray-700">
          {(recipe.steps || ["Step 1 example", "Step 2 example"]).map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
