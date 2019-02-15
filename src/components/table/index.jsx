// @flow

import type {Props as THeadProps} from './thead';
import type {Props as ShapeProps} from './shape';
import type {CellAlignType} from './cell';

import React, {PureComponent} from 'react';
import TableShape from './shape';
import THead from './thead';
import Cell from './cell';

type DataItem = {
  key: string | number,
  dataIndex: string | number
};
type Props = THeadProps &
  ShapeProps &
  CellAlignType & {
    fullWidth: boolean,
    data: Array<DataItem>
  };

type State = {
  order: Array<string | number>
};

class Table extends PureComponent<Props, State> {
  state = {
    order: []
  };

  set order(order: Array<any>): void {
    this.setState({order});
  }

  componentDidMount(): void {
    this.order = this.props.columns.map(({dataIndex}) => dataIndex);
  }

  render(): React$Node {
    const {columns, data, align, ...rest} = this.props;

    return (
      <TableShape {...rest}>
        <THead columns={columns} align={align} />
        <tbody>
          {data.map(
            ({key, ...item}: DataItem): React$Node => (
              <tr key={`table-row-${key}`}>
                {this.state.order.map(prop => (
                  <Cell key={prop} align={align}>
                    {item[prop]}
                  </Cell>
                ))}
              </tr>
            )
          )}
        </tbody>
      </TableShape>
    );
  }
}

export default Table;
