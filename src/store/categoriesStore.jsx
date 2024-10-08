import { create } from 'zustand';

const useCategoriesStore = create((set) => ({
  categoriesList: [],
  setCategoriesList: (data) => set({ categoriesList: data }),
  categoriesLoading: false,
  setCategoriesLoading: (isLoading) => set({ categoriesLoading: isLoading }),
}));

export default useCategoriesStore;
