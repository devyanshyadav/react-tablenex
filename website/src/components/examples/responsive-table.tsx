import TableNex from "react-tablenex";
import "react-tablenex/style.css";

const ResponsiveTable = () => {
  const data = [
    { projectId: "PRJ-001", project: "Website Redesign", lead: "Michael Carter", status: "In Progress", deadline: "2025-05-01" },
    { projectId: "PRJ-002", project: "Mobile App Launch", lead: "Sophia Nguyen", status: "Completed", deadline: "2025-03-30" },
  ];

  return (
    <TableNex
      data={data}
      keyField="projectId"
      colorScheme={{
        PRIMARY: "var(--primary)",
        SECONDARY: "var(--secondary)",
        ACCENT: "var(--accent)",
        BORDER: "var(--border-accent)",
      }}
      responsive={true} // Enables responsive behavior for mobile
    />
  );
};

export default ResponsiveTable;