import styled from 'styled-components';

const CardWrap = styled.div`
  width: calc((100vw - 20px) / 8);
  margin: 10px;

  & > img {
    width: 100%;
    height: auto;
  }
`;

export default CardWrap;
