// @flow

import type {ColorsCollection, OffsetsCollection} from './types';

export const colors: ColorsCollection = {
  primary: '#33C3F0',
  primaryDarken: '#1EAEDB',
  grayLight: '#bbb',
  gray: '#888',
  darkGray: '#555'
};

export const offsets: OffsetsCollection = {
  sm: '10px',
  md: '20px',
  lg: '30px'
};

export const baseTransition: string = '.2s ease-in-out';

export const baseFontMamily: string =
  '"Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;';
