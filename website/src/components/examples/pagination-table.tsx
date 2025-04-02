"use client";
import { useState } from "react";
import TableNex from "react-tablenex";
import "react-tablenex/style.css";

const PaginationTable = () => {
  const fullData = [
    { logId: "LOG-001", user: "Michael Carter", action: "Login", timestamp: "2025-04-01 09:15" },
    { logId: "LOG-002", user: "Sophia Nguyen", action: "Update Profile", timestamp: "2025-04-01 10:30" },
    { logId: "LOG-003", user: "James Patel", action: "Logout", timestamp: "2025-04-01 12:00" },
    { logId: "LOG-004", user: "Emma Davis", action: "Password Reset", timestamp: "2025-04-01 14:45" },
    { logId: "LOG-005", user: "Liam Brown", action: "Login", timestamp: "2025-04-01 16:20" },
    { logId: "LOG-006", user: "Olivia Kim", action: "Upload File", timestamp: "2025-04-02 08:10" },
    { logId: "LOG-007", user: "Noah Lee", action: "Logout", timestamp: "2025-04-02 09:50" },
    { logId: "LOG-008", user: "Ava Wilson", action: "Login", timestamp: "2025-04-02 11:25" },
    { logId: "LOG-009", user: "Ethan Moore", action: "Update Settings", timestamp: "2025-04-02 13:15" },
    { logId: "LOG-010", user: "Isabella Clark", action: "Logout", timestamp: "2025-04-02 15:40" },
    { logId: "LOG-011", user: "Lucas Taylor", action: "Login", timestamp: "2025-04-02 17:00" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 2;
  const totalPages = Math.ceil(fullData.length / rowsPerPage);

  const paginatedData = fullData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="w-full">
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <TableNex
        data={paginatedData}
        keyField="logId"
        colorScheme={{
          PRIMARY: "var(--primary)",
          SECONDARY: "var(--secondary)",
          ACCENT: "var(--accent)",
          BORDER: "var(--border-accent)",
        }}
      />
      <div className="flex items-center gap-3 mt-3 *:rounded-md *:bg-secondary *:border *:border-border-accent *:p-1 *:px-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationTable;