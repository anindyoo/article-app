import { createHashRouter, RouterProvider } from 'react-router-dom';
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

  const router = createHashRouter(routes);

  const {
    setAllArticlesList,
    setArticlesLoading,
    articlesOrder,
  } = useArticleStore();
  const { setCategoriesList, setCategoriesLoading } = useCategorysStore();

  useEffect(() => {
    const getData = async () => {
      try {
        setArticlesLoading(true);
        const allArticlesResult = await articles.getAllArticles(articlesOrder);
        setAllArticlesList(allArticlesResult);
      } catch (error) {
        return error;
      } finally {
        setArticlesLoading(false);
      }
      return true;
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        setCategoriesLoading(true);
        const categoriesResult = await categories.getCategories();
        setCategoriesList(categoriesResult);
      } catch (error) {
        return error;
      } finally {
        setCategoriesLoading(false);
      }
      return true;
    };
    getData();
  }, []);

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
