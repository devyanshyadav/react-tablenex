"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import TableNex from "react-tablenex";
import "react-tablenex/style.css";

const ExpandedRowsTable = () => {
  const data = [
    {
      apptId: "APT-001",
      patient: "Michael Carter",
      date: "2025-04-05",
      status: "Confirmed",
      notes: "Follow-up for blood test results",
    },
    {
      apptId: "APT-002",
      patient: "Sophia Nguyen",
      date: "2025-04-06",
      status: "Pending",
      notes: "Complains of persistent cough",
    },
    {
      apptId: "APT-003",
      patient: "James Patel",
      date: "2025-04-07",
      status: "Completed",
      notes: "Annual physical exam",
    },
    {
      apptId: "APT-004",
      patient: "Emma Davis",
      date: "2025-04-08",
      status: "Cancelled",
      notes: "Patient rescheduled due to conflict",
    },
  ];

  const [expandedRowId, setExpandedRowId] = useState<string | null>(null);

  const toggleRow = (id: string) => {
    setExpandedRowId(expandedRowId === id ? null : id);
  };

  const columns = [
    {
      accessor: "info",
      header: "Details",
      width: "60px",
      render: (_: any, row: any) => (
        <button onClick={() => toggleRow(row.apptId)} style={{ cursor: "pointer" }}>
          {expandedRowId === row.apptId ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      ),
    },
    { accessor: "apptId", header: "Appointment ID" },
    { accessor: "patient", header: "Patient" },
    { accessor: "date", header: "Date" },
    { accessor: "status", header: "Status" },
  ];

  const expandedRows = expandedRowId
    ? [
        {
          afterRowKey: expandedRowId,
          element: (
            <div style={{ padding: "10px" }}>
              <h4>Appointment {expandedRowId} Notes</h4>
              <p>
                Details:{" "}
                {data.find((row) => row.apptId === expandedRowId)?.notes}
              </p>
            </div>
          ),
        },
      ]
    : [];

  return (
    <TableNex
      data={data}
      keyField="apptId"
      colorScheme={{
        PRIMARY: "var(--primary)",
        SECONDARY: "var(--secondary)",
        ACCENT: "var(--accent)",
        BORDER: "var(--border-accent)",
      }}
      columns={columns}
      expandedRows={expandedRows}
    />
  );
};

export default ExpandedRowsTable;