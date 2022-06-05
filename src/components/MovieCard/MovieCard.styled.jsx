import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    width: 60px;
    display: flex;
    padding: 5px;
    justify-content: space-around;
    align-items: center;
    background-color: #e2d5d5a6;
    border-radius: 10px;
  }

  & > div > p {
    font-weight: 500;
    color: #3d3434;
  }

  & > p {
    margin-top: 10px;
    font-size: 1.2rem;
    font-weight: 500;
    color: #4e4747;
  }
`;
