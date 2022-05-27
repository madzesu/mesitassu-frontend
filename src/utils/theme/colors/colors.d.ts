type ColorsBase = {
  main: string,
  light: string,
  dark: string,
}

interface PrimaryColors extends ColorsBase {}

interface SecondaryColors extends ColorsBase {}

interface TertiaryColors extends ColorsBase {}

type Colors = {
  primary: PrimaryColors
  secondary: SecondaryColors
  tertiary: TertiaryColors
  transparent: string
  white: string
};

declare const colors: Colors;
