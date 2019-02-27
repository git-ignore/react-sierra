// @flow

import type {ThemeProps} from '../../styles';

import React, {PureComponent} from 'react';
import styled, {css, withTheme} from 'styled-components';
import {hideVisually, lighten} from 'polished';
import Icon from '../icon';
import defaultTheme from '../../styles';

const SIZE = 18;

type CheckboxProps = {
  checked: ?boolean,
  theme: ThemeProps,
  disabled?: boolean
};

type Props = CheckboxProps & {
  children?: React$Node,
  onChange?: Function,
  defaultChecked: boolean
};

type State = {
  checked: boolean
};

// $FlowFixMe
const Checkmark = styled(Icon).attrs({
  size: SIZE,
  name: 'checkmark',
  color: '#fff'
})``;

// $FlowFixMe
const NativeInput = styled.input.attrs({type: 'checkbox'})`
  ${hideVisually()};

  &:focus + * {
    box-shadow: 0 0 0 3px
      ${({theme: {colors}}: CheckboxProps): string =>
        lighten(0.3, colors.primary)};
  }
`;

const withCheckedStyles = ({
  checked,
  disabled,
  theme: {colors}
}: CheckboxProps): Array<Function> =>
  css`
    background: ${checked ? colors.primary : lighten(0.4, colors.primary)};
    filter: ${disabled ? 'grayscale(70%)' : 'initial'};
    opacity: ${disabled ? 0.6 : 1};

    ${Checkmark} {
      visibility: ${checked ? 'visible' : 'hidden'};
    }
  `;

const withThemeProps = ({theme: {offsets, transitions}}) => `
    margin-right: ${offsets.xs};
    transition: opacity ${transitions.fast}, filter ${transitions.fast};
  `;

const Checkbox = styled.div`
  display: inline-block;
  width: ${SIZE}px;
  height: ${SIZE}px;
  border-radius: 3px;
  line-height: ${SIZE - 3}px; /* todo */
  ${withCheckedStyles};
  ${withThemeProps};
`;

const Inner = styled.span`
  display: inline-block;
`;

class Wrapper extends PureComponent<Props, State> {
  static defaultProps = {
    theme: defaultTheme,
    defaultChecked: false
  };

  state = {
    checked: this.props.defaultChecked
  };

  get isChecked() {
    if (typeof this.props.checked === 'boolean') {
      return this.props.checked;
    }

    return this.state.checked;
  }

  toggle = e => {
    if (this.props.disabled) {
      return;
    }

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(e);
    }

    return this.setState({checked: !this.isChecked});
  };

  render = () => {
    const {children, defaultChecked, ...rest} = this.props;
    const passedProps = {
      checked: this.isChecked,
      ...rest
    };

    return (
      <label>
        <NativeInput {...passedProps} onChange={this.toggle} />
        <Checkbox {...passedProps}>
          <Checkmark />
        </Checkbox>

        {children && <Inner>{children}</Inner>}
      </label>
    );
  };
}

export default withTheme(Wrapper);
