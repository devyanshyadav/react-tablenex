import Title from "@/components/global-cmp/title";
import Heading from "@/components/global-cmp/heading";
import CodeBlock from "@/components/doc-cmp/code-block";
import TableNex from "react-tablenex";
import "react-tablenex/style.css"; // Assuming this is available

const StylingPage = () => {
  const builtInPropsData = [
    {
      Prop: "styles",
      Type: "Partial<TableStyles>",
      Default: "{ rounded: \"sm\", spacing: \"md\", columnBorder: \"none\", rowBorder: \"sm\", fontSize: \"0.9rem\" }",
      Description: "Customizes table design with sizing and border options.",
    },
    {
      Prop: "colorScheme",
      Type: "Partial<ColorScheme>",
      Default: "{ PRIMARY: \"#ffffff\", SECONDARY: \"#f9f8fd\", ACCENT: \"#f9f8fd\", BORDER: \"#f2f2f2\" }",
      Description: "Sets color theming for backgrounds and borders.",
    },
  ];

  return (
    <>
      <Title
        title="Styling"
        description="TableNex offers flexible styling through props and meaningful CSS classes. You can use built-in options, custom CSS, or Tailwind classes (with overrides if needed). This section covers theming, including styledRows and styledColumns, with tips for light/dark modes."
      />

      <Heading
        title="Built-In Styling Props"
        content={
          <>
            <p className="mb-4">TableNex provides two props for easy theming:</p>
            <TableNex
              data={builtInPropsData}
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
                { accessor: "Default", header: "Default", width: "250px" },
                { accessor: "Description", header: "Description" },
              ]}
              styles={{ columnBorder: "sm", spacing: "md", rowBorder: "sm" }}
            />
            <div className="mt-6">
              <ol className="space-y-6 list-decimal list-inside">
                <li>
                  <strong><code>styles</code></strong>
                  <ul className="space-y-2 mt-2 ml-4">
                    <li>Type: <code>{`Partial<TableStyles>`}</code></li>
                    <li>Default: <code>{`{ rounded: "sm", spacing: "md", columnBorder: "none", rowBorder: "sm", fontSize: "0.9rem" }`}</code></li>
                    <li>Options:</li>
                    <ul className="space-y-1 ml-4">
                      <li><code>rounded</code>: <code>{`"none" | "sm" | "md" | "lg" | "xl"`}</code> (0, 4px, 8px, 12px, 16px)</li>
                      <li><code>spacing</code>: <code>{`"none" | "sm" | "md" | "lg" | "xl"`}</code> (0, 8px, 12px, 14px, 16px)</li>
                      <li><code>columnBorder</code>/<code>rowBorder</code>: <code>{`"none" | "sm" | "md" | "lg" | "xl"`}</code> (0, 1px, 2px, 3px, 4px)</li>
                      <li><code>fontSize</code>: e.g., <code>"1rem"</code></li>
                    </ul>
                    <li>Example: <code>{`styles={{ rounded: "lg", spacing: "md", columnBorder: "md" }}`}</code></li>
                  </ul>
                </li>

                <li>
                  <strong><code>colorScheme</code></strong>
                  <ul className="space-y-2 mt-2 ml-4">
                    <li>Type: <code>{`Partial<ColorScheme>`}</code></li>
                    <li>Default: <code>{`{ PRIMARY: "#ffffff", SECONDARY: "#f9f8fd", ACCENT: "#f9f8fd", BORDER: "#f2f2f2" }`}</code></li>
                    <li>Properties:</li>
                    <ul className="space-y-1 ml-4">
                      <li><code>PRIMARY</code>: Main background.</li>
                      <li><code>SECONDARY</code>: Hover/fixed column background.</li>
                      <li><code>ACCENT</code>: Header background.</li>
                      <li><code>BORDER</code>: Border color.</li>
                    </ul>
                    <li>Tip: For light/dark themes, use CSS variables (e.g., <code>"var(--primary)"</code>).</li>
                    <li>Example: <code>{`colorScheme={{ PRIMARY: "var(--primary)", BORDER: "var(--border)" }}`}</code></li>
                  </ul>
                </li>
              </ol>
            </div>
          </>
        }
      />

      <Heading
        title="CSS Class Targeting"
        content={
          <div>
            <p className="mb-4">
              TableNex elements have descriptive class names for custom styling. Import <code>"react-tablenex/style.css"</code> for defaults, then override with CSS or Tailwind. Key classes include:
            </p>
            <ul className="space-y-2 ml-4">
              <li><code>.tablenex_container</code>: Outer wrapper.</li>
              <li><code>.tablenex_table</code>: Main table.</li>
              <li><code>.tablenex_header-cell</code>: Headers.</li>
              <li><code>.tablenex_data-cell</code>: Data cells.</li>
              <li><code>.tablenex_row</code>: Rows.</li>
              <li><code>.tablenex_footer-row</code>: Footer rows.</li>
              <li><code>.tablenex_expanded-row</code>: Expanded rows.</li>
              <li><code>.tablenex_mobile</code>: Mobile container (when <code>responsive={true}</code>).</li>
            </ul>
            <p className="mt-4">Example:</p>
            <CodeBlock
              description="Custom CSS for header cells"
              head={{ title: "CSS", icon: null }}
              code={`.tablenex_header-cell {
  background: var(--accent);
}`}
            />
          </div>
        }
      />

      <Heading
        title="Styling Rows and Columns"
        content={
          <div>
            <p className="mb-4">Use <code>styledRows</code> and <code>styledColumns</code> for specific styling, with Tailwind support:</p>
            <ol className="space-y-6 list-decimal list-inside">
              <li>
                <strong><code>styledRows</code></strong>
                <ul className="space-y-2 mt-2 ml-4">
                  <li>Type: <code>{`StyledRow[]`}</code></li>
                  <li>Properties:</li>
                  <ul className="space-y-1 ml-4">
                    <li><code>keyValue</code>: Matches <code>keyField</code> value (e.g., <code>1</code>).</li>
                    <li><code>style</code>: <code>{`React.CSSProperties`}</code> (e.g., <code>{`{ backgroundColor: "yellow" }`}</code>).</li>
                    <li><code>className</code>: Custom class (e.g., <code>"bg-yellow-200"</code>)—Tailwind works seamlessly.</li>
                  </ul>
                  <li>Note: If Tailwind classes don’t apply due to defaults, use <code>!</code> (e.g., <code>"!bg-red-300"</code>).</li>
                  <li>Example: <code>{`styledRows={[{ keyValue: 1, style: { color: "red" }, className: "!bg-yellow-200 text-lg" }]}`}</code></li>
                </ul>
              </li>

              <li>
                <strong><code>styledColumns</code></strong>
                <ul className="space-y-2 mt-2 ml-4">
                  <li>Type: <code>{`StyledColumn[]`}</code></li>
                  <li>Properties:</li>
                  <ul className="space-y-1 ml-4">
                    <li><code>columnName</code>: Matches <code>accessor</code> (e.g., <code>"id"</code>).</li>
                    <li><code>style</code>: <code>{`React.CSSProperties`}</code> (e.g., <code>{`{ fontWeight: "bold" }`}</code>).</li>
                    <li><code>className</code>: Custom class (e.g., <code>"bg-blue-100"</code>)—Tailwind works out of the box.</li>
                  </ul>
                  <li>Note: Use <code>!</code> (e.g., <code>"!text-center"</code>) if Tailwind styles are overridden.</li>
                  <li>Example: <code>{`styledColumns={[{ columnName: "id", style: { color: "blue" }, className: "!bg-blue-100" }]}`}</code></li>
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
            description="Here’s how to use TableNex with various styling props:"
            head={{ title: "JavaScript", icon: null }}
            code={`import TableNex from "react-tablenex";
import "react-tablenex/style.css";

const MyTable = () => {
  const data = [{ id: 1, name: "John" }, { id: 2, name: "Jane" }];
  return (
    <TableNex
      data={data}
      columns={[{ accessor: "id" }, "name"]}
      styles={{ rounded: "lg", spacing: "md" }}
      colorScheme={{ PRIMARY: "var(--primary)", ACCENT: "var(--accent)" }}
      styledRows={[{ keyValue: 1, className: "!bg-yellow-200 font-bold" }]}
      styledColumns={[{ columnName: "id", className: "!bg-blue-100 text-center" }]}
    />
  );
};`}
          />
        }
      />

      <Heading
        title="CSS Variables for Themes"
        content={
          <div>
            <p className="mb-4">For light/dark mode support, define variables in your CSS:</p>
            <CodeBlock
              description="CSS variables for theming"
              head={{ title: "CSS", icon: null }}
              code={`:root {
  --primary: #ffffff;
  --accent: #ddd;
  --border: #f2f2f2;
}
@media (prefers-color-scheme: dark) {
  :root {
    --primary: #1a1a1a;
    --accent: #333;
    --border: #666;
  }
}`}
            />
          </div>
        }
      />

      <Heading
        title="Tips"
        content={
          <ul className="space-y-2 ml-4">
            <li>Use <code>styles</code> and <code>colorScheme</code> with <code>"var(--name)"</code> for global theming.</li>
            <li>Apply <code>styledRows</code> and <code>styledColumns</code> with Tailwind via <code>className</code>; add <code>!</code> if needed.</li>
            <li>Target classes for full control or custom themes.</li>
          </ul>
        }
      />
    </>
  );
};

export default StylingPage;