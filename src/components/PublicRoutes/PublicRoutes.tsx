import { lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const WelcomePage = lazy(() =>
  import('../../pages/WelcomePage' /* webpackChunkName: "welcome-page" */)
);

const LoginPage = lazy(() =>
  import('../../pages/LoginPage' /* webpackChunkName: "login-page" */)
);

const PublicRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" caseSensitive={true} element={<LoginPage />} />
        <Route path="/:dbUserID" caseSensitive={true} element={<WelcomePage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default PublicRoutes;
