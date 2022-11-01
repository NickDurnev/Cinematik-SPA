import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
  createTheme,
} from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { lazy, Suspense, useState } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import useLocalStorage from 'hooks/useLocalStorage';
import { light, dark } from '../themes';
import { Wrap } from './App.styled';
import Container from './Container';
import Appbar from './AppBar/Appbar';
import AnimatedRoutes from './AnimatedRoutes/AnimatedRoutes';
import ThreeDots from './Loaders/Loader';

const WelcomePage = lazy(() =>
  import(
    '../pages/WelcomePage/WelcomePage' /* webpackChunkName: "welcome-page" */
  )
);

export function App() {
  const queryClient = new QueryClient();
  const [isWelcomePage, setIsWelcomePage] = useState(true);

  const [theme, setTheme] = useLocalStorage('theme', light);

  const muiTheme = createTheme({
    ...theme,
  });

  function changeTheme() {
    theme === light ? setTheme(dark) : setTheme(light);
  }

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={muiTheme}>
          <QueryClientProvider client={queryClient}>
            <Wrap>
              {isWelcomePage ? (
                <WelcomePage
                  setIsWelcomePage={bool => setIsWelcomePage(bool)}
                />
              ) : (
                <Appbar theme={theme} changeTheme={changeTheme} />
              )}
              {!isWelcomePage && (
                <Container>
                  <Suspense fallback={<ThreeDots />}>
                    <AnimatedRoutes />
                  </Suspense>
                </Container>
              )}
            </Wrap>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
          <ToastContainer />
        </ThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
}
