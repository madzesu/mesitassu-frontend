import React from 'react';
import { createUseStyles } from 'react-jss';
import AppRouter from 'components/AppRouter';
import './App.css';

const useStyles = createUseStyles(theme => ({
  container: {
    background: theme.colors.primary.main,
    height: '100vh',
    width: '100vw',
  }
}));

const AppContent: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <AppRouter />
    </div>
  );
}

export default AppContent;
