import React from 'react';
import { ThemeProvider } from 'react-jss';
import theme from '../../utils/theme';
import AppContent from './AppContent';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
