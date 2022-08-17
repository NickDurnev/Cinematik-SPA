import { useEffect } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { filmsByActor } from 'services/moviesApi';
import CardList from 'components/CardList';
import MovieCard from 'components/MovieCard';
import { GalleryButton } from './ActorsMovies.styled';
import GallerySkeleton from 'components/Loaders/GallerySkeleton';

const ActorsMovies = () => {
  const { actorId } = useParams();
  const location = useLocation();
  let navigate = useNavigate();

  const { data, error, isLoading, isError, isSuccess } = useQuery(
    ['filmsByActor', { actorId }],
    filmsByActor,
    {
      staleTime: 60000,
      cacheTime: 60000,
    }
  );

  useEffect(() => {
    if (data === 404) {
      const prevActorId = localStorage.getItem('actorId');
      navigate(`/moviesbyactor/${prevActorId}`);
    }
  }, [data, navigate]);

  if (isLoading) {
    return <GallerySkeleton />;
  }

  if (isError) {
    return toast.error(`Ошибка: ${error.message}`);
  }

  return (
    <>
      {isSuccess && data !== 404 && (
        <>
          <GalleryButton path={location?.state?.from?.location ?? '/'} />
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
