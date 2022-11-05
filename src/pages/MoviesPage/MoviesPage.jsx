import { useEffect, useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { searchMovie } from '../../services/moviesIDBService';
import Searchbar from 'components/Searchbar';
import CardList from 'components/CardList';
import MovieCard from 'components/MovieCard';
import { FetchMarker } from './MoviesPage.styled';
import GallerySkeleton from 'components/Loaders/GallerySkeleton';
import { pageVariants } from 'animations';

const MoviesPage = ({ onChange, query }) => {
  const [movies, setMovies] = useState([]);
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
        if (pages.nextPage > pages.totalPages) {
          return undefined;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    if (movies.length !== 0 && inView) {
      fetchNextPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  if (isSuccess && data?.pages[pageIndex]) {
    setMovies([...movies, ...data.pages[pageIndex].results]);
    setPageIndex(pageIndex + 1);
  }

  if (isError) {
    return toast.error(`Ошибка: ${error.message}`);
  }

  return (
    <>
      <motion.div
        initial={'closed'}
        animate={'open'}
        exit={'exit'}
        variants={pageVariants}
      >
        <Searchbar onChange={onChange} isLoading={isLoading} />
        {isLoading && <GallerySkeleton />}
        {movies && (
          <div>
            <CardList>
              {movies.map(movie => (
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
          </div>
        )}
      </motion.div>
      <FetchMarker ref={ListRef}></FetchMarker>
    </>
  );
};

export default MoviesPage;
