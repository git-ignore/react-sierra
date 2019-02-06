Table example:

```jsx
const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    sex: "Male",
    address: "10 Downing Street"
  },
  {
    key: "2",
    name: "John",
    age: 42,
    sex: "Male",
    address: "1657 Riverside Drive Redding"
  }
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Sex",
    dataIndex: "sex",
    key: "sex"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  }
];

<Table fullWidth data={dataSource} columns={columns} />;
```

### Props

| Prop name   |  Type  |  Default |                                                Description |
| ----------- | :----: | -------: | ---------------------------------------------------------: |
| `fullWidth` |  bool  |  `false` |                            should table fill the container |
| `data`      | array  | required |                               array of data to be rendered |
| `columns`   | array  | required |                                           columns of table |
| `align`     | string |     left | text-align of cells; can be set to `center`,`left`,`right` |

---
