
// Internal
import Navigation from './Component/Navigation';
import Videos from "./Videos"
import About from "./About"
import Home from "./Home"
import './App.css';
// import Test from "./Endpoint/Test"

// External Imports
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom/";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.GH_API_KEY;

  // Return the headers to the context so httpLink can read them.
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

// Augment the palette to include an ochre color
declare module '@mui/material/styles' {
  interface Palette {
    flair: Palette['primary'];
  }

  interface PaletteOptions {
    flair?: PaletteOptions['primary'];
  }
}

// Update the component's color options to include a flair option.
declare module '@mui/material/ToggleButtonGroup' {
  interface ToggleButtonGroupPropsColorOverrides {
    flair: true;
  }
}

const theme = createTheme({
  palette: {
    flair: {
      main: '#00eeff',
      // light: '#',
      // dark: '#',
      // contrastText: '#',
    },
  },
});


function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Navigation />
          <Routes>
            <Route
              path="/"
              element={
                <Home />
              }
            />
            <Route
              path="/about"
              element={
                <About />
              }
            />
            <Route
              path="/videos"
              element={
                <Videos />
              }
            />
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Routes>
        </ThemeProvider >
      </ApolloProvider>
    </BrowserRouter>
  )
}

export default App;
