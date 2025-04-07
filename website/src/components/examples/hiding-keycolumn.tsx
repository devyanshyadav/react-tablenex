import TableNex from "react-tablenex";
import "react-tablenex/style.css";


const HidingKeyColumn = () => {
  const data = [
    {
      taskId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
      taskName: "Design Database Schema",
      assignedTo: "Alex Johnson",
      status: "In Progress",
      dueDate: "2025-04-15",
    },
    {
      taskId: "550e8400-e29b-41d4-a716-446655440000",
      taskName: "Implement API Endpoints",
      assignedTo: "Emily Davis",
      status: "Completed",
      dueDate: "2025-04-10",
    },
  ];

  return (
    <TableNex
      data={data}
      colorScheme={{
        PRIMARY: "var(--primary)",
        SECONDARY: "var(--secondary)",
        ACCENT: "var(--accent)",
        BORDER: "var(--border-accent)",
      }}
      keyField={{ keyId: "taskId", isVisible: false }} // Hides the UUID-based taskId column
    />
  );
};

export default HidingKeyColumn;