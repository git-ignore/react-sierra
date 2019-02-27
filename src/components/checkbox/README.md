```jsx
<Checkbox>Some label</Checkbox>
```

```jsx
<Checkbox defaultChecked disabled>
  Disabled but checked by default
</Checkbox>
```

```jsx
<Checkbox
  onChange={e => {
    const isChecked = e.target.checked;
    alert(`Now checkbox is ${isChecked ? '' : 'not '}checked`);
  }}
>
  Will alert checkbox state on every change
</Checkbox>
```

```jsx
class CustomCheckboxHandler extends React.PureComponent {
  constructor() {
    this.state = {
      isSubmitVisible: false
    };

    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton() {
    this.setState({isSubmitVisible: !this.state.isSubmitVisible});
  }

  render() {
    return (
      <div>
        <Checkbox
          checked={this.state.isSubmitVisible}
          onChange={this.toggleButton}
        >
          Will toggle hidden button
        </Checkbox>
        {this.state.isSubmitVisible && (
          <Button style={{marginTop: '20px'}} onClick={this.toggleButton}>
            Click to hide
          </Button>
        )}
      </div>
    );
  }
}

<CustomCheckboxHandler />;
```

### Props

| Prop name        |       Type        | Default |                                                                                      Description |
| ---------------- | :---------------: | ------: | -----------------------------------------------------------------------------------------------: |
| `onChange`       | Function(e:Event) |      -- |                                   The callback function that is triggered when the state changes |
| `checked`        |       bool        |      -- | Specifies whether the checkbox is selected. Usefull to handle checkbox from outside of component |
| `defaultChecked` |      boolean      |   false | Specifies default state of checkbox. You don't need to use this prop if 'checked'-prop is passed |
| `disabled`       |      boolean      |   false |                                                                       disabled state of checkbox |

---
