```jsx noeditor
const file = require('./icons');
<DemoContainer>
  {Object.keys(file.icons).map((icon, i) => (
    <IconDemoCard key={`icon--${i}`} name={icon}>
      <Icon name={icon} size={20} />
    </IconDemoCard>
  ))}
</DemoContainer>;
```

### Props

| Prop name |  Type  |  Default |                    Description |
| --------- | :----: | -------: | -----------------------------: |
| `name`    | string | required |                      icon name |
| `size`    | number |     `18` | width and height of icon in px |
| `color`   | string |   `#555` |              color of the icon |

---
