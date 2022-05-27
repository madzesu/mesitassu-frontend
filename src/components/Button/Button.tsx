import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(({
  spacing,
  colors,
  borderRadius,
  boxShadow,
}) => ({
  button: {
    minWidth: spacing(8),
    minHeight: spacing(8),
    border: 'none',
    borderRadius: borderRadius.default,
    padding: `${spacing(2)}px ${spacing(2)}px`,
    margin: `${spacing(2)}px ${spacing(1.5)}px`,
    background: colors.primary.main,
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    color: colors.primary.main,
    boxShadow: boxShadow.flat,
    '&.pressed': {
      boxShadow: boxShadow.pressed,
      color: colors.white,
    },
  },
}));

interface ButtonProps extends
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  React.AriaAttributes {
  pressed?: boolean
}

const Button: React.FC<ButtonProps> = ({
  className,
  pressed,
  ...props
}) => {
  const classes = useStyles();

  const classNames = [classes.button];
  if (className) {
    classNames.push(className);
  }

  if (pressed) {
    classNames.push('pressed');
  }

  return <button className={classNames.join(' ')} {...props} />
}

export default Button;
