import { motion } from 'framer-motion';
//#LocalStyles
import { Background } from './LoginPage.styled';
import { pageVariants } from 'helpers/animations';
//#Componets
import Modal from 'components/Modal';
import Warning from 'components/Warning';

const LoginPage = () => {
  return (
    <>
      <motion.div
        initial={'closed'}
        animate={'open'}
        exit={'exit'}
        variants={pageVariants}
      >
        <Background>
          <Modal padding={'30px'} positionY={'30%'} positionX={'50%'}>
            <Warning />
          </Modal>
        </Background>
      </motion.div>
    </>
  );
};

export default LoginPage;
