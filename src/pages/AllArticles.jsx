import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import constants from '../constants/constants';
import ArticleCard from '../components/GridCard/ArticleCard';
import helpers from '../helpers/helpers';
import useArticleStore from '../store/articleStore';
import FilterDropdown from '../components/Filter/FilterDropdown';

const AllArticles = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    allArticlesList,
    articlesLoading,
  } = useArticleStore();
  const { uncategorizedExtra } = constants;

  const categoryIdList = searchParams.getAll('category_id');

  const filteredArticles = categoryIdList.length ? allArticlesList
    .filter((article) => article.categories
      .some((cat) => categoryIdList.includes(encodeURIComponent(cat.name))))
    : allArticlesList;

  const handleCategoryChange = (categoryId) => {
    setSearchParams({ category_id: [...categoryIdList, categoryId] });
  };

  const handleRemoveFilter = (categoryId) => {
    const updatedCategoryIdList = categoryIdList.filter((id) => id !== categoryId);
    setSearchParams({ category_id: updatedCategoryIdList });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="
    ALL-ARTICLES-PAGE
    SECTION-CENTER
    flex flex-col gap-12
    min-h-screen"
    >
      <section className="TITLE-SECTION">
        <h1 className="text-2xl lg:text-5xl font-bold">All Articles</h1>
      </section>
      <section className="
      FILTER-SECTION
      flex flex-row"
      >
        <FilterDropdown
          filters={categoryIdList}
          handleFilter={handleCategoryChange}
          handleRemoveFilter={handleRemoveFilter}
        />
      </section>
      {!articlesLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-14 gap-y-10 lg:gap-y-20">
          {filteredArticles.map((article) => {
            const extras = helpers.findCategoryExtrasById(article.categories[0].id);
            return (
              <ArticleCard
                key={article.id}
                id={article.id}
                slug={article.slug}
                title={article.title}
                categories={article.categories}
                image={extras ? extras.image : uncategorizedExtra.image}
                imageAlt={extras ? extras.imageAlt : uncategorizedExtra.imageAlt}
              />
            );
          })}
        </div>
      ) : 'Loading...'}
    </div>
  );
};

export default AllArticles;
