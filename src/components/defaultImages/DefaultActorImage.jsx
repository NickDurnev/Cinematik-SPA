import styled from '@emotion/styled';
import { ReactComponent as Actor404Icon } from '../../images/icons/Actor404.svg';

export const IconWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #666666;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const DefaultActorImage = () => (
  <IconWrap>
    <Actor404Icon />
  </IconWrap>
);

export default DefaultActorImage;
