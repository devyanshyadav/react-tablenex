import TableNex from "react-tablenex";
import "react-tablenex/style.css";

const StyledRowsColumnsTable = () => {
  const data = [
    {
      ticketId: "TCK-001",
      issue: "Login Failure",
      priority: "High",
      status: "Open",
    },
    {
      ticketId: "TCK-002",
      issue: "Payment Error",
      priority: "Medium",
      status: "Resolved",
    },
  ];

  return (
    <TableNex
      data={data}
      keyField="ticketId"
      columns={[
        { accessor: "ticketId", header: "Ticket ID", width: "120px" },
        { accessor: "issue", header: "Issue", width: "250px" },
        { accessor: "priority", header: "Priority", width: "100px" },
        { accessor: "status", header: "Status", width: "120px" },
      ]}
      colorScheme={{
        PRIMARY: "var(--primary)",
        SECONDARY: "var(--secondary)",
        ACCENT: "var(--accent)",
        BORDER: "var(--border-accent)",
      }}
      styledRows={[
        {
          keyValue: "TCK-001",
          style: { backgroundColor: "#fef3f2", color: "black" },
        }, // Highlight high-priority ticket in a subtle red shade
      ]}
      styledColumns={[
        {
          columnName: "issue",
          style: { fontStyle: "italic", textDecoration: "underline" },
        }, // Emphasize the issue description
      ]}
      styles={{ columnBorder: "sm" }}
    />
  );
};

export default StyledRowsColumnsTable;
