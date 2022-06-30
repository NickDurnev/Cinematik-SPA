import { useState, useRef } from 'react';
import { useParams, Route, Routes } from 'react-router-dom';
import { useQuery } from 'react-query';
import { lazy, Suspense } from 'react';
import { toast } from 'react-toastify';
import ThreeDots from 'components/Loaders/Loader';
import { movieDetails } from 'services/api';
import MovieInfo from 'components/MovieInfo';
import TrailerModal from 'components/Modal/Modal';
import { fetchMovieTrailers } from '../../services/api';

const Cast = lazy(() =>
  import('components/Cast' /* webpackChunkName: "cast" */)
);
const Reviews = lazy(() =>
  import('components/Reviews' /* webpackChunkName: "reviews" */)
);

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const youtubeURL = useRef('https://www.youtube.com/embed/');
  const [isModalOpen, setisModalOpen] = useState(false);
  const [movieTrailer, setMovieTrailer] = useState(null);

  const handleModalToggle = async bool => {
    if (!bool) {
      setisModalOpen(false);
      return;
    }
    setisModalOpen(true);
    if (!movieTrailer) {
      const trailer = await addMovieTrailer();
      sessionStorage.setItem('trailer', JSON.stringify(trailer));
      setMovieTrailer(trailer);
    }
  };

  const addMovieTrailer = async () => {
    if (!movieTrailer) {
      const trailers = await fetchMovieTrailers(movieId);
      console.log(trailers);
      const officicalTrailer = trailers.find(({ name }) =>
        name.includes('Official')
      );
      return officicalTrailer;
    }
  };

  console.log(movieTrailer);
  console.log(isModalOpen);

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
        <MovieInfo
          movieData={data}
          handleModalToggle={bool => handleModalToggle(bool)}
        />
        <Suspense fallback={<ThreeDots />}>
          <Routes>
            <Route path="/cast" element={<Cast />}></Route>
            <Route path="/reviews" element={<Reviews />}></Route>
          </Routes>
        </Suspense>
        {isModalOpen && movieTrailer && (
          <TrailerModal onModal={bool => handleModalToggle(bool)}>
            <iframe
              src={`${youtubeURL.current}${movieTrailer.key}?autoplay=0&mute=0&controls=1`}
              title="video"
              width="600"
              height="400"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </TrailerModal>
        )}
      </>
    );
  }
};

export default MovieDetailsPage;
