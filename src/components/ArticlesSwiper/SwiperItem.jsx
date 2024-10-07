import { Link } from 'react-router-dom';

const SwiperItem = () => {
  console.log();

  return (
    <div className="
    SWIPER-ITEM
    flex items-end
    w-[58rem] h-[39.375rem]"
    >
      <div className="
      ARTICLE-INFO
      flex flex-col gap-2
      px-10 pb-[4.5rem]"
      >
        <div className="
        ARTICLE-CATEGORY
        RALEWAY-FONT
        w-fit
        px-2 py-1
        text-xs font-medium
        rounded-md
        bg-yellow-400 bg-opacity-75"
        >
          Karyawan Tetap
        </div>
        <h2 className="ARTICLE-TITLE text-6xl font-bold text-white">Computer Systems Analyst IV</h2>
        <Link
          to="/"
          className="RALEWAY-FONT mt-4 text-xl font-medium underline underline-offset-4 text-white"
        >
          Read Article
        </Link>
      </div>
      <div className="
      ITEM-IMAGE
      absolute top-0 -z-10"
      >
        <div className="
        FADE-OVERLAY
        absolute z-10
        bg-black
        w-[58rem] h-[39.375rem]"
        />
        <img
          src="https://images.unsplash.com/photo-1573879410138-96c2a1ad3210"
          alt="Illustration for 'Karyawan Tetap' category: People around table in cafetaria."
          className="w-[58rem] h-[39.375rem]"
        />
      </div>
    </div>
  );
};

export default SwiperItem;
