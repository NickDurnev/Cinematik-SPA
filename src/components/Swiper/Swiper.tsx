import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Navigation, A11y, Autoplay } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive';
import { IMovie } from 'services/interfaces';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
//#Components
import MovieCard from 'components/MovieCard';
//#Styles
import { Slider, NavPrevWrap, NavNextWrap } from './Swiper.styled';
import { device } from '../../helpers/deviceSizes';
//#Icons
import { ReactComponent as ArrowLeftIcon } from '../../images/icons/ArrowLeft.svg';
import { ReactComponent as ArrowRightIcon } from '../../images/icons/ArrowRight.svg';

interface IProps {
  movies: IMovie[];
  location?: object;
  onAutoPlay: boolean;
}

export const Swiper = ({ movies, location, onAutoPlay = false }: IProps) => {
  const isTablet = useMediaQuery({ query: device.tablet });
  const isLaptopM = useMediaQuery({ query: device.laptopM });
  const isLaptopL = useMediaQuery({ query: device.laptopL });

  let autoplaySettings = null;
  onAutoPlay
    ? (autoplaySettings = { delay: 5000 })
    : (autoplaySettings = { delay: 2000000 });

  let numberOfSliders = 1;
  if (isTablet) {
    numberOfSliders = 2;
  }
  if (isLaptopM) {
    numberOfSliders = 4;
  }
  if (isLaptopL) {
    numberOfSliders = 5;
  }
  return (
    <>
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
    </>
  );
};

Swiper.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  onAutoPlay: PropTypes.bool,
};

export default Swiper;
