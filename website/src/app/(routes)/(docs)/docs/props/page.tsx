import Title from "@/components/global-cmp/title";
import Heading from "@/components/global-cmp/heading";
import CodeBlock from "@/components/doc-cmp/code-block";
import TableNex from "react-tablenex";
import "react-tablenex/style.css"; // Assuming this is available

const PropsAndConfigurationPage = () => {
  const propsData = [
    {
      Prop: "data",
      Type: "Record<string, React.ReactNode>[]",
      Default: "Required",
      Description: 'Row data (e.g., [{ id: 1, name: "John Doe" }]).',
    },
    {
      Prop: "columns",
      Type: "TableColumn[]",
      Default: "[]",
      Description:
        'Column definitions (e.g., [{ accessor: "id", width: "80px" }]).',
    },
    {
      Prop: "keyField",
      Type: "string | { keyId: string; isVisible: boolean }",
      Default: '{ keyId: "id", isVisible: true }',
      Description:
        'Unique row identifier. Can be a string (e.g., "id" or "orderId") or an object with `id` (the key) and `isVisible` (whether to show the column). See details below.',
    },
    {
      Prop: "fixedColumns",
      Type: "string[]",
      Default: "[]",
      Description: 'Columns to pin (e.g., ["id", "name"]).',
    },
    {
      Prop: "styledRows",
      Type: "StyledRow[]",
      Default: "[]",
      Description:
        "Styles rows by key (e.g., [{ keyValue: 1, style: { ... } }]).",
    },
    {
      Prop: "styledColumns",
      Type: "StyledColumn[]",
      Default: "[]",
      Description:
        'Styles columns (e.g., [{ columnName: "id", style: { ... } }]).',
    },

    {
      Prop: "responsive",
      Type: "boolean",
      Default: "false",
      Description: "Enables mobile view (e.g., true).",
    },
    {
      Prop: "styles",
      Type: "Partial<TableStyles>",
      Default: "See below",
      Description: 'Customizes design (e.g., { rounded: "lg" }).',
    },
    {
      Prop: "footer",
      Type: "FooterRow[]",
      Default: "[]",
      Description: 'Footer rows (e.g., [{ cells: [{ content: "Sum" }] }]).',
    },
    {
      Prop: "expandedRows",
      Type: "ExpandedRow[]",
      Default: "[]",
      Description:
        "Adds content below rows (e.g., [{ afterRowKey: 1, element: <div>...</div> }]).",
    },
    {
      Prop: "noDataMessage",
      Type: "React.ReactNode",
      Default: '"No data found"',
      Description: 'Text when table is empty (e.g., "Nothing here!").',
    },
    {
      Prop: "colorScheme",
      Type: "Partial<ColorScheme>",
      Default: "See below",
      Description: 'Custom colors (e.g., { PRIMARY: "#fff" }).',
    },
  ];

  return (
    <>
      <Title
        title="Props and Configuration"
        description="TableNex provides props to customize your table. This section lists all props, their types (from TypeScript definitions), defaults, and explanations."
      />

      <Heading
        title="Props Overview"
        content={
          <TableNex
            data={propsData}
            keyField="Prop"
            colorScheme={{
              PRIMARY: "var(--primary)",
              SECONDARY: "var(--secondary)",
              ACCENT: "var(--accent)",
              BORDER: "var(--border-accent)",
            }}
            columns={[
              { accessor: "Prop", header: "Prop", width: "150px" },
              { accessor: "Type", header: "Type", width: "200px" },
              { accessor: "Default", header: "Default", width: "150px" },
              { accessor: "Description", header: "Description" },
            ]}
            styles={{ columnBorder: "sm", spacing: "md", rowBorder: "sm" }}
          />
        }
      />

      <Heading
        title="Default Values"
        content={
          <div>
            <ul className="space-y-2">
              <li>
                - <strong>styles</strong>:{" "}
                <code>{`{ rounded: "sm", spacing: "md", columnBorder: "none", rowBorder: "sm", fontSize: "0.9rem" }`}</code>
              </li>
              <li>
                - <strong>colorScheme</strong>:{" "}
                <code>{`{ PRIMARY: "#ffffff", SECONDARY: "#f9f8fd", ACCENT: "#f9f8fd", BORDER: "#f2f2f2" }`}</code>
              </li>
            </ul>
          </div>
        }
      />

      <Heading
        title="Key Prop Details"
        content={
          <div>
            <ol className="space-y-6 list-decimal list-inside">
              <li>
                <strong>
                  <code>data</code>
                </strong>
                <ul className="space-y-2 mt-2 ml-4">
                  <li>
                    Type: <code>{`Record<string, React.ReactNode>[]`}</code>
                  </li>
                  <li>
                    Example:{" "}
                    <code>{`[{ id: 1, name: "John Doe", details: <div>Info</div> }]`}</code>
                  </li>
                </ul>
              </li>

              <li>
                <strong>
                  <code>columns</code>
                </strong>
                <ul className="space-y-2 mt-2 ml-4">
                  <li>
                    Type: <code>{`TableColumn[]`}</code>
                  </li>
                  <li>Properties:</li>
                  <ul className="space-y-1 ml-4">
                    <li>
                      <code>accessor</code>: <code>{`string`}</code> (e.g.,{" "}
                      <code>"id"</code>)
                    </li>
                    <li>
                      <code>header</code>: <code>{`React.ReactNode`}</code>{" "}
                      (e.g.,{" "}
                      <code>
                        <span>Name</span>
                      </code>
                      )
                    </li>
                    <li>
                      <code>width</code>: <code>{`string`}</code> (e.g.,{" "}
                      <code>"80px"</code>)
                    </li>
                    <li>
                      <code>style</code>: <code>{`React.CSSProperties`}</code>{" "}
                      (e.g., <code>{`{ color: "blue" }`}</code>)
                    </li>
                    <li>
                      <code>className</code>: <code>{`string`}</code> (e.g.,{" "}
                      <code>"header-class"</code>)
                    </li>
                    <li>
                      <code>render</code>:{" "}
                      <code>{`(value, row) => React.ReactNode`}</code> (e.g.,{" "}
                      <code>{`(val) => <b>{val}</b>`}</code>)
                    </li>
                  </ul>
                  <li>
                    Example:{" "}
                    <code>{`{ accessor: "name", header: "Name", width: "200px" }`}</code>
                  </li>
                </ul>
              </li>
              <li>
                <strong>
                  <code>keyField</code>
                </strong>
                <ul className="space-y-2 mt-2 ml-4">
                  <li>
                    Type:{" "}
                    <code>{`string | { keyId: string; isVisible: boolean }`}</code>
                  </li>
                  <li>
                    Default: <code>{`{ keyId: "id", isVisible: true }`}</code>
                  </li>
                  <li>
                    Purpose: Tells TableNex which column has unique values to
                    identify rows and whether to display it.
                  </li>
                  <li>How It Works:</li>
                  <ul className="space-y-1 ml-4">
                    <li>
                      Default <code>{`{ keyId: "id", isVisible: true }`}</code>:
                      Uses <code>id</code> values (e.g., <code>1</code>,{" "}
                      <code>2</code>) for <code>styledRows</code> (
                      <code>keyValue</code>) and <code>expandedRows</code> (
                      <code>afterRowKey</code>), with the column visible.
                    </li>
                    <li>
                      Legacy String (e.g., <code>"orderId"</code>): If{" "}
                      <code>{`data=[{ orderId: "#234234", ... }]`}</code>, set{" "}
                      <code>keyField="orderId"</code>. Then{" "}
                      <code>keyValue: "#234234"</code> styles that row,{" "}
                      <code>afterRowKey: "#234234"</code> expands it, and the
                      column is visible by default.
                    </li>
                    <li>
                      Object (e.g.,{" "}
                      <code>{`{ keyId: "name", isVisible: false }`}</code>): If{" "}
                      <code>
                        keyField={`{ keyId: "name", isVisible: false }`}
                      </code>
                      , <code>afterRowKey: "John Doe"</code> targets that row,
                      and the <code>name</code> column is hidden.
                    </li>
                  </ul>
                  <li>
                    Tip: Choose a column with unique values (like IDs) for
                    reliable styling, expanding, and sorting. Use the object
                    format to control visibility.
                  </li>
                </ul>
              </li>
              <li>
                <strong>
                  <code>fixedColumns</code>
                </strong>
                <ul className="space-y-2 mt-2 ml-4">
                  <li>
                    Type: <code>{`string[]`}</code>
                  </li>
                  <li>
                    Example: <code>{`["id", "name", "age", "salary"]`}</code>
                  </li>
                </ul>
              </li>

              <li>
                <strong>
                  <code>styledRows</code>
                </strong>
                <ul className="space-y-2 mt-2 ml-4">
                  <li>
                    Type: <code>{`StyledRow[]`}</code>
                  </li>
                  <li>Properties:</li>
                  <ul className="space-y-1 ml-4">
                    <li>
                      <code>keyValue</code>: <code>{`string | number`}</code>{" "}
                      (e.g., <code>1</code>)
                    </li>
                    <li>
                      <code>style</code>: <code>{`React.CSSProperties`}</code>{" "}
                      (e.g., <code>{`{ backgroundColor: "yellow" }`}</code>)
                    </li>
                    <li>
                      <code>className</code>: <code>{`string`}</code> (e.g.,{" "}
                      <code>"highlight"</code>)
                    </li>
                  </ul>
                  <li>
                    Example:{" "}
                    <code>{`[{ keyValue: 1, style: { backgroundColor: "yellow" }, className: "row-style" }]`}</code>
                  </li>
                </ul>
              </li>

              <li>
                <strong>
                  <code>styledColumns</code>
                </strong>
                <ul className="space-y-2 mt-2 ml-4">
                  <li>
                    Type: <code>{`StyledColumn[]`}</code>
                  </li>
                  <li>Properties:</li>
                  <ul className="space-y-1 ml-4">
                    <li>
                      <code>columnName</code>: <code>{`string`}</code> (e.g.,{" "}
                      <code>"id"</code>)
                    </li>
                    <li>
                      <code>style</code>: <code>{`React.CSSProperties`}</code>{" "}
                      (e.g., <code>{`{ backgroundColor: "yellow" }`}</code>)
                    </li>
                    <li>
                      <code>className</code>: <code>{`string`}</code> (e.g.,{" "}
                      <code>"col-style"</code>)
                    </li>
                  </ul>
                  <li>
                    Example:{" "}
                    <code>{`[{ columnName: "id", style: { backgroundColor: "yellow" }, className: "id-col" }]`}</code>
                  </li>
                </ul>
              </li>

              <li>
                <strong>
                  <code>responsive</code>
                </strong>
                <ul className="space-y-2 mt-2 ml-4">
                  <li>
                    Type: <code>{`boolean`}</code>
                  </li>
                  <li>
                    Example: <code>true</code>
                  </li>
                </ul>
              </li>

              <li>
                <strong>
                  <code>styles</code>
                </strong>
                <ul className="space-y-2 mt-2 ml-4">
                  <li>
                    Type: <code>{`Partial<TableStyles>`}</code>
                  </li>
                  <li>Properties:</li>
                  <ul className="space-y-1 ml-4">
                    <li>
                      <code>rounded</code>/<code>spacing</code>/
                      <code>columnBorder</code>/<code>rowBorder</code>:{" "}
                      <code>{`"none" | "sm" | "md" | "lg" | "xl"`}</code>
                    </li>
                    <li>
                      <code>fontSize</code>: <code>{`string`}</code> (e.g.,{" "}
                      <code>"1rem"</code>)
                    </li>
                  </ul>
                  <li>
                    Example:{" "}
                    <code>{`{ rounded: "lg", spacing: "md", columnBorder: "md", rowBorder: "md" }`}</code>
                  </li>
                </ul>
              </li>

              <li>
                <strong>
                  <code>footer</code>
                </strong>
                <ul className="space-y-2 mt-2 ml-4">
                  <li>
                    Type: <code>{`FooterRow[]`}</code>
                  </li>
                  <li>Properties:</li>
                  <ul className="space-y-1 ml-4">
                    <li>
                      <code>cells</code>: Array of{" "}
                      <code>{`{ content: React.ReactNode, colSpan?: number, className?: string, style?: React.CSSProperties }`}</code>
                    </li>
                    <li>
                      <code>className</code>: <code>{`string`}</code> (e.g.,{" "}
                      <code>"footer-row"</code>)
                    </li>
                    <li>
                      <code>style</code>: <code>{`React.CSSProperties`}</code>{" "}
                      (e.g., <code>{`{ fontSize: "14px" }`}</code>)
                    </li>
                  </ul>
                  <li>
                    Example:{" "}
                    <code>{`[{ cells: [{ content: "Sum", colSpan: 6, style: { fontWeight: "bold" }, className: "sum-cell" }, { content: "$252,000" }], className: "footer-row" }]`}</code>
                  </li>
                </ul>
              </li>

              <li>
                <strong>
                  <code>expandedRows</code>
                </strong>
                <ul className="space-y-2 mt-2 ml-4">
                  <li>
                    Type: <code>{`ExpandedRow[]`}</code>
                  </li>
                  <li>Properties:</li>
                  <ul className="space-y-1 ml-4">
                    <li>
                      <code>afterRowKey</code>: <code>{`string | number`}</code>{" "}
                      (e.g., <code>1</code>)
                    </li>
                    <li>
                      <code>element</code>: <code>{`React.ReactNode`}</code>{" "}
                      (e.g.,{" "}
                      <code>
                        <div>Info</div>
                      </code>
                      )
                    </li>
                  </ul>
                  <li>
                    Example:{" "}
                    <code>{`[{ afterRowKey: 1, element: <div>Details</div> }]`}</code>
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        }
      />

      <Heading
        title="Usage Example"
        content={
          <CodeBlock
            description="Here's how to use TableNex with various props:"
            head={{ title: "JavaScript", icon: null }}
            code={`import TableNex from "react-tablenex";
import "react-tablenex/style.css";

const MyTable = () => {
  const data = [{ orderId: "#234234", name: "John" }];
  return (
    <TableNex
      data={data}
      columns={[{ accessor: "orderId", width: "80px" }, "name"]}
      keyField="orderId"
      responsive={true}
      styles={{ rounded: "lg", spacing: "md", columnBorder: "md",  rowBorder: "md" }}
      footer={[{ cells: [{ content: "Total", className: "total" }] }]}
      expandedRows={[{ afterRowKey: "#234234", element: <div>Details</div> }]}
    />
  );
};`}
          />
        }
      />

      <Heading
        title="Note on keyField and Column Targeting"
        content={
          <div>
            <ul className="space-y-2">
              <li>
                -{" "}
                <strong>
                  <code>keyField</code>
                </strong>
                : Defaults to <code>"id"</code>. Set it to a unique column
                (e.g., <code>"orderId"</code>) to target rows for{" "}
                <code>styledRows</code> (<code>keyValue</code>) and{" "}
                <code>expandedRows</code> (<code>afterRowKey</code>). Use a
                column with distinct values for consistency.
              </li>
              <li>
                - <strong>Case-Insensitive</strong>: Column names (e.g.,{" "}
                <code>accessor</code>, <code>fixedColumns</code>,{" "}
                <code>columnName</code>) ignore case. <code>"Id"</code> and{" "}
                <code>"id"</code> both work.
              </li>
            </ul>
          </div>
        }
      />
    </>
  );
};

export default PropsAndConfigurationPage;
