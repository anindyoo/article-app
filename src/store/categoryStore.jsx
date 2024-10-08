import { create } from 'zustand';

const useCategoryStore = create((set) => ({
  categoriesList: [],
  categoriesLoading: false,
  setCategoriesList: (data) => set({ categoriesList: data }),
  setCategoriesLoading: (isLoading) => set({ categoriesLoading: isLoading }),
}));

export default useCategoryStore;
