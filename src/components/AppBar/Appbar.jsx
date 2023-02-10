import Navigation from 'components/Navigation';
import { StickyWrap, Header } from './Appbar.styled';

const Appbar = () => {
  return (
    <>
      <Header>
        <StickyWrap>
          <Navigation />
        </StickyWrap>
      </Header>
    </>
  );
};

export default Appbar;
