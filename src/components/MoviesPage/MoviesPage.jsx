import { useState, useRef } from 'react';
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
    getNextPageParam: pages => {
      if (pages.nextPage > pages.totalPages) {
        notify();
        return undefined;
      }
      return pages.nextPage;
    },
  });

  if (isLoading) {
    return <ThreeDots />;
  }

  if (isError) {
    return toast.error(`Ошибка: ${error.message}`);
  }

  return (
    <>
      <Searchbar onSubmit={refetch} onChange={value => setQuery(value)} />
      {isSuccess && (
        <InfiniteScroll hasMore={hasNextPage} loadMore={fetchNextPage}>
          {data.pages.map(({ results, nextPage }) => (
            <CardList key={`id${nextPage}`}>
              {results.map(movie => (
                <MovieCard key={movie.id} movie={movie}></MovieCard>
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
