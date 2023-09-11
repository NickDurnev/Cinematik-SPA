import { useEffect, useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
//#Services
import { IMovie, IError } from 'services/interfaces';
import { searchMovie } from '../../services/moviesIDBService';
//#Components
import CardList from 'components/MovieList';
import MovieCard from 'components/MovieCard';
import GallerySkeleton from 'components/Loaders/GallerySkeleton';
import QueryTrigger from 'components/QueryTrigger';
//#Styles
import { pageVariants, itemVariants } from 'helpers/animations';

const MoviesPage = ({ query }: { query: string }) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [pageIndex, setPageIndex] = useState(0);
  const location = useLocation();
  let navigate = useNavigate();

  const { ref: ListRef, inView } = useInView({
    threshold: 0.1,
  });

  const { data, error, fetchNextPage, isLoading, isError, isSuccess, refetch } =
    useInfiniteQuery(['searchMovie', { query }], searchMovie, {
      enabled: false,
      staleTime: 60000,
      cacheTime: 60000,
      getNextPageParam: pages => {
        if (!pages) {
          return;
        }
        if (typeof pages === 'object' && pages.nextPage! > pages.totalPages!) {
          return;
        }
        return pages.nextPage;
      },
    });

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setMovies([]);
    setPageIndex(0);
    refetch();
    navigate(`?query=${query}`);
  }, [query]);

  useEffect(() => {
    if (movies.length !== 0 && inView) {
      fetchNextPage();
    }
  }, [inView]);

  useEffect(() => {
    if (isSuccess) {
      const page = data?.pages[pageIndex];
      if (page) {
        setMovies([...movies, ...page.results]);
        setPageIndex(pageIndex + 1);
      }
    }
    if (isError) {
      toast.error(`Error: ${(error as IError).response?.data?.message ?? 'Unknown error'}`);
    }
  }, [data, isError, isSuccess]);

  return (
    <>
      <motion.div
        initial={'closed'}
        animate={'open'}
        exit={'exit'}
        variants={pageVariants}
      >
        {isLoading && <GallerySkeleton />}
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

export default MoviesPage;
