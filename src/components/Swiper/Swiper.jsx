import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Navigation, A11y, Autoplay } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
//#Components
import MovieCard from 'components/MovieCard';
//#Styles
import { Slider, NavPrevWrap, NavNextWrap } from './Swiper.styled';
//#Icons
import { ReactComponent as ArrowLeftIcon } from '../../images/icons/ArrowLeft.svg';
import { ReactComponent as ArrowRightIcon } from '../../images/icons/ArrowRight.svg';

export const Swiper = ({ movies, location, onAutoPlay = false }) => {
  let autoplaySettings = null;
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isLaptop = useMediaQuery({ query: '(min-width: 1024px)' });
  const isLaptopM = useMediaQuery({ query: '(min-width: 1440px)' });
  const isLaptopL = useMediaQuery({ query: '(min-width: 1920px)' });
  onAutoPlay
    ? (autoplaySettings = { delay: 5000 })
    : (autoplaySettings = { delay: 2000000 });

  let numberOfSliders = 1;
  if (isTablet) {
    numberOfSliders = 2;
  }
  if (isLaptop) {
    numberOfSliders = 3;
  }
  if (isLaptopM) {
    numberOfSliders = 4;
  }
  if (isLaptopL) {
    numberOfSliders = 5;
  }
  return (
    <Slider
      modules={[Navigation, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={numberOfSliders}
      navigation={{
        prevEl: '.prev',
        nextEl: '.next',
      }}
      autoplay={{ ...autoplaySettings }}
    >
      <NavPrevWrap className="prev">
        <ArrowLeftIcon width={60} height={60} />
      </NavPrevWrap>
      {movies.map(movie => (
        <SwiperSlide key={movie.id}>
          <Link
            to={`/movies/${movie.id}`}
            state={{
              from: {
                location,
              },
            }}
          >
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
