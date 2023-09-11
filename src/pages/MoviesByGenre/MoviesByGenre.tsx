import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
//#Services
import { IMovie, ILocation, IError } from 'services/interfaces';
import { fetchMoviesByGenre } from '../../services/moviesIDBService';
//#Components
import CardList from 'components/MovieList';
import MovieCard from 'components/MovieCard';
import GoBackButton from 'components/GoBackButton/GoBackButton';
import GallerySkeleton from 'components/Loaders/GallerySkeleton';
import QueryTrigger from 'components/QueryTrigger';
import { pageVariants, itemVariants } from 'helpers/animations';

const MoviesByGenre = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [pageIndex, setPageIndex] = useState(0);
  const location = useLocation();
  const params = useParams();
  const { genreID } = params;

  const { ref: ListRef, inView } = useInView({
    threshold: 0.1,
  });

  const { data, error, fetchNextPage, isLoading, isError, isSuccess } =
    useInfiniteQuery(['moviesByGenre', { genreID }], fetchMoviesByGenre, {
      staleTime: 60000,
      cacheTime: 60000,
      getNextPageParam: pages => {
        if (
          typeof pages === 'object' &&
          pages.nextPage! > pages.totalPages!
        ) {
          return;
        }
        return pages.nextPage;
      },
    });

  useEffect(() => {
    if (movies.length !== 0 && inView) {
      fetchNextPage();
    }
  }, [inView]);

  useEffect(() => {
    if (isSuccess && data?.pages[pageIndex]) {
      setMovies([...movies, ...data.pages[pageIndex].results]);
      setPageIndex(pageIndex + 1);
    }
    if (isError) {
      toast.error(`Error: ${(error as IError).response.data.message}`);
    }
  }, [data, isError, isSuccess]);

  if (isLoading) {
    return <GallerySkeleton />;
  }

  return (
    <>
      <motion.div
        initial={'closed'}
        animate={'open'}
        exit={'exit'}
        variants={pageVariants}
      >
        {location.state && (
          <GoBackButton path={(location?.state as ILocation).from?.location ?? '/'} />
        )}
        {movies.length > 0 && !isLoading && (
          <CardList>
            {movies.map(movie => (
              <motion.li
                initial={'closed'}
                animate={'open'}
                exit={'exit'}
                variants={itemVariants()}
                key={movie.id}
              >
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
              </motion.li>
            ))}
          </CardList>
        )}
      </motion.div>
      <QueryTrigger ref={ListRef}></QueryTrigger>
    </>
  );
};

export default MoviesByGenre;
