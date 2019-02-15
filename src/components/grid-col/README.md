The GridCol allows to specify column widths across 5 breakpoint sizes (xs, sm, md, lg, and xl).
For every breakpoint, you can specify the amount of columns to span.

```jsx
<GridRow>
  <GridCol lg={6}>
    <GridDemo>lg 6</GridDemo>
  </GridCol>
  <GridCol lg={6}>
    <GridDemo>lg 6</GridDemo>
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
