import PropTypes from 'prop-types';
import { useLocation, useParams } from 'react-router-dom';
import imageNotFound from '../../images/Error 404 Wallpaper.jpg';
import { InfoContainer, NavLink } from './ActorInfo.styled';
import GoBackButton from 'components/GoBackButton/GoBackButton';
import { MainInfo, InfoWrap } from 'components/MovieInfo/MovieInfo.styled';

const ActorInfo = ({ data }) => {
  const location = useLocation();
  const { actorId } = useParams();

  console.log(location);

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
    <div>
      {location.state && (
        <GoBackButton path={location?.state?.from?.location ?? '/'} />
      )}
      <InfoContainer>
        <div>
          <img
            src={
              profile_path !== null
                ? `https://image.tmdb.org/t/p/w400${profile_path}`
                : imageNotFound
            }
            alt={name}
          ></img>
        </div>
        <InfoWrap>
          <h1>{name}</h1>
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
          <NavLink
            to={`/moviesbyactor/${actorId}`}
            state={{
              from: {
                location,
                label: 'Go back to actor',
              },
            }}
          >
            Movies
          </NavLink>
        </InfoWrap>
      </InfoContainer>
    </div>
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
