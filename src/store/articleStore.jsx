import { create } from 'zustand';

const useArticleStore = create((set) => ({
  allArticlesList: [],
  articlesByPageLimitList: [],
  articlesLoading: false,
  articlesOrder: 'desc',
  setAllArticlesList: (data) => set({ allArticlesList: data }),
  setArticlesByPageLimitList: (data) => set({ articlesList: data }),
  setArticlesLoading: (isLoading) => set({ articlesLoading: isLoading }),
  setArticlesOrder: (order) => set({ articlesOrder: order }),
}));

export default useArticleStore;
