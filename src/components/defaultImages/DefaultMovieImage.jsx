import styled from '@emotion/styled';
import { ReactComponent as Movie404Icon } from '../../images/icons/Movie404.svg';

export const IconWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const DefaultMovieImage = () => (
  <IconWrap>
    <Movie404Icon />
  </IconWrap>
);

export default DefaultMovieImage;
