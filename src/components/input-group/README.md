_Component that allows to build consistent group of buttons and inputs._

```jsx
class InputGroupDemo extends React.PureComponent {
  constructor() {
    this.state = {
      from: '',
      to: ''
    };

    this.swap = this.swap.bind(this);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
  }

  swap() {
    const to = this.state.from;
    const from = this.state.to;

    this.setState({to, from});
  }

  handleFromChange(e) {
    this.setState({from: e.target.value});
  }

  handleToChange(e) {
    this.setState({to: e.target.value});
  }

  render() {
    return (
      <InputGroup>
        <Input
          name="from"
          placeholder="From"
          style={{width: '100px', margin: 0}}
          value={this.state.from}
          onChange={this.handleFromChange}
        />
        <Button appearance="secondary" icon="swap-h" onClick={this.swap} />
        <Input
          name="to"
          placeholder="To"
          style={{width: '100px', margin: 0}}
          value={this.state.to}
          onChange={this.handleToChange}
        />
      </InputGroup>
    );
  }
}

<InputGroupDemo />;
```
