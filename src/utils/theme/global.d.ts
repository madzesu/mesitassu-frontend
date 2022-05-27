import colors from './colors';
import borderRadius from './borderRadius';
import spacing from './spacing';
import boxShadow from './boxShadow';

declare global {
  namespace Jss {
    export interface Theme {
      colors: typeof colors
      borderRadius: typeof borderRadius
      spacing: typeof spacing
      boxShadow: typeof boxShadow
    }
  }
}

export {}
