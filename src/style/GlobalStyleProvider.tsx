import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
    ${reset}
    html {}
    body {}
`;

const GlobalStyleProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme.LIGHT_MODE}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default GlobalStyleProvider;
