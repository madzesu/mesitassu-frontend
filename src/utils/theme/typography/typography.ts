import colors from "../colors";

const typography = {
  h1: {
    fontSize: '6rem',
    textShadow: `
      -4px -4px 8px rgba(255, 255, 225, 0.35),
      4px 4px 8px rgba(0, 0, 0, 0.35)
    `,
    color: colors.primary.main,
  },
  h2: {
    fontSize: '3.75rem',
    textShadow: `
      -3px -3px 6px rgba(255, 255, 225, 0.35),
      3px 3px 6px rgba(0, 0, 0, 0.35)
    `,
    color: colors.primary.main,
  },
  h3: {},
  h4: {},
  h5: {},
  h6: {},
  body1: {},
  body2: {},
  button: {
    textTransform: 'uppercase',
    fontWeight: 600,
    fontSize: '1rem',
    textShadow: `
      -1px -1px 1px rgba(255, 255, 225, 0.35),
      1px 1px 1px rgba(0, 0, 0, 0.35)
    `,
    '&.pressed': {
      textShadow: `
        1px 1px 1px rgba(0, 0, 0, 0.35),
        -1px -1px 1px rgba(255, 255, 225, 0.35)
      `,
    },
  },
};

export default typography;
