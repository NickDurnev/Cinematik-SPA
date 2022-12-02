import { Wrap } from './Warning.styled';

const URL = 'https://cinematik.vercel.app/';

const Warning = () => (
  <Wrap>
    <p>Please, follow this link and verify </p>
    <a href={URL}>Click me</a>
  </Wrap>
);

export default Warning;
