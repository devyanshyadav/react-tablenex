# TableNex - A Flexible React Table Component

Welcome to `TableNex`! This is a customizable, responsive table component for React that makes displaying data easy and stylish. Whether you're showing simple lists or complex datasets, `TableNex` has you covered with features like fixed columns, expandable rows, custom styling, and mobile-friendly views.

Built with TypeScript for type safety and packaged for npm, it’s perfect for beginners and pros alike.

---

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Props Overview](#props-overview)
- [Examples](#examples)
  - [Basic Table](#basic-table)
  - [Custom Headers and Styling](#custom-headers-and-styling)
  - [Responsive Table with Footer](#responsive-table-with-footer)
- [Styling](#styling)
- [Support](#support)

---

## Installation

To use `TableNex` in your React project, install it via npm:

```bash
npm install react-tablenex
```

Next, import the component and its CSS in your file:

```jsx
import TableNex  from "react-tablenex";
import "react-tablenex/style.css"; // Required for default styles
```

> **Note**: The CSS file is necessary for the table to look good out of the box. You can override it with your own styles later if needed.

---

## Quick Start

Here’s a simple example to get you started. This creates a basic table with some employee data:

```jsx
import React from "react";
import TableNex  from "react-tablenex";
import "react-tablenex/style.css";

function MyTable() {
  const data = [
    { id: 1, name: "John", age: 28 },
    { id: 2, name: "Jane", age: 34 },
  ];

  const columns = [
    { accessor: "id", header: "ID" },
    { accessor: "name", header: "Name" },
    { accessor: "age", header: "Age" },
  ];

  return <TableNex data={data} columns={columns} />;
}

export default MyTable;
```

- **`data`**: An array of objects where each object is a row.
- **`columns`**: An array telling the table which fields to show and their headers.

Save this in a `.jsx` file, run your app, and you’ll see a table!

---

## Props Overview

`TableNex` comes with many options (props) to customize your table. Here’s a beginner-friendly breakdown:

| Prop             | Type                        | Default         | Description                                                                 |
|------------------|-----------------------------|-----------------|-----------------------------------------------------------------------------|
| `data`           | `Object[]`                 | Required        | Your table data as an array of objects (e.g., `[{ id: 1, name: "John" }]`). |
| `columns`        | `TableColumn[]`            | `[]`            | Defines table columns (e.g., `{ accessor: "name", header: "Name" }`).       |
| `fixedColumns`   | `string[]`                 | `[]`            | Columns to "stick" (stay visible when scrolling).                           |
| `styledRows`     | `StyledRow[]`              | `[]`            | Custom styles for specific rows by their key value.                         |
| `styledColumns`  | `StyledColumn[]`           | `[]`            | Custom styles for specific columns by their accessor.                       |
| `expandedRows`   | `ExpandedRow[]`            | `[]`            | Extra rows that expand below specific rows.                                 |
| `footer`         | `FooterRow[]`              | `[]`            | Rows to show at the bottom of the table.                                    |
| `keyField`       | `string`                   | `"id"`          | The unique field in `data` (e.g., `"id"`) for row identification.           |
| `noDataMessage`  | `string` or `ReactNode`    | `"No data found"` | What to show if `data` is empty.                                          |
| `colorScheme`    | `Partial<ColorScheme>`     | See below       | Colors for the table (e.g., `{ PRIMARY: "#fff" }`).                         |
| `responsive`     | `boolean`                  | `false`         | Makes the table adapt to mobile screens.                                    |
| `styles`         | `Partial<TableStyles>`     | See below       | Controls spacing, borders, and rounded corners.                             |

### Default `colorScheme`
```json
{
  PRIMARY: "#ffffff",
  SECONDARY: "#f9f8fd",
  ACCENT: "#f9f8fd",
  BORDER_ACCENT: "#f2f2f2"
}
```

### Default `styles`
```json
{
  rounded: "sm",
  spacing: "md",
  columnBorder: "none",
  rowBorder: "sm",
  fontSize: "0.9rem"
}
```

> **Tip**: Use `"sm"`, `"md"`, `"lg"`, or `"none"` for `rounded`, `spacing`, `columnBorder`, and `rowBorder`.

---

## Examples

### Basic Table
A simple table with no extra features:

```jsx
import TableNex  from "react-tablenex";
import "react-tablenex/style.css";

function BasicTable() {
  const data = [
    { id: 1, name: "Alice", job: "Coder" },
    { id: 2, name: "Bob", job: "Designer" },
  ];

  return <TableNex data={data} />;
}
```

This will auto-detect `id`, `name`, and `job` as columns if you don’t provide `columns`.

---

### Custom Headers and Styling
Add custom headers and style a row:

```jsx
import TableNex  from "react-tablenex";
import "react-tablenex/style.css";

function StyledTable() {
  const data = [
    { id: 1, name: "Alice", job: "Coder" },
    { id: 2, name: "Bob", job: "Designer" },
  ];

  const columns = [
    { accessor: "id", header: "User ID" },
    { accessor: "name", header: <strong>Name</strong> }, // Bold header
    { accessor: "job", header: "Role" },
  ];

  const styledRows = [
    { keyValue: 1, style: { backgroundColor: "#ffe6e6" } }, // Light red row
  ];

  return <TableNex data={data} columns={columns} styledRows={styledRows} />;
}
```

- `header` can be text or JSX (like `<strong>`).
- `styledRows` targets the row with `id: 1`.

---

### Responsive Table with Footer
A more advanced table with responsive design and a footer:

```jsx
import TableNex  from "react-tablenex";
import "react-tablenex/style.css";

function FullTable() {
  const data = [
    { id: 1, name: "John", salary: 75000 },
    { id: 2, name: "Jane", salary: 95000 },
  ];

  const columns = [
    { accessor: "id", width: "80px" },
    { accessor: "name", header: "Employee" },
    { accessor: "salary", header: "Salary ($)" },
  ];

  const footer = [
    {
      cells: [
        { content: "Total", style: { fontWeight: "bold" }, colSpan: 2 },
        { content: "$170,000" },
      ],
    },
  ];

  return (
    <TableNex
      data={data}
      columns={columns}
      footer={footer}
      responsive={true}
      styles={{ rounded: "lg", spacing: "md" }}
    />
  );
}
```

- `responsive={true}` makes it mobile-friendly.
- `footer` shows a summary row.
- `styles` adjusts the look with larger corners and spacing.

---

## Styling

`TableNex` uses CSS custom properties for easy theming. You can:
1. **Use the Default CSS**: Import `"react-tablenex/style.css"`.
2. **Override with Props**:
   ```jsx
   <TableNex
     data={data}
     colorScheme={{ PRIMARY: "#f0f0f0", BORDER_ACCENT: "#000" }}
     styles={{ fontSize: "1rem", rowBorder: "lg" }}
   />
   ```
3. **Add Custom CSS**: Use classes like `.tablenex_table`, `.tablenex_row`, etc., from your own stylesheet.

Check your browser’s developer tools to see all available classes!

---

## Support

Got questions or ideas? Feel free to:
- Open an issue on [GitHub](https://github.com/yourusername/react-tablenex) (replace with your repo link).
- Reach out via [email/twitter/etc.] (add your contact if desired).

Happy coding with `TableNex`!
