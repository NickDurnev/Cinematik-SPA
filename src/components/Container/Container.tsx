import PropTypes from 'prop-types';
import { ReactNode, FC } from 'react';
import Wrap from './Container.styled';

interface IProps {
  children: ReactNode,
  userID?: string,
}

const Container = ({ children, userID }: IProps) => {
  return (
    <Wrap userID={userID ?? ''}>{children}</Wrap>
  )
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
