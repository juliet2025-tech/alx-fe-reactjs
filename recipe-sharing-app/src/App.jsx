
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import Snackbar from './components/Snackbar';

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-6 rounded-lg shadow-md bg-white text-center">
        <h1 className="text-2xl font-semibold mb-6">
          Recipe Sharing App
        </h1>

        <AddRecipeForm />
        <RecipeList />
        <Snackbar />
      </div>
    </div>
  );
}

export default App;
