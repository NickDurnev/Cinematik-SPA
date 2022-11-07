import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchCategoryMovies } from 'services/moviesIDBService';
import Loader from '../Loaders/Loader';
import CardList from 'components/CardList';
import MovieCard from 'components/MovieCard';
import { Wrap, Title } from './TopCategoryMovies.styled';

const TopCategoryMovies = ({ category, title }) => {
  const location = useLocation();

  const { data, isError, isLoading, isSuccess, error } = useQuery(
    ['topRatedMoviesSwiper', { category }],
    fetchCategoryMovies,
    {
      staleTime: 60000,
      cacheTime: 60000,
    }
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return toast.error(`Ошибка: ${error.message}`);
  }

  if (isSuccess) {
    return (
      <>
        <Wrap>
          <Title to={{ pathname: `/movies/${category}` }}>{title}</Title>
          <CardList>
            {data.results.map((movie, index) => {
              if (index > 4) {
                // eslint-disable-next-line array-callback-return
                return;
              }
              return (
                <li key={movie.id}>
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
                </li>
              );
            })}
          </CardList>
        </Wrap>
      </>
    );
  }
};

TopCategoryMovies.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TopCategoryMovies;
