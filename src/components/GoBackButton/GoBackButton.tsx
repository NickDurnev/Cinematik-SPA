import { Link } from 'react-router-dom';
import { ReactComponent as BackIcon } from '../../images/icons/BackIcon.svg';
import Wrap from './GoBackButton.styled';

interface IProps {
  path: string | object;
  state: {
    from: {
      location: object;
    }
  };
}

const GoBackButton = ({ path, state }: IProps) => (
  <Link to={path} state={{ state }}>
    <Wrap>
      <BackIcon />
    </Wrap>
  </Link>
);

export default GoBackButton;
