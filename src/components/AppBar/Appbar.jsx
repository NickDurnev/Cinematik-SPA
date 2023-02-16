import Navigation from 'components/Navigation';
import { StickyWrap, Header, Logo } from './Appbar.styled';

const Appbar = () => {
  return (
    <>
      <Header>
        <StickyWrap>
          <Logo />
          <Navigation />
        </StickyWrap>
      </Header>
    </>
  );
};

export default Appbar;
