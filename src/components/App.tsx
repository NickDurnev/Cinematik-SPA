import { QueryClient, QueryClientProvider } from 'react-query';
import { useState, Suspense } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
  createTheme,
} from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import 'react-toastify/dist/ReactToastify.css';
//#Services
import { ITheme } from 'services/interfaces';
import useLocalStorage from 'hooks/useLocalStorage';
//#Styles
import { light, dark } from '../helpers/themes';
import { Wrap, StyledToastContainer } from './App.styled';
//#Componets
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import Header from './Header';
import Container from './Container';
import Appbar from './AppBar/Appbar';
import ThreeDots from './Loaders/Loader';

interface IThemes {
  light: ITheme, dark: ITheme
}

const themes: IThemes = { light, dark };

export function App() {
  const queryClient = new QueryClient();
  const [query, setQuery] = useState('');
  const [userID] = useLocalStorage('userID', null);
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  const muiTheme = createTheme({
    ...(themes[theme as 'dark' | 'light']),
  });

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={muiTheme}>
          <QueryClientProvider client={queryClient}>
            {userID ? (
              <Wrap>
                <Appbar />
                <Container>
                  <Header
                    theme={theme}
                    setTheme={setTheme}
                    onChange={value => setQuery(value)}
                  />
                  <Suspense fallback={<ThreeDots />}>
                    <PrivateRoutes query={query} />
                  </Suspense>
                </Container>
              </Wrap>
            ) : (
              <Suspense fallback={<ThreeDots />}>
                <PublicRoutes />
              </Suspense>
            )}
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
