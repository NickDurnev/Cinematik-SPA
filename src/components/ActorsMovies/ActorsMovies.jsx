import { Link, useParams, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { filmsByActor } from 'services/api';
import CardList from 'components/CardList';
import MovieCard from 'components/MovieCard';
import { GalleryButton } from './ActorsMovies.styled';
import GallerySkeleton from 'components/Loaders/GallerySkeleton';

const ActorsMovies = () => {
  const { actorId } = useParams();
  const location = useLocation();

  const { data, error, isLoading, isError, isSuccess } = useQuery(
    ['filmsByActor', { actorId }],
    filmsByActor,
    {
      staleTime: 60000,
      cacheTime: 60000,
    }
  );

  if (isLoading && data) {
    return <GallerySkeleton />;
  }

  if (isError) {
    return toast.error(`Ошибка: ${error.message}`);
  }

  return (
    <>
      {isSuccess && data && (
        <>
          <GalleryButton to={location?.state?.from?.location ?? '/'}>
            {location?.state?.from?.label ?? 'Go back'}
          </GalleryButton>
          <CardList>
            {data.cast.map(movie => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                  <MovieCard movie={movie}></MovieCard>
                </Link>
              </li>
            ))}
          </CardList>
        </>
      )}
    </>
  );
};

export default ActorsMovies;
