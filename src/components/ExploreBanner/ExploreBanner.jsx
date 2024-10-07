import { Link } from 'react-router-dom';

const ExploreBanner = () => (
  <div className="
  EXPLORE-BANNER
  flex justify-center items-center
  w-full h-40
  rounded-xl
  border"
  >
    <Link
      to="/articles"
      className="flex items-center gap-2"
    >
      <span className="RALEWAY-FONT text-4xl font-medium hover:underline hover:underline-offset-4">
        Explore All Articles
      </span>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-9">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </span>
    </Link>
  </div>
);

export default ExploreBanner;
