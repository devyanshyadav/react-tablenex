import Title from "@/components/global-cmp/title";
import Heading from "@/components/global-cmp/heading";
import CodeBlock from "@/components/doc-cmp/code-block";
import TableNex from "react-tablenex";
import "react-tablenex/style.css"; // Assuming this is available

const AdvancedFeaturesPage = () => {
  const advancedFeaturesData = [
    {
      Prop: "fixedColumns",
      Type: "string[]",
      Description: "List column accessor names to pin (e.g., [\"id\", \"name\"]). Keeps specific columns visible while scrolling horizontally.",
    },
    {
      Prop: "expandedRows",
      Type: "ExpandedRow[]",
      Description: "Shows extra content below specific rows (e.g., details, sub-tables).",
    },
    {
      Prop: "footer",
      Type: "FooterRow[]",
      Description: "Adds summary or additional rows at the table’s bottom.",
    },
  ];

  return (
    <>
      <Title
        title="Advanced Features"
        description="TableNex offers advanced features to level up your table. This section explains how to use fixedColumns, expandedRows, and footer for a more dynamic and polished display."
      />

      <Heading
        title="Advanced Features Overview"
        content={
          <TableNex
            data={advancedFeaturesData}
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
              { accessor: "Description", header: "Description" },
            ]}
            styles={{ columnBorder: "sm", spacing: "md", rowBorder: "sm" }}
          />
        }
      />

      <Heading
        title="Feature Details"
        content={
          <div>
            <ol className="space-y-6 list-decimal list-inside">
              <li>
                <strong><code>fixedColumns</code></strong>
                <ul className="space-y-2 mt-2 ml-4">
                  <li>Type: <code>{`string[]`}</code></li>
                  <li>Usage: List column <code>accessor</code> names to pin (e.g., <code>{`["id", "name"]`}</code>).</li>
                  <li>Example: <code>{`fixedColumns={["id", "name"]}`}</code></li>
                  <li>Result: "id" and "name" columns stay fixed as you scroll sideways.</li>
                </ul>
              </li>

              <li>
                <strong><code>expandedRows</code></strong>
                <ul className="space-y-2 mt-2 ml-4">
                  <li>Type: <code>{`ExpandedRow[]`}</code></li>
                  <li>Properties:</li>
                  <ul className="space-y-1 ml-4">
                    <li><code>afterRowKey</code>: <code>{`string | number`}</code> (matches <code>keyField</code> value, e.g., <code>1</code>).</li>
                    <li><code>element</code>: <code>{`React.ReactNode`}</code> (content to display, e.g., <code>{`<div>Details</div>`}</code>).</li>
                  </ul>
                  <li>Usage: <code>{`expandedRows={[{ afterRowKey: 1, element: <div className="p-2">More info for ID 1</div> }]}`}</code></li>
                  <li>Result: Extra content appears below the row where <code>id: 1</code> (if <code>keyField="id"</code>).</li>
                </ul>
              </li>

              <li>
                <strong><code>footer</code></strong>
                <ul className="space-y-2 mt-2 ml-4">
                  <li>Type: <code>{`FooterRow[]`}</code></li>
                  <li>Properties:</li>
                  <ul className="space-y-1 ml-4">
                    <li><code>cells</code>: Array of <code>{`{ content: React.ReactNode, colSpan?: number, className?: string, style?: React.CSSProperties }`}</code></li>
                    <li><code>className</code>: Row class (e.g., <code>"footer-row"</code>).</li>
                    <li><code>style</code>: Row styles (e.g., <code>{`{ fontSize: "14px" }`}</code>).</li>
                  </ul>
                  <li>Usage: <code>{`footer={[{ cells: [{ content: "Total", colSpan: 2, className: "font-bold" }, { content: "$1000" }], className: "bg-gray-100" }]}`}</code></li>
                  <li>Result: A footer row with "Total" spanning 2 columns and "$1000" next to it.</li>
                </ul>
              </li>
            </ol>
          </div>
        }
      />

      <Heading
        title="Full Example"
        content={
          <CodeBlock
            description="Here’s how to use TableNex with advanced features:"
            head={{ title: "JavaScript", icon: null }}
            code={`import TableNex from "react-tablenex";
import "react-tablenex/style.css";

const MyTable = () => {
  const data = [
    { id: 1, name: "John", amount: 500 },
    { id: 2, name: "Jane", amount: 500 }
  ];
  const columns = [{ accessor: "id" }, "name", "amount"];
  return (
    <TableNex
      data={data}
      columns={columns}
      fixedColumns={["id"]}
      expandedRows={[
        { afterRowKey: 1, element: <div className="p-2">John’s details</div> }
      ]}
      footer={[
        {
          cells: [
            { content: "Total", colSpan: 2, className: "font-bold" },
            { content: "$1000" }
          ]
        }
      ]}
    />
  );
};`}
          />
        }
      />

      <Heading
        title="Tips"
        content={
          <ul className="space-y-2 ml-4">
            <li><strong>Fixed Columns</strong>: Ideal for wide tables; use with key columns.</li>
            <li><strong>Expanded Rows</strong>: Match <code>afterRowKey</code> to <code>keyField</code> for accuracy.</li>
            <li><strong>Footer</strong>: Use <code>colSpan</code> and styles for clean summaries.</li>
          </ul>
        }
      />
    </>
  );
};

export default AdvancedFeaturesPage;