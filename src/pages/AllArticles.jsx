import { useEffect } from 'react';
import constants from '../constants/constants';
import GridCard from '../components/GridCard/GridCard';
import helpers from '../helpers/helpers';
import useArticleStore from '../store/articleStore';

const AllArticles = () => {
  const { allArticlesList, articlesLoading } = useArticleStore();
  const { uncategorizedExtra } = constants;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="
    HOME-PAGE
    SECTION-CENTER
    flex flex-col gap-12
    min-h-screen"
    >
      <section className="TITLE-SECTION">
        <h1 className="text-5xl font-bold">All Articles</h1>
      </section>
      {!articlesLoading ? (
        <div className="grid grid-cols-3 gap-x-14 gap-y-20">
          {allArticlesList.map((article) => {
            const extras = helpers.findCategoryExtrasById(article?.category?.id);

            return (
              <GridCard
                key={article.id}
                id={article.id}
                slug={article.slug}
                title={article.title}
                category={article.category}
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
