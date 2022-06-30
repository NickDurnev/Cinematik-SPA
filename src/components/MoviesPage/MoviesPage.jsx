import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';
import { toast } from 'react-toastify';
import { searchMovie } from '../../services/api';
import Searchbar from 'components/Searchbar';
import CardList from 'components/CardList';
import MovieCard from 'components/MovieCard';
import GallerySkeleton from 'components/Loaders/GallerySkeleton';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  let navigate = useNavigate();

  const { ref: ListRef, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  const { data, error, fetchNextPage, isLoading, isError, isSuccess, refetch } =
    useInfiniteQuery(['searchMovie', { query }], searchMovie, {
      enabled: false,
      staleTime: 60000,
      cacheTime: 60000,
      getNextPageParam: pages => {
        if (pages.nextPage > pages.totalPages) {
          return undefined;
        }
        return pages.nextPage;
      },
    });

  const handleSubmit = () => {
    navigate(`?query=${query}`);
    refetch();
  };

  if (isLoading && data) {
    return <GallerySkeleton />;
  }

  if (isError) {
    return toast.error(`Ошибка: ${error.message}`);
  }
  console.log(data);

  return (
    <>
      <Searchbar onSubmit={handleSubmit} onChange={value => setQuery(value)} />
      {isSuccess && data && (
        <>
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
          <div ref={ListRef}></div>
        </>
      )}
    </>
  );
};

export default MoviesPage;
