import ArticlesSwiper from '../components/ArticlesSwiper/ArticlesSwiper';
import ExploreBanner from '../components/ExploreBanner/ExploreBanner';
import Sidebar from '../components/Sidebar/Sidebar';
import useArticleStore from '../store/articleStore';
import useCategoryStore from '../store/categoryStore';

const Home = () => {
  const { allArticlesList, articlesLoading } = useArticleStore();
  const { categoriesList, categoriesLoading } = useCategoryStore();

  return (
    <div className="
    HOME-PAGE
    SECTION-CENTER
    flex flex-col gap-6
    min-h-screen"
    >
      <section className="TITLE-SECTION mb-px">
        <h2 className="
        TITLE-TEXT
        text-5xl font-bold"
        >
          Latest Articles
        </h2>
      </section>
      <section className="
      ARTICLES-SIDEBAR-CONTAINER
      flex flex-row gap-8"
      >
        <section className="
        ARTICLES-SECTION flex flex-col gap-7"
        >
          <ArticlesSwiper data={allArticlesList} isLoading={articlesLoading} />
          <ExploreBanner />
        </section>
        <Sidebar data={categoriesList} isLoading={categoriesLoading} />
      </section>
    </div>
  );
};

export default Home;
