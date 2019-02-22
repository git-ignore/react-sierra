/* eslint-disable */

import IconDemoCard from './components/icon-demo-card';
import DemoContainer from './components/container';
import GridDemo from './components/grid-demo';
import {GridCol, GridRow} from '../src/index';
import ThemeProvider from '../src/components/theme-provider';
import Button from '../src/components/button';

global.ThemeProvider = ThemeProvider;
global.IconDemoCard = IconDemoCard;
global.Button = Button;
global.DemoContainer = DemoContainer;
global.GridCol = GridCol;
global.GridRow = GridRow;
global.GridDemo = GridDemo;
