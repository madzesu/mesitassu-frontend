import React, { CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';
import { createUseStyles } from 'react-jss';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';

const useStyles = createUseStyles((theme) => ({
  languageButton: {
    width: theme.spacing(7.5),
    height: theme.spacing(7.5),
    color: theme.colors.white,
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: theme.borderRadius.default,
    padding: `${theme.spacing()}px ${theme.spacing(1.5)}px`,
    margin: `${theme.spacing()}px ${theme.spacing(1.5)}px`,
    background: theme.colors.primary.main,
    transition: 'all 0.3s ease-in-out',
    boxShadow: theme.boxShadow.flat,
    '&.active': {
      boxShadow: theme.boxShadow.pressed,
    },
  },
}));

type LinkStyleArgs = {
  isActive: boolean
}

type GetLinkStyle = (options: LinkStyleArgs) => CSSProperties;

const getLinkStyle: GetLinkStyle = ({ isActive }) =>
  isActive
    ? ({ textDecoration: 'underline' })
    : ({ textDecoration: 'none' });

const NavigationBar: React.FC = () => {
  const { i18n } = useTranslation();
  const selectedLanguage = i18n.language;
  const classes = useStyles();

  const getButtonProps = (languageKey: string) => ({
    onClick: () => i18n.changeLanguage(languageKey),
    className: [classes.languageButton, selectedLanguage === languageKey ? 'active' : ''].join(' '),
    children: <span>{languageKey}</span>
  })

  return (
    <div>
      <NavLink to={ROUTES.HOME} style={getLinkStyle}>
        home
      </NavLink>
      <NavLink to={ROUTES.ABOUT} style={getLinkStyle}>
        about
      </NavLink>
      <NavLink to={ROUTES.CONTACT} style={getLinkStyle}>
        contact
      </NavLink>
      <div>
        <button {...getButtonProps('en')} />
        <button {...getButtonProps('fi')} />
      </div>
    </div>
  );
};

export default NavigationBar;
