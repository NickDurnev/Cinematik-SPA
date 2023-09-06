import { FC } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { IActor } from 'services/interfaces';
//#Styles
import {
  Container,
  MainInfo,
  InfoWrap,
} from 'components/MovieInfo/MovieInfo.styled';
import { ImageWrap, StyledLink } from './ActorInfo.styled';
import DefaultActorImage from 'components/StandartImages/DefaultActorImage';

const ActorInfo: FC<{ data: IActor }> = ({ data }) => {
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
            {birthday ? <p>Birthday date:</p> : null}
            {deathday ? <p>Deathday:</p> : null}
            {gender ? <p>Gender:</p> : null}
            {place_of_birth ? <p>Place of birthday:</p> : null}
            {popularity ? <p>Rating:</p> : null}
          </li>
          <li>
            {birthday && <p> {birthday}</p>}
            {deathday && <p>{deathday}</p>}
            {gender === 1 ? <p>Female</p> : <p>Male</p>}
            {place_of_birth && <p>{place_of_birth}</p>}
            {popularity ? <p>{popularity.toFixed(1)}</p> : null}
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

export default ActorInfo;
