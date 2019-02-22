_This component provides a theme to all React components underneath itself via the context API._

_**WARNING! - since 0.0.6 react-skeleton-ui-kit components wont be able to render correctly without theme context**_

```jsx static
<ThemeProvider>
  <App />
</ThemeProvider>
```

### Props

| Prop name         |  Type  | Default |                Description |
| ----------------- | :----: | ------: | -------------------------: |
| `overriddenProps` | object |      -- | theme props to override it |

**Default theme props.<br/> Also available for overriding by passing to `overriddenProps` (see example below):**

```js static
{
  colors: {
    primary: '#33C3F0',
    primaryDarken: '#1EAEDB',
    grayLight: '#bbb',
    grayText: '#555',
    gray: '#888',
    alert: '#f50031'
  }
}
```

_You can style library components by passing your own theme to ThemeProvider:_

```jsx
const customThemeColors = {
  primary: '#ce1818',
  primaryDarken: '#b30c0c'
};

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      useDefaultColors: true
    };

    this.toggleColorScheme = this.toggleColorScheme.bind(this);
  }

  toggleColorScheme() {
    this.setState({useDefaultColors: !this.state.useDefaultColors});
  }

  render() {
    return (
      <ThemeProvider
        overriddenProps={
          this.state.useDefaultColors
            ? null
            : {
                colors: customThemeColors
              }
        }
      >
        <Button onClick={this.toggleColorScheme}>I'm red!</Button>
      </ThemeProvider>
    );
  }
}

<Example />;
```

---
