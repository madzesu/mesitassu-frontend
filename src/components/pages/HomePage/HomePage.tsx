import React from 'react';
import { useTranslation } from 'react-i18next';
import Typography from 'components/Typography';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h1">{t('app_header')}</Typography>
    </div>
  );
};

export default HomePage;
