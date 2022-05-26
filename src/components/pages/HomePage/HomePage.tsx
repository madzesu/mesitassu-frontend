import React from 'react';
import { useTranslation } from 'react-i18next';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      home page
      {t('app_header')}
      </div>
  );
};

export default HomePage;
