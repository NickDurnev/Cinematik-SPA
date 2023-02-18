import PropTypes from 'prop-types';
import { useLocation, useParams } from 'react-router-dom';
//#Styles
import {
  Container,
  MainInfo,
  InfoWrap,
} from 'components/MovieInfo/MovieInfo.styled';
import { ImageWrap, StyledLink } from './ActorInfo.styled';
import DefaultActorImage from 'components/defaultImages/DefaultActorImage';

const ActorInfo = ({ data }) => {
  const location = useLocation();
  const { actorId } = useParams();

  const {
    biography,
    profile_path,
    name,
    birthday,
    deathday,
    gender,
    place_of_birth,
    popularity,
  } = data;

  return (
    <Container>
      <ImageWrap profile_path={profile_path}>
        {profile_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w400${profile_path}`}
            alt={name}
          />
        ) : (
          <DefaultActorImage />
        )}
      </ImageWrap>
      <InfoWrap>
        <h2>{name}</h2>
        <p>{biography}</p>
        <MainInfo>
          <li>
            {birthday && <p>Birthday date:</p>}
            {deathday && <p>Deathday:</p>}
            {gender && <p>Gender:</p>}
            {place_of_birth && <p>Place of birthday:</p>}
            {popularity && <p>Rating:</p>}
          </li>
          <li>
            {birthday && <p> {birthday}</p>}
            {deathday && <p>{deathday}</p>}
            {gender === 1 ? <p>Female</p> : <p>Male</p>}
            {place_of_birth && <p>{place_of_birth}</p>}
            {popularity && <p>{popularity.toFixed(1)}</p>}
          </li>
        </MainInfo>
        <StyledLink
          to={`/moviesbyactor/${actorId}`}
          state={{
            from: {
              location,
            },
          }}
        >
          Movies
        </StyledLink>
      </InfoWrap>
    </Container>
  );
};

ActorInfo.propTypes = {
  data: PropTypes.shape({
    biography: PropTypes.string,
    profile_path: PropTypes.string,
    name: PropTypes.string,
    birthday: PropTypes.string,
    deathday: PropTypes.string,
    gender: PropTypes.number,
    place_of_birth: PropTypes.string,
    popularity: PropTypes.number,
    id: PropTypes.number.isRequired,
  }),
};

export default ActorInfo;
