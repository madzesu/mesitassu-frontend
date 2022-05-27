// ToDo: generate rgba values from colors.primary.main.
const boxShadow = {
  flat: `
    inset 3px 3px 6px 0 rgba(255, 255, 200, 0),
    inset -3px -3px 6px 0 rgba(0, 0, 0, 0),
    3px 3px 8px 0 rgba(0, 0, 0, 0.2),
    -6px -6px 14px 0 rgba(255, 255, 225, 0.15)
  `,
  pressed: `
    inset 3px 3px 6px 0 rgba(0, 0, 0, 0.25),
    inset -3px -3px 12px 0 rgba(255, 255, 225, 0.15),
    4px 4px 6px 0 rgba(0, 0, 0, 0),
    -3px -3px 16px 0 rgba(255, 255, 200, 0)
  `,
};

export default boxShadow;
