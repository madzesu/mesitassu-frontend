import React from 'react';
import { useTranslation } from 'react-i18next';
import { createUseStyles } from 'react-jss';
import { useLocation } from 'react-router-dom';
import { LANGUAGES, ROUTES } from 'utils/constants';
import Button from 'components/Button';
import NavigationLink from 'components/NavigationLink';
import Typography from 'components/Typography';

const useStyles = createUseStyles((theme) => ({
  container: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  },
  linksContainer: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const NavigationBar: React.FC = () => {
  const { i18n } = useTranslation();
  const location = useLocation()
  const classes = useStyles();

  const handleLanguageChange = (languageKey: string) => {
    i18n.changeLanguage(languageKey);
  };

  const getButtonProps = (languageKey: string) => ({
    onClick: () => handleLanguageChange(languageKey),
    pressed: i18n.language === languageKey,
    children: (
      <Typography
        variant="button"
        pressed={i18n.language === languageKey}
      >
        {languageKey}
      </Typography>
    ),
  });

  const isActive = (routePath: string) => {
    console.log('location.pathname', location.pathname);
    if (location.pathname === '/' && routePath === ROUTES.HOME) {
      return true;
    }
    return routePath !== ROUTES.HOME && location.pathname.includes(routePath);
  };

  return (
    <div className={classes.container}>
      <div className={classes.linksContainer}>
        <NavigationLink to={ROUTES.HOME} isActive={isActive(ROUTES.HOME)}>
          home
        </NavigationLink>
        <NavigationLink to={ROUTES.ABOUT} isActive={isActive(ROUTES.ABOUT)}>
          about
        </NavigationLink>
        <NavigationLink to={ROUTES.CONTACT} isActive={isActive(ROUTES.CONTACT)}>
          contact
        </NavigationLink>
      </div>
      <div>
        <Button {...getButtonProps(LANGUAGES.EN)} />
        <Button {...getButtonProps(LANGUAGES.FI)} />
      </div>
    </div>
  );
};

export default NavigationBar;
