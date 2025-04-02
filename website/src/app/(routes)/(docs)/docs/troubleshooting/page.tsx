import Title from "@/components/global-cmp/title";
import Heading from "@/components/global-cmp/heading";
import CodeBlock from "@/components/doc-cmp/code-block";
import "react-tablenex/style.css"; // Assuming this is available

const TroubleshootingPage = () => {
  return (
    <>
      <Title
        title="Troubleshooting"
        description="TableNex is designed to be smooth, but issues can arise. This section covers common problems and their fixes."
      />

      <Heading
        title="Common Issues and Fixes"
        content={
          <div>
            <ol className="space-y-6 list-decimal list-inside">
              <li>
                <strong>"No data found" or "data.map is not a function" Shows Even with Data</strong>
                <ul className="space-y-2 mt-2 ml-4">
                  <li>
                    <strong>Cause</strong>: <code>data</code> prop is empty,
                    undefined, or malformed.
                  </li>
                  <li>
                    <strong>Fix</strong>: Ensure <code>data</code> is an array
                    of objects.
                  </li>
                  <li>
                    <CodeBlock
                      description=""
                      head={{ title: "JavaScript", icon: null }}
                      code={`const data = [{ id: 1, name: "John" }]; // Not [] or {}
<TableNex data={data} />`}
                    />
                  </li>
                </ul>
              </li>

              <li>
                <strong>keyField Error:For keys, there should be one column with 'keyField'.. </strong>
                <ul className="space-y-2 mt-2 ml-4">
                  <li>
                    <strong>Cause</strong>: Default <code>keyField="id"</code>{" "}
                    doesn’t match any column or data key.
                  </li>
                  <li>
                    <strong>Fix</strong>: Set <code>keyField</code> to a unique
                    column in your data.
                  </li>
                  <li>
                    <CodeBlock
                      description=""
                      head={{ title: "JavaScript", icon: null }}
                      code={`const data = [{ orderId: "#1001", name: "John" }];
<TableNex data={data} keyField="orderId" />`}
                    />
                  </li>
                </ul>
              </li>

              <li>
                <strong>Styles Not Applying</strong>
                <ul className="space-y-2 mt-2 ml-4">
                  <li>
                    <strong>Cause</strong>: CSS not loaded or overridden.
                  </li>
                  <li>
                    <strong>Fix</strong>: Import{" "}
                    <code>"react-tablenex/style.css"</code> and check for
                    conflicts. Use <code>!important</code> or Tailwind{" "}
                    <code>!</code> if needed.
                  </li>
                  <li>
                    <CodeBlock
                      description=""
                      head={{ title: "JavaScript", icon: null }}
                      code={`import "react-tablenex/style.css";
<TableNex styledRows={[{ keyValue: 1, className: "!bg-red-500" }]} />`}
                    />
                  </li>
                </ul>
              </li>

              <li>
                <strong>Fixed Columns Not Working</strong>
                <ul className="space-y-2 mt-2 ml-4">
                  <li>
                    <strong>Cause</strong>: <code>fixedColumns</code> names
                    don’t match <code>accessor</code> values and it works with few first and last columns.
                  </li>
                  <li>
                    <strong>Fix</strong>: Use exact, case-insensitive column
                    names.
                  </li>
                  <li>
                    <CodeBlock
                      description=""
                      head={{ title: "JavaScript", icon: null }}
                      code={`const columns = [{ accessor: "Id" }, "name"];
<TableNex fixedColumns={["id", "name"]} /> // "Id" or "id" works`}
                    />
                  </li>
                </ul>
              </li>

              <li>
                <strong>Expanded Rows Not Showing</strong>
                <ul className="space-y-2 mt-2 ml-4">
                  <li>
                    <strong>Cause</strong>: <code>afterRowKey</code> doesn’t
                    match <code>keyField</code> values.
                  </li>
                  <li>
                    <strong>Fix</strong>: Ensure <code>afterRowKey</code> aligns
                    with <code>keyField</code>.
                  </li>
                  <li>
                    <CodeBlock
                      description=""
                      head={{ title: "JavaScript", icon: null }}
                      code={`const data = [{ orderId: "#1001", name: "John" }];
<TableNex
  data={data}
  keyField="orderId"
  expandedRows={[{ afterRowKey: "#1001", element: <div>Details</div> }]}
/>`}
                    />
                  </li>
                </ul>
              </li>

              <li>
                <strong>Duplicate Key Error in Development</strong>
                <ul className="space-y-2 mt-2 ml-4">
                  <li>
                    <strong>Cause</strong>: <code>keyField</code> values aren’t
                    unique.
                  </li>
                  <li>
                    <strong>Fix</strong>: Use a column with distinct values.
                  </li>
                  <li>
                    <CodeBlock
                      description=""
                      head={{ title: "JavaScript", icon: null }}
                      code={`const data = [{ id: 1 }, { id: 2 }]; // Not { id: 1 }, { id: 1 }
<TableNex data={data} />`}
                    />
                  </li>
                </ul>
              </li>

              <li>
                <strong>Responsive Mode Not Switching</strong>
                <ul className="space-y-2 mt-2 ml-4">
                  <li>
                    <strong>Cause</strong>: <code>responsive={true}</code> not
                    set or CSS not loaded.
                  </li>
                  <li>
                    <strong>Fix</strong>: Enable <code>responsive</code> and
                    import styles.
                  </li>
                  <li>
                    <CodeBlock
                      description=""
                      head={{ title: "JavaScript", icon: null }}
                      code={`import "react-tablenex/style.css";
<TableNex data={data} responsive={true} />`}
                    />
                  </li>
                </ul>
              </li>

              <li>
                <strong>Footer Not Displaying</strong>
                <ul className="space-y-2 mt-2 ml-4">
                  <li>
                    <strong>Cause</strong>: <code>footer</code> prop is empty or{" "}
                    <code>data</code> is empty (footer only shows with data).
                  </li>
                  <li>
                    <strong>Fix</strong>: Add valid <code>footer</code> and
                    ensure <code>data</code> has rows.
                  </li>
                  <li>
                    <CodeBlock
                      description=""
                      head={{ title: "JavaScript", icon: null }}
                      code={`const footer = [{ cells: [{ content: "Total" }] }];
<TableNex data={[{ id: 1 }]} footer={footer} />`}
                    />
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        }
      />

      <Heading
        title="Tips"
        content={
          <ul className="space-y-2 ml-4">
            <li>
              Check console for errors in development mode—they pinpoint issues
              like <code>keyField</code>.
            </li>
            <li>Verify prop types with TypeScript to catch mistakes early.</li>
            <li>
              Test with small datasets first to debug styling or features.
            </li>
          </ul>
        }
      />
    </>
  );
};

export default TroubleshootingPage;
