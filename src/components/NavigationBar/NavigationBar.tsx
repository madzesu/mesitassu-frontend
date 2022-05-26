import React, { CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';

type LinkStyleArgs = {
  isActive: boolean
}

type GetLinkStyle = (options: LinkStyleArgs) => CSSProperties;

const getLinkStyle: GetLinkStyle = ({ isActive }) =>
  isActive
    ? ({ textDecoration: 'underline' })
    : ({ textDecoration: 'none' });

const NavigationBar: React.FC = () => {
  const { i18n } = useTranslation()
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
        <button onClick={() => i18n.changeLanguage('en')}>EN</button>
        <button onClick={() => i18n.changeLanguage('fi')}>FI</button>
      </div>
    </div>
  );
};

export default NavigationBar;
