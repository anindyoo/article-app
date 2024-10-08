import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import articles from '../api/articles';
import helpers from '../helpers/helpers';
import constants from '../constants/constants';
import useArticleStore from '../store/articleStore';
import Sidebar from '../components/Sidebar/Sidebar';
import CategoryBadge from '../components/CategoryBadge/CategoryBadge';

const ArticleDetail = () => {
  const { slug } = useParams();
  const [detail, setDetail] = useState([]);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const { uncategorizedExtra } = constants;
  const { allArticlesList } = useArticleStore();

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const detailResult = await articles.getArticleDetail(slug);
        setDetail(detailResult);
      } catch (error) {
        return error;
      } finally {
        setIsLoading(false);
      }
      return true;
    };
    getData();
  }, [slug]);

  useEffect(() => {
    const related = allArticlesList
      .filter((article) => {
        if (article.slug !== detail.slug) {
          return true;
        }
        return false;
      })
      .slice(0, 3);
    setRelatedArticles(related);
  }, [allArticlesList, detail]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="
    ARTICLE-DETAIL-PAGE
    SECTION-CENTER
    flex flex-row gap-7
    min-h-screen"
    >
      {!isLoading ? (
        <>
          <article className="
          ARTICLE-CONTENT
          flex flex-col gap-5
          w-[58rem]"
          >
            <header className="flex flex-col gap-2">
              <h1 className="ARTICLE-TITLE text-4xl font-bold">{detail.title}</h1>
              <ul className="CATEGORIES-LIST flex flex-row gap-2">
                {detail.categories.map((cat) => (
                  <li key={cat.id}>
                    <CategoryBadge name={cat.name} />
                  </li>
                ))}
              </ul>
            </header>
            <section className="
            UPPER-SECTION
            flex flex-row justify-between items-center
            h-12
            px-3
            border-t border-b"
            >
              <div className="ARTICLE-DATE text-sm">
                Published on
                {' '}
                {detail.created_at ? helpers.dateConverter(detail.created_at) : (
                  <span className="italic text-gray-600">Unknown date</span>
                )}
              </div>
              <div>
                <button type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                  </svg>
                </button>
              </div>
            </section>
            <section className="
            CONTENT-SECTION"
            >
              <figure>
                <img
                  src={detail.extras ? detail.extras.image : uncategorizedExtra.image}
                  alt={detail.extras ? detail.extras.imageAlt : uncategorizedExtra.imageAlt}
                />
              </figure>
              <div
                dangerouslySetInnerHTML={{ __html: detail.content }}
                className="ARTICLE-CONTENT force mt-6"
              />
            </section>
            <footer className="
            ARTICLE-FOOTER
            flex flex-row justify-between items-center
            h-12
            mt-5 px-3
            border-t border-b"
            >
              <div className="ARTICLE-DATE text-sm">
                Listed in
                {' '}
                {detail.categories.map((cat) => `#${cat.name} `)}
              </div>
              <div>
                <button type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                  </svg>
                </button>
              </div>
            </footer>
          </article>
          <Sidebar
            data={relatedArticles}
            relatedArticles
          />
        </>
      ) : 'Loading...'}
    </div>
  );
};

export default ArticleDetail;
