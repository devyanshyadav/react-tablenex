import { BsTerminal } from "react-icons/bs"; // Assuming you're using react-icons
import Title from "@/components/global-cmp/title";
import Heading from "@/components/global-cmp/heading";
import CodeBlock from "@/components/doc-cmp/code-block";

const InstallationPage = () => {
  return (
    <>
      <Title
        title="Installation"
        description={`TableNex is a modern React table component that’s easy to install and use. Here’s how to get it into your project.`}
      />

      <Heading
        title="Prerequisites"
        content={
          <div>
            <ul className="space-y-2">
              <li>- Node.js: 14.x or higher with npm.</li>
              <li>- React: 16.8 or higher.</li>
              <li>- A React project with npm or yarn.</li>
            </ul>
          </div>
        }
      />

      <Heading
        title="Step 1: Install"
        content={
            <CodeBlock
              description={`Run this in your project directory:`}
              head={{ title: "Terminal", icon: <BsTerminal /> }}
              code={"npm install react-tablenex"}
            />
        }
      />

      <Heading
        title="Step 2: Import"
        content={
            <CodeBlock
             description={`Add this to your component file:`}
              head={{ title: "JavaScript", icon: null }}
              code={'import TableNex from "react-tablenex";'}
            />
        }
      />

      <Heading
        title="Step 3: Styling (Optional)"
        content={
            <CodeBlock
              description={`TableNex includes built-in CSS. For static sites or server-side
              rendering, import it for instant loading:`}
              head={{ title: "JavaScript", icon: null }}
              code={'import "react-tablenex/style.css";'}
            />
        }
      />

      <Heading
        title="Quick Start Example"
        content={
            <CodeBlock
              description={`Here's a simple table to get you started:`}
              head={{ title: "JavaScript", icon: null }}
              code={`import TableNex from "react-tablenex";
import "react-tablenex/style.css";

const App = () => {
  const data = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
  ];

  return <TableNex data={data} />;
};

export default App;`}
            />
        }
      />

      <Heading
        title="Compatibility"
        content={
          <div>
            <p>
              Works with Create React App, Next.js, Vite, and TypeScript
              projects.
            </p>
          </div>
        }
      />

      <Heading
        title="Troubleshooting"
        content={
          <div>
            <ul className="space-y-2">
              <li>
                - <strong>Module not found</strong>: Check `npm install` and
                `node_modules`.
              </li>
              <li>
                - <strong>Styles delayed</strong>: Import the CSS file for SSR.
              </li>
            </ul>
          </div>
        }
      />
    </>
  );
};

export default InstallationPage;
