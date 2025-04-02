# TableNex

![TableNex Banner](/public/banner.png)

**TableNex** is a next-generation React table component that simplifies data display. Say goodbye to the hassle of `<tr>` and `<td>` chaos—TableNex offers an effortless, customizable, and responsive solution for modern tables. Built with React and TypeScript, it’s perfect for lists, dashboards, or complex datasets.

## Why TableNex?
- **Effortless Setup**: Define data and columns(optional) no manual HTML.  
- **Customizable**: Tailor styles and colors to your project.  
- **Responsive**: Works on desktop and mobile.  
- **Advanced Features**: Fixed columns, expanded rows, and more.  
- **Developer-Friendly**: TypeScript-ready with error catching.

## Installation
Install via npm:

```bash
npm install react-tablenex
```

## Getting Started
Here’s a simple table:

```javascript
import TableNex from "react-tablenex";
import "react-tablenex/style.css";

const MyTable = () => {
  const data = [
    { id: 1, name: "John", age: 28 },
    { id: 2, name: "Jane", age: 34 },
  ];

  return <TableNex data={data} />;
};

export default MyTable;
```

## Key Props
| Prop          | Type                       | Default           | Description                              |
|---------------|----------------------------|-------------------|------------------------------------------|
| `data`        | `Record<string, React.ReactNode>[]` | **Required** | Your table data (e.g., `[{ id: 1, name: "John" }]`). |
| `columns`     | `TableColumn[]`           | `[]`              | Column setup (e.g., `{ accessor: "id" }`). |
| `keyField`    | `string`                  | `"id"`            | Unique row identifier (e.g., `"id"`).     |
| `responsive`  | `boolean`                 | `false`           | Enables mobile view.                     |
| `styles`      | `Partial<TableStyles>`    | See below         | Customizes layout and borders (e.g., `{ rounded: "lg", spacing: "md" }`). Options: `rounded`, `spacing`, `columnBorder`, `rowBorder`, `fontSize`. |
| `colorScheme` | `Partial<ColorScheme>`    | See below         | Custom colors (e.g., `{ PRIMARY: "#fff", SECONDARY: "#f0f0f0" }`). Keys: `PRIMARY`, `SECONDARY`, `ACCENT`, `BORDER_ACCENT`. |

- **Default `styles`**: `{ rounded: "sm", spacing: "md", columnBorder: "none", rowBorder: "sm", fontSize: "0.9rem" }`  
- **Default `colorScheme`**: `{ PRIMARY: "#ffffff", SECONDARY: "#f9f8fd", ACCENT: "#f9f8fd", BORDER_ACCENT: "#f2f2f2" }`

### `keyField` Note
- Defaults to `"id"`. Set it to a unique column (e.g., `"orderId"`) if your data uses something else. It’s key for features like styling rows or expanding content.

## Example with Features
A styled, responsive table:

```javascript
import TableNex from "react-tablenex";
import "react-tablenex/style.css";

const FeatureTable = () => {
  const data = [
    { orderId: "#1001", name: "John" },
    { orderId: "#1002", name: "Jane" },
  ];
  const columns = [
    { accessor: "orderId", header: "Order ID", width: "100px" },
    "name",
  ];

  return (
    <TableNex
      data={data}
      columns={columns}
      keyField="orderId"
      responsive={true}
      styles={{ rounded: "lg", spacing: "md", columnBorder: "sm" }}
      colorScheme={{ PRIMARY: "#f9fafb", ACCENT: "#e5e7eb" }}
      styledRows={[{ keyValue: "#1001", className: "!bg-green-100" }]}
    />
  );
};
```

## More Features
- **Fixed Columns**: Pin with `fixedColumns={["orderId"]}`.  
- **Expanded Rows**: Add details with `expandedRows={[{ afterRowKey: "#1001", element: <div>Details</div> }]}`.  
- **Footer**: Summarize with `footer={[{ cells: [{ content: "Total" }] }]}`.  
- **Tailwind**: Use `className` (e.g., `!bg-red-500`) in `styledRows`/`styledColumns`.

## Learn More
Check the [full documentation](http://tablenex.devvarena.com/docs/introduction) for advanced usage and TypeScript details.
