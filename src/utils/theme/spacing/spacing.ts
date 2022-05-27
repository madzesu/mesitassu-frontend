type SpacingUnit = number;

export const spacingUnit: SpacingUnit = 8;

type Spacing = (count?: number) => number;

const spacing: Spacing = (count = 1) => count * spacingUnit;

export default spacing;
