/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperItem from './SwiperItem';

const ArticlesSwiper = (props) => {
  const { data, isLoading } = props;

  return (
    <Swiper
      modules={[Pagination, A11y]}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop
      className="
      FEATURED-ARTICLES-SWIPER
      w-[20rem] lg:w-[58rem] h-[39.375rem]
      rounded-xl
      border"
    >
      {!isLoading
        ? data.slice(0, 5).map((item) => (
          <SwiperSlide key={item.id}>
            <SwiperItem
              id={item.id}
              title={item.title}
              slug={item.slug}
              category={item.category}
            />
          </SwiperSlide>
        )) : 'Loading...'}
    </Swiper>
  );
};

export default ArticlesSwiper;
