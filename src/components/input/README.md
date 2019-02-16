```jsx
<div style={{width: '250px'}}>
  <Input placeholder="Input's placeholder" style={{marginBottom: '12px'}} />
  <Input
    placeholder="http://website.com"
    meta={{touched: true, error: 'invalid value'}}
  />
</div>
```

### Props

| Prop name |  Type  | Default |             Description |
| --------- | :----: | ------: | ----------------------: |
| `meta`    | object |      -- | redux-form field's meta |

---
