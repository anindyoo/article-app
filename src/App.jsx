import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import Main from './layouts/Main';
import Home from './pages/Home';
import articles from './api/articles';
import useArticleStore from './store/articleStore';
import categories from './api/categories';
import useCategorysStore from './store/categoryStore';
import ArticleDetail from './pages/ArticleDetail';
import AllArticles from './pages/AllArticles';
import AllCategories from './pages/AllCategories';

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
          path: '/articles',
          element: <AllArticles />,
        },
        {
          path: '/articles/:slug',
          element: <ArticleDetail />,
        },
        {
          path: '/categories',
          element: <AllCategories />,
        },
      ],
    },
  ];

  const routeConfig = {
    basename: '/article-app',
  };

  const router = createBrowserRouter(routes, routeConfig);

  const { setAllArticlesList, setArticlesLoading } = useArticleStore();
  const { setCategoriesList, setCategoriesLoading } = useCategorysStore();

  useEffect(() => {
    const getData = async () => {
      try {
        setArticlesLoading(true);
        setCategoriesLoading(true);
        const categoriesResult = await categories.getCategories();
        const allArticlesResult = await articles.getAllArticles();
        setAllArticlesList(allArticlesResult);
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
  }, [setAllArticlesList, setArticlesLoading, setCategoriesList, setCategoriesLoading]);

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
