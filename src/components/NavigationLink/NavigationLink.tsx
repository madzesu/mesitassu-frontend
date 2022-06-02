import React from 'react';
import omit from 'lodash/omit';
import { createUseStyles } from 'react-jss';
import { NavLink, NavLinkProps } from 'react-router-dom';

interface NavigationLinkProps extends NavLinkProps {
  isActive?: boolean
  className?: string
}

const useStyles = createUseStyles(({ colors, spacing, boxShadow, borderRadius }) => ({
  link: {
    color: colors.primary.light,
    textDecoration: 'none',
    textAlign: 'center',
    minWidth: spacing(14),
    minHeight: spacing(5),
    padding: `${spacing(1.5)}px ${spacing(2.5)}px`,
    fontSize: '2rem',
    margin: `0px ${spacing(1.5)}px`,
    borderRadius: borderRadius.default,
    transition: 'all 0.3s ease-in-out',
    boxShadow: boxShadow.flat,
    textShadow: '-1px -1px 1px rgba(255, 255, 225, 0.35), 2px 2px 2px rgba(0, 0, 0, 0.35)',
    '&.pressed': {
      color: colors.white,
      boxShadow: boxShadow.pressed,
    }
  },
}));

const NavigationLink: React.FC<NavigationLinkProps> = ({ isActive, className, ...props }) => {
  const classes = useStyles();
  const omittedProps = omit(props, ['isActive']) as NavLinkProps

  const classNames = [classes.link];
  if (isActive) {
    classNames.push('pressed');
  }
  if (className) {
    classNames.push(className);
  }

  return (
    <NavLink className={classNames.join(' ')} {...omittedProps} />
  );
};

NavigationLink.defaultProps = {
  isActive: false,
};

export default NavigationLink;
