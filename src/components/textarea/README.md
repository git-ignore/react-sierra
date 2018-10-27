Textarea example:

```jsx
<div style={{width: "350px"}}>
  <Textarea
    style={{marginBottom: "12px"}}
    placeholder="Just a placeholder"
    rows="6"
  >
    Textarea text
  </Textarea>
  <Textarea meta={{touched: true, error: "invalid value"}}>
    Textarea text
  </Textarea>
</div>
```

### Props

| Prop name |  Type  | Default |             Description |
| --------- | :----: | ------: | ----------------------: |
| `meta`    | object |      -- | redux-form field's meta |

---
