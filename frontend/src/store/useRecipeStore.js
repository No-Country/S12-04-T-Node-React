import { create } from "zustand";
import { persist } from "zustand/middleware";

const useRecipeStore = create(
  persist(
    (set) => ({
      favorites: [],
      addToFavorites: (recipe) =>
        set((state) => ({ favorites: [...state.favorites, recipe] })),
    }),
    {
      name: "recipe-store", // Nombre clave para la persistencia
    }
  )
);

export default useRecipeStore;
