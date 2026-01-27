import { create } from 'zustand';
import useMessageStore from './useMessageStore';

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (recipe) => {
    if (!recipe.title) {
      useMessageStore.getState().setMessage('Recipe title cannot be empty', 'error');
      return;
    }
    set((state) => ({ recipes: [...state.recipes, recipe] }));
    useMessageStore.getState().setMessage('Recipe added successfully', 'success');
  },
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;

