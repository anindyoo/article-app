import { create } from 'zustand';

const useArticleStore = create((set) => ({
  allArticlesList: [],
  articlesByPageLimitList: [],
  articlesLoading: false,
  setAllArticlesList: (data) => set({ allArticlesList: data }),
  setArticlesByPageLimitList: (data) => set({ articlesList: data }),
  setArticlesLoading: (isLoading) => set({ articlesLoading: isLoading }),
}));

export default useArticleStore;
