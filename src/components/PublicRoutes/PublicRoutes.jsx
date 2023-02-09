import { lazy, Suspense } from 'react';
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
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/:dbUserID" exact element={<WelcomePage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default PublicRoutes;
