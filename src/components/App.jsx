import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Suspense } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import 'react-toastify/dist/ReactToastify.css';
import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
  createTheme,
} from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import useLocalStorage from 'hooks/useLocalStorage';
import { light, dark } from '../themes';
import { Wrap, StyledToastContainer } from './App.styled';
import Container from './Container';
import Appbar from './AppBar/Appbar';
import AnimatedRoutes from './AnimatedRoutes/AnimatedRoutes';
import ThreeDots from './Loaders/Loader';

export function App() {
  const queryClient = new QueryClient();
  const [location, setLocation] = useState('/welcome');
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
              {!location.includes('welcome') && (
                <Appbar theme={theme} changeTheme={changeTheme} />
              )}
              <Container>
                <Suspense fallback={<ThreeDots />}>
                  <AnimatedRoutes setLocation={path => setLocation(path)} />
                </Suspense>
              </Container>
            </Wrap>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
          <StyledToastContainer
            autoClose={3000}
            position={'top-center'}
            limit={1}
          />
        </ThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
}
