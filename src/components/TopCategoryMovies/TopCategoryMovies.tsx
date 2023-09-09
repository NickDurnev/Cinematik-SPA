import { useQuery } from 'react-query';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useMediaQuery } from 'react-responsive';
//#Services
import { IMovie } from 'services/interfaces';
import { fetchCategoryMovies } from 'services/moviesIDBService';
//#Components
import Loader from '../Loaders/Loader';
import CardList from 'components/MovieList';
import MovieCard from 'components/MovieCard';
//#Styles
import { Wrap, Title } from './TopCategoryMovies.styled';

interface IProps {
  category: string;
  title: string;
}

const TopCategoryMovies = ({ category, title }: IProps) => {
  const location = useLocation();
  const isLaptopL = useMediaQuery({ query: '(min-width: 1920px)' });

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
    toast.error(`Error: ${(error as Error).message}`);
    return null;
  }

  if (isSuccess) {
    return (
      <>
        <Wrap>
          <Title to={{ pathname: `/movies/${category}` }}>{title}</Title>
          <CardList>
            {data.results.map((movie: IMovie, index: number) => {
              if (index > (isLaptopL ? 4 : 3)) {
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

  return null;
};

export default TopCategoryMovies;
