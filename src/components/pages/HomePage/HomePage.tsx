import React from 'react';
import { useTranslation } from 'react-i18next';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  h1: {
    fontSize: '8rem',
  }
});

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.h1}>{t('app_header')}</h1>
    </div>
  );
};

export default HomePage;
