import { ReactNode} from 'react';
import Wrap from './Button.styled';

interface IProps {
  children: ReactNode,
  onClick: () => void,
  padding?: string,
}

const Button = ({ children, onClick, padding = '5px' } : IProps) => (
  <Wrap type="button" onClick={onClick} padding={padding}>
    {children}
  </Wrap>
);

export default Button;
