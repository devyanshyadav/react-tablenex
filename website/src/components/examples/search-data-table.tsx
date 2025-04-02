"use client";
import { useState } from "react";
import TableNex from "react-tablenex";
import "react-tablenex/style.css";

const SearchTable = () => {
  const initialData = [
    { appId: "APP-001", applicant: "Michael Carter", position: "Software Engineer", status: "Under Review" },
    { appId: "APP-002", applicant: "Sophia Nguyen", position: "Product Manager", status: "Interview Scheduled" },
    { appId: "APP-003", applicant: "James Patel", position: "Data Analyst", status: "Rejected" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = initialData.filter(
    (row) =>
      row.applicant.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    { accessor: "appId", header: "Application ID" },
    { accessor: "applicant", header: "Applicant" },
    { accessor: "position", header: "Position" },
    { accessor: "status", header: "Status" },
  ];

  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Search by applicant, position, or status..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-1.5 px-2 rounded-md ring-1 text-sm transition-all ring-border-accent outline-0 my-3 focus:ring-2"
      />
      <TableNex
        data={filteredData}
        columns={columns}
        keyField="appId"
        colorScheme={{
          PRIMARY: "var(--primary)",
          SECONDARY: "var(--secondary)",
          ACCENT: "var(--accent)",
          BORDER: "var(--border-accent)",
        }}
        noDataMessage="No matching applications found"
      />
    </div>
  );
};

export default SearchTable;