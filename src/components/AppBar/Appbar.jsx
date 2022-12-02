import PropTypes from 'prop-types';
import { useState } from 'react';
import Navigation from 'components/Navigation';
import Modal from 'components/Modal';
import Warning from 'components/Warning';
import useLocalStorage from 'hooks/useLocalStorage';
import ThemeSwitcher from '../ThemeSwitcher';
import { StickyWrap, Header } from './Appbar.styled';

const Appbar = ({ theme, changeTheme }) => {
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [userId] = useLocalStorage('userID', null);

  const handleVerifyToggle = bool => {
    if (!bool) {
      setIsVerifyModalOpen(false);
      return;
    }
    setIsVerifyModalOpen(true);
  };

  return (
    <>
      <Header>
        <StickyWrap>
          <ThemeSwitcher theme={theme} changeTheme={changeTheme} />
          <Navigation handleVerifyToggle={bool => handleVerifyToggle(bool)} />
        </StickyWrap>
      </Header>
      {isVerifyModalOpen && (
        <Modal onModal={bool => handleVerifyToggle(bool)} padding={'30px'}>
          <Warning />
        </Modal>
      )}
    </>
  );
};

Appbar.propTypes = {
  theme: PropTypes.object.isRequired,
  changeTheme: PropTypes.func.isRequired,
};

export default Appbar;
