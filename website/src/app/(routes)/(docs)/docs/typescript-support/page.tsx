import Title from "@/components/global-cmp/title";
import Heading from "@/components/global-cmp/heading";
import CodeBlock from "@/components/doc-cmp/code-block";
import TableNex from "react-tablenex";
import "react-tablenex/style.css"; // Assuming this is available

const TypeScriptSupportPage = () => {
  const typeData = [
    {
      Type: "TableProps",
      Description: "Main component props.",
    },
    {
      Type: "TableColumn",
      Description: "Column definitions (replaces TableCell).",
    },
    {
      Type: "StyledRow",
      Description: "Row styling options.",
    },
    {
      Type: "StyledColumn",
      Description: "Column styling options.",
    },
    {
      Type: "ExpandedRow",
      Description: "Expanded row content.",
    },
    {
      Type: "FooterRow",
      Description: "Footer row structure.",
    },
    {
      Type: "TableStyles",
      Description: "Styling options for table design.",
    },
    {
      Type: "ColorScheme",
      Description: "Color scheme options for theming.",
    },
  ];

  return (
    <>
      <Title
        title="TypeScript Support"
        description="TableNex is fully typed with TypeScript, making it ideal for type-safe projects. This section explains how to use its built-in types for a seamless development experience."
      />

      <Heading
        title="Built-In Types"
        content={
          <>
            <p className="mb-4">
              TableNex exports all necessary interfaces from its module. Import them to define props and data structures.
            </p>
            <TableNex
              data={typeData}
              keyField="Type"
              colorScheme={{
                PRIMARY: "var(--primary)",
                SECONDARY: "var(--secondary)",
                ACCENT: "var(--accent)",
                BORDER: "var(--border-accent)",
              }}
              columns={[
                { accessor: "Type", header: "Type", width: "200px" },
                { accessor: "Description", header: "Description" },
              ]}
              styles={{ columnBorder: "sm", spacing: "md", rowBorder: "sm" }}
            />
          </>
        }
      />

      <Heading
        title="Basic Usage with TypeScript"
        content={
          <CodeBlock
            description="Define your data and props with types for full IDE support."
            head={{ title: "TypeScript", icon: null }}
            code={`import TableNex, {
  TableProps,
  TableColumn,
} from "react-tablenex";
import "react-tablenex/style.css";

interface User {
  id: number;
  name: string;
  age: number;
}

const TypedTable: React.FC = () => {
  const data: User[] = [
    { id: 1, name: "John", age: 28 },
    { id: 2, name: "Jane", age: 34 },
  ];
  const columns: TableColumn[] = [
    { accessor: "id", header: "ID", width: "80px" },
    { accessor: "name", header: "Name" },
    { accessor: "age", header: "Age" },
  ];

  const props: TableProps = {
    data,
    columns,
    keyField: "id",
  };

  return <TableNex {...props} />;
};`}
          />
        }
      />

      <Heading
        title="Advanced Example"
        content={
          <CodeBlock
            description="Use types for complex features like custom rendering and styling."
            head={{ title: "TypeScript", icon: null }}
            code={`import TableNex, {
  TableProps,
  TableColumn,
  StyledRow,
  ExpandedRow,
} from "react-tablenex";
import "react-tablenex/style.css";

interface Order {
  orderId: string;
  customer: string;
  total: number;
}

const AdvancedTypedTable: React.FC = () => {
  const data: Order[] = [
    { orderId: "#1001", customer: "John", total: 500 },
    { orderId: "#1002", customer: "Jane", total: 700 },
  ];
  const columns: TableColumn[] = [
    { accessor: "orderId", header: "Order ID", width: "100px" },
    { accessor: "customer", header: "Customer" },
    {
      accessor: "total",
      header: "Total",
      render: (value) => \`$\${value}\`,
    },
  ];
  const styledRows: StyledRow[] = [
    { keyValue: "#1001", className: "!bg-green-100" },
  ];
  const expandedRows: ExpandedRow[] = [
    { afterRowKey: "#1001", element: <div>Details for #1001</div> },
  ];

  const props: TableProps = {
    data,
    columns,
    keyField: "orderId",
    styledRows,
    expandedRows,
    responsive: true,
  };

  return <TableNex {...props} />;
};`}
          />
        }
      />

      <Heading
        title="Tips"
        content={
          <ul className="space-y-2 ml-4">
            <li>
              <strong>Type Safety</strong>: Define your data interface (e.g., <code>User</code>, <code>Order</code>) to match data.
            </li>
            <li>
              <strong>Custom Rendering</strong>: Use <code>{`render: (value: React.ReactNode, row: Record<string, React.ReactNode>) => React.ReactNode`}</code> for typed custom cells.
            </li>
            <li>
              <strong>Importing</strong>: Use <code>{`import type { TableProps } from "react-tablenex"`}</code> for type-only imports if preferred.
            </li>
            <li>
              <strong>Errors</strong>: TypeScript catches mismatches (e.g., wrong <code>keyField</code>) at compile time.
            </li>
          </ul>
        }
      />
    </>
  );
};

export default TypeScriptSupportPage;