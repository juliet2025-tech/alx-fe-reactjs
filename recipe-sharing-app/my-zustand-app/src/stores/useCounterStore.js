import { create } from 'zustand';

// Initial state
const initialState = { count: 0 };

// Create the store
const useCounterStore = create((set) => ({
  ...initialState,

  // Actions to update state
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  resetCount: () => set({ count: 0 }), // New action to reset the counter
}));

export default useCounterStore;
