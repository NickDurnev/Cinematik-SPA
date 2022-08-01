import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Navigation, A11y, Autoplay } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import MovieCard from 'components/MovieCard';
import { Slider, NavPrevWrap, NavNextWrap } from './Swiper.styled';
import { ReactComponent as ArrowLeftIcon } from '../../images/icons/ArrowLeft.svg';
import { ReactComponent as ArrowRightIcon } from '../../images/icons/ArrowRight.svg';

export const Swiper = ({ movies, onAutoPlay = false }) => {
  let autoplaySettings = null;
  onAutoPlay
    ? (autoplaySettings = { delay: 5000 })
    : (autoplaySettings = { delay: 2000000 });

  console.log(onAutoPlay);
  return (
    <Slider
      modules={[Navigation, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={5}
      navigation={{
        prevEl: '.prev',
        nextEl: '.next',
      }}
      autoplay={{ ...autoplaySettings }}
      onSwiper={swiper => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <NavPrevWrap className="prev">
        <ArrowLeftIcon width={60} height={60} />
      </NavPrevWrap>
      {movies.map(movie => (
        <SwiperSlide key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <MovieCard movie={movie}></MovieCard>
          </Link>
        </SwiperSlide>
      ))}
      <NavNextWrap className="next">
        <ArrowRightIcon width={60} height={60} />
      </NavNextWrap>
    </Slider>
  );
};

Swiper.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  onAutoPlay: PropTypes.bool,
};

export default Swiper;
