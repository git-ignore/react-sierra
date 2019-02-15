Textarea example:

```jsx
<div style={{width: '350px'}}>
  <Textarea
    style={{marginBottom: '12px'}}
    placeholder="Just a placeholder"
    defaultValue="Textarea text"
    rows="6"
  />
  <Textarea
    meta={{touched: true, error: 'invalid value'}}
    defaultValue="Textarea text"
  />
</div>
```

### Props

| Prop name |  Type  | Default |             Description |
| --------- | :----: | ------: | ----------------------: |
| `meta`    | object |      -- | redux-form field's meta |

---
