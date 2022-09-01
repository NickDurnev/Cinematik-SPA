import { useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { searchMovie } from '../../services/moviesApi';
import Searchbar from 'components/Searchbar';
import CardList from 'components/CardList';
import MovieCard from 'components/MovieCard';
import { FetchMarker } from './MoviesPage.styled';
import GallerySkeleton from 'components/Loaders/GallerySkeleton';
import { pageVariants } from 'animations';

const MoviesPage = ({ onChange, query }) => {
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
    if (location.state) {
      const prevQuery = location.search.slice(7, location.search.length);
      onChange(prevQuery);
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  const handleSubmit = async () => {
    if (query) {
      const fetch = await refetch();
      if (fetch.data.pages[0].results.length !== 0) {
        navigate(`?query=${query}`);
      }
    }
  };

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
      <Searchbar
        onSubmit={handleSubmit}
        onChange={onChange}
        isLoading={isLoading}
      />
      {isLoading && <GallerySkeleton />}
      {isSuccess && data.pages[0] && (
        <div>
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
        </div>
      )}
      <FetchMarker ref={ListRef}></FetchMarker>
    </motion.div>
  );
};

export default MoviesPage;
