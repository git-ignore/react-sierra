Button example:

```jsx
<Button appearance="primary" style={{margin: '10px'}}>Primary button</Button>
<Button appearance="secondary" style={{margin: '10px'}}>Secondary button</Button>
<Button appearance="primary" disabled style={{margin: '10px'}}>Primary disabled</Button>
<Button appearance="secondary" disabled style={{margin: '10px'}}>Secondary disabled</Button>
```

```jsx
<Button style={{margin: '10px'}} icon="download">Button</Button>
<Button appearance="secondary" style={{margin: '10px'}} icon="download">Button</Button>
<Button disabled style={{margin: '10px'}} icon="download">Disabled</Button>
<Button appearance="secondary" disabled style={{margin: '10px'}} icon="download">Disabled</Button>
```

### Props

| Prop name    |   Type   |      Default |                                Description |
| ------------ | :------: | -----------: | -----------------------------------------: |
| `onClick`    | Function | () => void 0 |      set the handler to handle click event |
| `icon`       |  string  |            - | set the icon of button, see Icon component |
| `size`       |  string  |         `md` |            can be set to: `sm`, `md`, `lg` |
| `disabled`   | boolean  |        false |                   disabled state of button |
| `appearance` |  string  |    `primary` |      can be set to: `primary`, `secondary` |

---
