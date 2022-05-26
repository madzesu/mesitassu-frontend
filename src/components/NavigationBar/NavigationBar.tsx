import React, { CSSProperties } from 'react';
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
    </div>
  );
};

export default NavigationBar;
