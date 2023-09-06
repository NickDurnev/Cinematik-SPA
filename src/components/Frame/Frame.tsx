import { FC } from 'react';
import { Wrap } from './Frame.styled';

interface IProps {
  youtubeURL: string,
  movieTrailer: string
}

const Frame: FC<IProps> = ({ youtubeURL, movieTrailer }) => {
  return (
    <Wrap
      src={`${youtubeURL}${movieTrailer}?autoplay=0&mute=0&controls=1`}
      title="video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

export default Frame;
