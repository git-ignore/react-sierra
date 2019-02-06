// @flow

import type {CellAlignType} from './cell';

import React from 'react';
import Cell from './cell';

export type Props = CellAlignType & {
  columns: Array<{
    title: string,
    dataIndex: string,
    key: string
  }>
};

const THead = ({columns, align}: Props) => (
  <thead>
    <tr>
      {columns.map(({title, dataIndex, key}, idx) => (
        <Cell key={`thead-${dataIndex}-${key}-${idx}`} align={align} isHeading>
          {title}
        </Cell>
      ))}
    </tr>
  </thead>
);

export default THead;
