_The GridCol allows to specify column widths across 5 breakpoint sizes (xs, sm, md, lg, and xl)._
_For every breakpoint, you can specify the amount of columns to span._

```jsx
<GridRow>
  <GridCol xs={0} sm={6} md={0} lg={6}>
    <GridDemo>xs 0, sm 6, md 0, lg 6</GridDemo>
  </GridCol>
  <GridCol xs={0} sm={6} md={0} lg={6}>
    <GridDemo>xs 0, sm 6, md 0, lg 6</GridDemo>
  </GridCol>
</GridRow>

<GridRow>
  <GridCol md={6} lg={4}>
    <GridDemo>lg 4</GridDemo>
  </GridCol>
  <GridCol md={6} lg={4}>
    <GridDemo>lg 4</GridDemo>
  </GridCol>
  <GridCol md={6} lg={4}>
    <GridDemo>lg 4</GridDemo>
  </GridCol>
</GridRow>

<GridRow>
  <GridCol md={6} lg={3}>
    <GridDemo>lg 3</GridDemo>
  </GridCol>
  <GridCol md={6} lg={3}>
    <GridDemo>lg 3</GridDemo>
  </GridCol>
  <GridCol md={6} lg={3}>
    <GridDemo>lg 3</GridDemo>
  </GridCol>
  <GridCol md={6} lg={3}>
    <GridDemo>lg 3</GridDemo>
  </GridCol>
</GridRow>

<GridRow>
  <GridCol md={6} lg={2}>
    <GridDemo>lg 2</GridDemo>
  </GridCol>
  <GridCol md={6} lg={2}>
    <GridDemo>lg 2</GridDemo>
  </GridCol>
  <GridCol md={6} lg={2}>
    <GridDemo>lg 2</GridDemo>
  </GridCol>
  <GridCol md={6} lg={2}>
    <GridDemo>lg 2</GridDemo>
  </GridCol>
  <GridCol md={6} lg={2}>
    <GridDemo>lg 2</GridDemo>
  </GridCol>
  <GridCol md={6} lg={2}>
    <GridDemo>lg 2</GridDemo>
  </GridCol>
</GridRow>
```

### Props

| Prop name |      Type      | Default |                                Description |
| --------- | :------------: | ------: | -----------------------------------------: |
| `xs`      | number(0-12)\* |      12 | The columns amount to fill on `xs`-screens |
| `sm`      | number(0-12)\* |      12 | The columns amount to fill on `sm`-screens |
| `md`      | number(0-12)\* |      12 | The columns amount to fill on `md`-screens |
| `lg`      | number(0-12)\* |      12 | The columns amount to fill on `lg`-screens |
| `xl`      | number(0-12)\* |      12 | The columns amount to fill on `xl`-screens |

**\*** You can hide column on screen by passing `0` to prop;

### Screen sizes

| Size |       Media        |
| ---- | :----------------: |
| `xs` |   up to `549px`    |
| `sm` |  `550px - 991px`   |
| `md` |  `992px - 1279px`  |
| `lg` | `1280px - 1599px`  |
| `xl` | more than `1600px` |

---
