/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperItem from './SwiperItem';

const ArticlesSwiper = () => {
  console.log();

  return (
    <Swiper
      modules={[Pagination, A11y]}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop
      className="
      FEATURED-ARTICLES-SWIPER
      w-[58rem] h-[39.375rem]
      rounded-xl
      border"
    >
      <SwiperSlide><SwiperItem /></SwiperSlide>
      <SwiperSlide><SwiperItem /></SwiperSlide>
      <SwiperSlide><SwiperItem /></SwiperSlide>
      <SwiperSlide><SwiperItem /></SwiperSlide>
    </Swiper>
  );
};

export default ArticlesSwiper;
