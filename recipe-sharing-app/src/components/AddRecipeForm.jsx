import { useState } from 'react';
import useRecipeStore from '../store/useRecipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({ id: Date.now(), title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
        className="p-2 mr-2 w-60 border rounded-md border-gray-300"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe Description"
        className="p-2 mr-2 w-60 border rounded-md border-gray-300"
      />
      <button type="submit" className="p-2 rounded-md bg-green-500 text-white">
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
