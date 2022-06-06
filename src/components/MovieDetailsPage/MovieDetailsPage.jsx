import { useParams, Link, Route, Routes } from 'react-router-dom';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import ThreeDots from 'components/MovieCardSkeleton';
import { movieDetails } from 'services/api';
import MovieInfo from 'components/MovieInfo';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const { data, error, isLoading, isError, isSuccess } = useQuery(
    ['movieDetails', { movieId }],
    movieDetails,
    { staleTime: 60000, cacheTime: 60000 }
  );

  if (isLoading) {
    return <ThreeDots />;
  }

  if (isError) {
    return toast.error(`Ошибка: ${error.message}`);
  }

  if (isSuccess) {
    return (
      <>
        <MovieInfo movieData={data} />
        <div>
          <p>Additional imformation</p>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </div>
        <Routes>
          <Route path="/cast" element={<Cast />}></Route>
          <Route path="/reviews" element={<Reviews />}></Route>
        </Routes>
      </>
    );
  }
};

export default MovieDetailsPage;
