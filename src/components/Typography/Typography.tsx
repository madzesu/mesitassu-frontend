import React, { ReactElement } from 'react';
import { createUseStyles } from 'react-jss';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'button';

type TypographyProps = {
  variant?: TypographyVariant
  children: string | number | ReactElement
  pressed?: boolean
}

const useStyles = createUseStyles(theme => ({
  ...theme.typography,
}))

const Typography: React.FC<TypographyProps> = ({pressed, variant, children, ...props }) => {
  const classes = useStyles();

  const getElementProps = () => ({
    className: [classes[variant || 'body1'], pressed ? 'pressed' : ''].join(' '),
    ...props
  });

  switch (variant) {
    case 'h1':
      return <h1 {...getElementProps()}>{children}</h1>;
    case 'h2':
      return <h2 {...getElementProps()}>{children}</h2>;
    case 'h3':
      return <h3 {...getElementProps()}>{children}</h3>;
    case 'h4':
      return <h4 {...getElementProps()}>{children}</h4>;
    case 'h5':
      return <h5 {...getElementProps()}>{children}</h5>;
    case 'h6':
      return <h6 {...getElementProps()}>{children}</h6>;
    case 'body1':
      return <p {...getElementProps()}>{children}</p>;
    case 'body2':
      return <p {...getElementProps()}>{children}</p>;
    case 'button':
      return <span {...getElementProps()}>{children}</span>
    default:
      return <p {...getElementProps()}>{children}</p>;
  }
};

Typography.defaultProps = {
  variant: 'body1',
};

export default Typography;
