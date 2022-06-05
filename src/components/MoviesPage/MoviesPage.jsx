import { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useInfiniteQuery } from 'react-query';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InfiniteScroll from 'react-infinite-scroller';
import { searchMovie } from '../../services/api';
import Searchbar from 'components/Searchbar';
import CardList from 'components/CardList';
import MovieCard from 'components/MovieCard';
import ThreeDots from 'components/MovieCardSkeleton';

const MoviePage = () => {
  const [query, setQuery] = useState('');
  const toastId = useRef(null);
  let navigate = useNavigate();

  const notify = () => {
    if (!toast.isActive(toastId.current)) {
      toastId.current = toast.info('Фильмы кончились');
    }
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    isSuccess,
    refetch,
  } = useInfiniteQuery(['searchMovie', { query }], searchMovie, {
    enabled: false,
    staleTime: 60000,
    cacheTime: 60000,
    getNextPageParam: pages => {
      if (pages.nextPage > pages.totalPages) {
        notify();
        return undefined;
      }
      return pages.nextPage;
    },
  });

  const handleSubmit = () => {
    navigate(`?query=${query}`);
    refetch();
  };

  if (isLoading) {
    return <ThreeDots />;
  }

  if (isError) {
    return toast.error(`Ошибка: ${error.message}`);
  }

  return (
    <>
      <Searchbar onSubmit={handleSubmit} onChange={value => setQuery(value)} />
      {isSuccess && (
        <InfiniteScroll hasMore={hasNextPage} loadMore={fetchNextPage}>
          {data.pages.map(({ results, nextPage }) => (
            <CardList key={`id${nextPage}`}>
              {results.map(movie => (
                <li key={movie.id}>
                  <Link to={`/movies/${movie.id}`}>
                    <MovieCard movie={movie}></MovieCard>
                  </Link>
                </li>
              ))}
            </CardList>
          ))}
        </InfiniteScroll>
      )}
      <ToastContainer />
    </>
  );
};

export default MoviePage;
