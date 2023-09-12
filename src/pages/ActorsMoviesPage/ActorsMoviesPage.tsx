import { useEffect, useState } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
//#Services
import { IMovie, IError, ILocation } from 'services/interfaces';
import { filmsByActor } from 'services/moviesIDBService';
//#Components
import CardList from 'components/MovieList';
import MovieCard from 'components/MovieCard';
import { GalleryButton } from './ActorsMoviesPage.styled';
import GallerySkeleton from 'components/Loaders/GallerySkeleton';
import { pageVariants, itemVariants } from 'helpers/animations';

const ActorsMovies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const { actorID } = useParams();
  const location = useLocation();
  let navigate = useNavigate();

  const { data, error, isLoading, isError, isSuccess } = useQuery(
    ['filmsByActor', { actorID }],
    filmsByActor,
    {
      staleTime: 60000,
      cacheTime: 60000,
    }
  );

  useEffect(() => {
    if (data === 404) {
      const prevactorID = localStorage.getItem('actorID');
      navigate(`/moviesbyactor/${prevactorID}`);
    }
  }, [data, navigate]);

  useEffect(() => {
    if (isSuccess && typeof data === 'object' && data.cast.length > 0) {
      setMovies([...movies, ...data.cast]);
    }
    if (isError) {
      toast.error(`Error: ${(error as IError).response.data.message}`);
    }
  }, [data, isError, isSuccess]);

  if (isLoading) {
    return <GallerySkeleton />;
  }

  return (
    <motion.div
      initial={'closed'}
      animate={'open'}
      exit={'exit'}
      variants={pageVariants}
    >
      {movies.length > 0 && (
        <>
          <GalleryButton path={(location?.state as ILocation).from?.location ?? '/'} />
          <CardList>
            {movies.map(movie => (
              <motion.li
                initial={'closed'}
                animate={'open'}
                exit={'exit'}
                variants={itemVariants()}
                key={movie.id}
              >
                <Link to={`/movies/${movie.id}`}>
                  <MovieCard movie={movie}></MovieCard>
                </Link>
              </motion.li>
            ))}
          </CardList>
        </>
      )}
    </motion.div>
  );
};

export default ActorsMovies;
