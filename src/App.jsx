import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import Main from './layouts/Main';
import Home from './pages/Home';
import articles from './api/articles';
import useArticleStore from './store/articleStore';
import categories from './api/categories';
import useCategoriesStore from './store/categoriesStore';
import ArticleDetail from './pages/ArticleDetail';

const App = () => {
  const routes = [
    {
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/:slug',
          element: <ArticleDetail />,
        },
      ],
    },
  ];

  const routeConfig = {
    basename: '/article-app',
  };

  const router = createBrowserRouter(routes, routeConfig);

  const { setArticlesList, setArticlesLoading } = useArticleStore();
  const { setCategoriesList, setCategoriesLoading } = useCategoriesStore();

  useEffect(() => {
    const getData = async () => {
      try {
        setArticlesLoading(true);
        setCategoriesLoading(true);
        const articlesResult = await articles.getArticles();
        const categoriesResult = await categories.getCategories();
        setArticlesList(articlesResult);
        setCategoriesList(categoriesResult);
      } catch (error) {
        return error;
      } finally {
        setArticlesLoading(false);
        setCategoriesLoading(false);
      }
      return true;
    };
    getData();
  }, [setArticlesList, setArticlesLoading, setCategoriesList, setCategoriesLoading]);

  return (
    <div className="
    APP-CONTAINER
    w-screen overflow-x-hidden"
    >
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
