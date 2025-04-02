"use client";
import { useState } from "react";
import TableNex from "react-tablenex";
import "react-tablenex/style.css";

const RowSelection = () => {
  const data = [
    {
      taskId: "T-001",
      task: "Update Website Banner",
      assignedTo: "Michael Carter",
      dueDate: "2025-04-10",
    },
    {
      taskId: "T-002",
      task: "Review Q1 Sales Report",
      assignedTo: "Sophia Nguyen",
      dueDate: "2025-04-15",
    },
  ];

  const [selectedRows, setSelectedRows] = useState(new Set());

  const handleSelect = (id: string) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) newSelected.delete(id);
    else newSelected.add(id);
    setSelectedRows(newSelected);
  };

  const handleSelectAll = () => {
    if (selectedRows.size === data.length) setSelectedRows(new Set());
    else setSelectedRows(new Set(data.map((row) => row.taskId)));
  };

  const customColumns = [
    {
      accessor: "select",
      header: (
        <input
          type="checkbox"
          onChange={handleSelectAll}
          checked={selectedRows.size === data.length}
        />
      ),
      render: (_: any, row: any) => (
        <input
          type="checkbox"
          checked={selectedRows.has(row.taskId)}
          onChange={() => {
            handleSelect(row.taskId);
            alert(`Selected task: ${row.taskId} - ${row.task}`);
          }}
        />
      ),
      width: "60px",
    },
    { accessor: "taskId", header: "Task ID" },
    { accessor: "task", header: "Task Name" },
    { accessor: "assignedTo", header: "Assigned To" },
    { accessor: "dueDate", header: "Due Date" },
  ];

  return (
    <div className="w-full">
      <p>Selected: {selectedRows.size} tasks</p>
      <TableNex
        data={data}
        columns={customColumns}
        keyField="taskId"
        colorScheme={{
          PRIMARY: "var(--primary)",
          SECONDARY: "var(--secondary)",
          ACCENT: "var(--accent)",
          BORDER: "var(--border-accent)",
        }}
      />
    </div>
  );
};

export default RowSelection;
