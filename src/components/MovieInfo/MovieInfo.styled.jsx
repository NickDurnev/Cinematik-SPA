import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 10px;

  & > img {
    width: 300px;
    height: auto;
  }
`;

export const InfoWrap = styled.div`
  max-width: 40%;
  & > h1,
  h2 {
    margin-bottom: 10px;
  }

  & h2 {
    font-size: 20px;
    font-weight: 500;
    font-style: italic;
    color: #817d7d;
  }

  & > p {
    line-height: 1.5;
    margin-bottom: 10px;
  }
`;

export const MainInfo = styled.ul`
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;

  & > li:first-child {
    font-weight: 600;
    text-align: left;
    margin-right: 20px;
  }

  & > li:last-child {
    text-align: right;
  }

  & > li > p + p {
    margin-top: 10px;
  }
`;

export const MovieGenresList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 5px;

  & > li {
    padding: 5px;
    background-color: var(--main-bcg-color);
    color: var(--add-text-color);
    border-radius: 5px;
  }
`;
