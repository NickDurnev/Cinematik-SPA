import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { fetchCategoryMovies } from '../../services/moviesIDBService';
import CardList from 'components/CardList';
import MovieCard from 'components/MovieCard';
import GoBackButton from 'components/GoBackButton/GoBackButton';
import GallerySkeleton from 'components/loaders/GallerySkeleton';
import { FetchMarker } from './CategoryMoviesPage.styled';
import { pageVariants, itemVariants } from 'helpers/animations';

const CategoryMoviesPage = ({ category }) => {
  const [movies, setMovies] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);

  const location = useLocation();

  const { ref: ListRef, inView } = useInView({
    threshold: 0.1,
  });

  const { data, error, fetchNextPage, isLoading, isError, isSuccess } =
    useInfiniteQuery(['topRatedMovies', { category }], fetchCategoryMovies, {
      staleTime: 60000,
      cacheTime: 60000,
      getNextPageParam: pages => {
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
    if (movies.length !== 0 && inView) {
      fetchNextPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  useEffect(() => {
    if (isSuccess) {
      setMovies([...movies, ...data.pages[pageIndex].results]);
      setPageIndex(pageIndex + 1);
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
    <>
      <motion.div
        initial={'closed'}
        animate={'open'}
        exit={'exit'}
        variants={pageVariants}
      >
        <GoBackButton path={'/'} />
        {movies.length > 0 && (
          <CardList>
            {movies.map(movie => (
              <motion.li
                initial={'closed'}
                animate={'open'}
                exit={'exit'}
                variants={itemVariants(0)}
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
      <FetchMarker ref={ListRef}></FetchMarker>
    </>
  );
};

CategoryMoviesPage.propTypes = {
  category: PropTypes.string.isRequired,
};

export default CategoryMoviesPage;
