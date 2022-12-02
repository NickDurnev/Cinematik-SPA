import { Wrap } from './Warning.styled';

const URL = process.env.REACT_APP_LANDING_PAGE_URL;

const Warning = () => (
  <Wrap>
    <p>Please, follow this link and verify </p>
    <a href={URL}>Click me</a>
  </Wrap>
);

export default Warning;
