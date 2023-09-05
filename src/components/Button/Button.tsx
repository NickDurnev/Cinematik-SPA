import { ReactNode, FC } from 'react';
import Wrap from './Button.styled';

interface IProps {
  children: ReactNode,
  onClick: () => void,
  padding?: string,
}

const Button: FC<IProps> = ({ children, onClick, padding = '5px' }) => (
  <Wrap type="button" onClick={onClick} padding={padding}>
    {children}
  </Wrap>
);

export default Button;
