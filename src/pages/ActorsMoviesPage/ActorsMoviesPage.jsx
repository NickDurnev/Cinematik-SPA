import { useEffect, useState } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { filmsByActor } from 'services/moviesIDBService';
import CardList from 'components/CardList';
import MovieCard from 'components/MovieCard';
import { GalleryButton } from './ActorsMoviesPage.styled';
import GallerySkeleton from 'components/Loaders/GallerySkeleton';
import { pageVariants, textVariants } from 'animations';

const ActorsMovies = () => {
  const [movies, setMovies] = useState([]);
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

  console.log(data);

  useEffect(() => {
    if (isSuccess && data.cast.length > 0) {
      setMovies([...movies, ...data.cast]);
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
    <motion.div
      initial={'closed'}
      animate={'open'}
      exit={'exit'}
      variants={pageVariants}
    >
      {movies.length > 0 && (
        <>
          <GalleryButton path={location?.state?.from?.location ?? '/'} />
          <CardList>
            {movies.map(movie => (
              <motion.li
                initial={'closed'}
                animate={'open'}
                exit={'exit'}
                variants={textVariants}
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
