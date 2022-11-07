import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { fetchMoviesByGenre } from '../../services/moviesIDBService';
import CardList from 'components/CardList';
import MovieCard from 'components/MovieCard';
import GoBackButton from 'components/GoBackButton/GoBackButton';
import GallerySkeleton from 'components/Loaders/GallerySkeleton';
import { FetchMarker } from './MoviesByGenre.styled';
import { pageVariants, textVariants } from 'animations';

const MoviesByGenre = () => {
  const [movies, setMovies] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const location = useLocation();
  const params = useParams();
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
    if (movies.length !== 0 && inView) {
      fetchNextPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  useEffect(() => {
    if (isSuccess && data?.pages[pageIndex]) {
      setMovies([...movies, ...data.pages[pageIndex].results]);
      setPageIndex(pageIndex + 1);
    }
    if (isError) {
      toast.error(`Error: ${error.response.data.message}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <GoBackButton path={location?.state?.from?.location ?? '/'} />
        )}
        {movies.length > 0 && !isLoading && (
          <CardList>
            {movies.map(movie => (
              <motion.li
                initial={'closed'}
                animate={'open'}
                exit={'exit'}
                variants={textVariants}
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
      <FetchMarker ref={ListRef}></FetchMarker>
    </>
  );
};

export default MoviesByGenre;
