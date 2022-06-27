import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 50vw -10px;
  padding: 20px 0;

  & > img {
    width: 300px;
    height: auto;
  }
`;

export const InfoWrap = styled.div`
  max-width: 80%;
  padding: 20px;
  & > h1,
  h2 {
    margin-bottom: 20px;
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
  width: 40%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;

  & > li {
    padding: 5px;
    margin-bottom: 10px;
    background-color: var(--main-bcg-color);
    color: var(--add-text-color);
    border-radius: 5px;
  }
`;
