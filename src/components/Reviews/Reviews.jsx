import { useInfiniteQuery } from 'react-query';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ThreeDots from 'components/MovieCardSkeleton';
import InfiniteScroll from 'react-infinite-scroller';
import { movieReviews } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  //   const toastId = useRef(null);

  //   const notify = () => {
  //     if (!toast.isActive(toastId.current)) {
  //       toastId.current = toast.info('Отзывы кончились');
  //     }
  //   };

  const {
    data,
    error,
    isLoading,
    isError,
    isSuccess,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(['movieReviews', { movieId }], movieReviews, {
    getNextPageParam: pages => {
      if (pages.nextPage > pages.totalPages) {
        // notify();
        return undefined;
      }
      return pages.nextPage;
    },
    staleTime: 60000,
    cacheTime: 60000,
  });

  if (isLoading) {
    return <ThreeDots />;
  }

  if (isError) {
    return toast.error(`Ошибка: ${error.message}`);
  }

  if (isSuccess) {
    return (
      <InfiniteScroll hasMore={hasNextPage} loadMore={fetchNextPage}>
        {data.pages.map(({ results, nextPage }) => (
          <ul key={`id${nextPage}`}>
            {results.map(({ author, content, created_at, id }) => (
              <li key={id}>
                <p>{author}</p>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        ))}
      </InfiniteScroll>
    );
  }
};

export default Reviews;
