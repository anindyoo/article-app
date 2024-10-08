import { create } from 'zustand';

const useArticleStore = create((set) => ({
  articlesList: [],
  setArticlesList: (data) => set({ articlesList: data }),
  articlesLoading: false,
  setArticlesLoading: (isLoading) => set({ articlesLoading: isLoading }),
}));

export default useArticleStore;
