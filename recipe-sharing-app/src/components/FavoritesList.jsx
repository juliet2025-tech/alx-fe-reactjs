import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => state.recipes.find((r) => r.id === id))
  );
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (favorites.length === 0) return <p>No favorites yet!</p>;

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">My Favorites</h2>
      {favorites.map((recipe) => (
        <div key={recipe.id} className="border p-2 mb-2 rounded">
          <h3 className="font-semibold">{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button
            onClick={() => removeFavorite(recipe.id)}
            className="mt-1 px-2 py-1 bg-red-500 text-white rounded"
          >
            Remove Favorite
          </button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
