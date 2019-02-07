// @flow

import type {Props as THeadProps} from './thead';
import type {Props as ShapeProps} from './shape';
import type {CellAlignType} from './cell';

import React from 'react';
import TableShape from './shape';
import THead from './thead';
import Cell from './cell';

type Props = THeadProps &
  ShapeProps &
  CellAlignType & {
    fullWidth: boolean,
    data: Array<{
      key: string | number
    }>
  };

const Table = ({columns, data, align, ...rest}: Props): React$Node => (
  <TableShape {...rest}>
    <THead columns={columns} align={align} />
    {data.map(({key, ...item}) => (
      <tr key={key}>
        {Object.entries(item).map(([key, value]) => (
          <Cell key={key} align={align}>
            {value}
          </Cell>
        ))}
      </tr>
    ))}
  </TableShape>
);

export default Table;
