// @flow

const colors = Object.freeze({
  primary: '#33C3F0',
  primaryDarken: '#1EAEDB',
  grayLight: '#bbb',
  grayText: '#555',
  gray: '#888',
  alert: '#f50031'
});

const offsets = Object.freeze({
  sm: '10px',
  md: '20px',
  lg: '30px'
});

const transitions = Object.freeze({
  base: '.2s ease-in-out'
});

const fonts = Object.freeze({
  family: {
    base:
      '"Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;'
  }
});

const defaultTheme = {
  colors,
  offsets,
  transitions,
  fonts
};

// types
export type ColorsType = {[key: $Keys<typeof colors>]: string};
type OffsetsType = {[key: $Keys<typeof offsets>]: string};
type TransitionsType = {[key: $Keys<typeof transitions>]: string};
type FontsType = {
  family: {
    base: string
  }
};

export type ThemeProps = {
  colors: ColorsType,
  offsets: OffsetsType,
  transitions: TransitionsType,
  fonts: FontsType
};

export default defaultTheme;
