import { useInfiniteQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import InfiniteScroll from 'react-infinite-scroller';
import ThreeDots from 'components/Loaders/Loader';
import Notify from 'components/Notify';
import { movieReviews } from 'services/moviesApi';
import {
  List,
  Item,
  AvatarContainer,
  Avatar,
  Info,
  Date,
  Name,
} from './Reviews.styled';
import { FaUserCircle } from 'react-icons/fa';

const Reviews = () => {
  const { movieId } = useParams();

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
    if (data.pages[0].results.length === 0) {
      return (
        <Notify>
          <h2>We don't have any reviews for this movie</h2>
          <SentimentVeryDissatisfiedIcon sx={{ fontSize: 70, mt: 1 }} />
        </Notify>
      );
    }

    console.log(data);
    return (
      <InfiniteScroll hasMore={hasNextPage} loadMore={fetchNextPage}>
        {data.pages.map(({ results, nextPage }) => (
          <List key={`id${nextPage}`}>
            {results.map(
              ({ author, content, created_at, id, author_details }) => {
                const { avatar_path } = author_details;
                let formattedPath = null;
                if (avatar_path) {
                  formattedPath = avatar_path.replace('/', '');
                }
                return (
                  <Item key={id}>
                    <div>
                      <AvatarContainer>
                        {avatar_path &&
                        formattedPath.includes('www.gravatar.com') ? (
                          <Avatar src={formattedPath} alt="User avatar" />
                        ) : (
                          <FaUserCircle size="60"></FaUserCircle>
                        )}
                      </AvatarContainer>
                    </div>
                    <Info>
                      <Date>{created_at.substr(0, 10)}</Date>
                      <Name>{author}</Name>
                      <p>{content}</p>
                    </Info>
                  </Item>
                );
              }
            )}
          </List>
        ))}
      </InfiniteScroll>
    );
  }
};

export default Reviews;
