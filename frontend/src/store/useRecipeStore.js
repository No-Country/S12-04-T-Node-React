import { create } from "zustand";
import { persist } from "zustand/middleware";

const useRecipeStore = create(
  persist(
    (set) => ({
      favorites: [],
      modal: {
        isOpen: false,
        title: '',
        category: '',
      },
      addToFavorites: (recipe) =>
        set((state) => ({ favorites: [...state.favorites, recipe] })),
      openModal: () =>
        set((state) => ({
          modal: { ...state.modal, isOpen: true },
        })),
      closeModal: () =>
        set((state) => ({
          modal: { ...state.modal, isOpen: false },
        })),
      setTitle: (title) =>
        set((state) => ({ modal: { ...state.modal, title } })),
      setCategory: (category) =>
        set((state) => ({ modal: { ...state.modal, category } })),
    }),
    {
      name: "recipe-store",
      whitelist: ['favorites', 'modal'], // Solo persistir los datos necesarios
    }
  )
);

export default useRecipeStore;

