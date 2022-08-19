import { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { fetchMoviesByGenre } from '../../services/moviesApi';
import CardList from 'components/CardList';
import MovieCard from 'components/MovieCard';
import GoBackButton from 'components/GoBackButton/GoBackButton';
import GallerySkeleton from 'components/Loaders/GallerySkeleton';
import { FetchMarker } from './MoviesByGenre.styled';
import { pageVariants } from 'animations';

const MoviesByGenre = () => {
  const location = useLocation();
  const params = useParams();
  console.log(params);
  const { genreId } = params;

  const { ref: ListRef, inView } = useInView({
    threshold: 0.1,
  });

  const { data, error, fetchNextPage, isLoading, isError, isSuccess } =
    useInfiniteQuery(['moviesByGenre', { genreId }], fetchMoviesByGenre, {
      staleTime: 60000,
      cacheTime: 60000,
      getNextPageParam: pages => {
        if (pages.nextPage > pages.totalPages) {
          return undefined;
        }
        return pages.nextPage;
      },
    });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  if (isLoading) {
    return <GallerySkeleton />;
  }

  if (isError) {
    return toast.error(`Ошибка: ${error.message}`);
  }

  console.log(data);

  return (
    <motion.div
      initial={'closed'}
      animate={'open'}
      exit={'exit'}
      variants={pageVariants}
    >
      {location.state && (
        <GoBackButton path={location?.state?.from?.location ?? '/'} />
      )}
      {isSuccess && (
        <>
          {data.pages.map(({ results, nextPage }) => (
            <CardList key={`id${nextPage}`}>
              {results.map(movie => (
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
              ))}
            </CardList>
          ))}
        </>
      )}
      <FetchMarker ref={ListRef}></FetchMarker>
    </motion.div>
  );
};

export default MoviesByGenre;
