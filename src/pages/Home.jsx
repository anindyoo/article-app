import ArticlesSwiper from '../components/ArticlesSwiper/ArticlesSwiper';
import ExploreBanner from '../components/ExploreBanner/ExploreBanner';
import Sidebar from '../components/Sidebar/Sidebar';

const Home = () => {
  console.log();

  return (
    <div className="
    HOME-PAGE
    SECTION-CENTER
    flex flex-col gap-6"
    >
      <section className="TITLE-SECTION mb-px">
        <h2 className="
        TITLE-TEXT
        text-5xl font-bold"
        >
          Featured Articles
        </h2>
      </section>
      <section className="
      ARTICLES-SIDEBAR-CONTAINER
      flex flex-row gap-8"
      >
        <section className="
        ARTICLES-SECTION flex flex-col gap-7"
        >
          <ArticlesSwiper />
          <ExploreBanner />
        </section>
        <Sidebar />
      </section>
    </div>
  );
};

export default Home;
