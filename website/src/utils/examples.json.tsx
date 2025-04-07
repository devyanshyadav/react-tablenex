import BasicTable from "@/components/examples/basic-table";
import CustomColumnsTable from "@/components/examples/custom-columns";
import ExpandedRowsTable from "@/components/examples/expanded-rows-table";
import FooterTable from "@/components/examples/footer-table";
import HidingKeyColumn from "@/components/examples/hiding-keycolumn";
import NoDataTable from "@/components/examples/nodata-table";
import PaginationTable from "@/components/examples/pagination-table";
import ResponsiveTable from "@/components/examples/responsive-table";
import RowSelection from "@/components/examples/row-selection";
import SearchTable from "@/components/examples/search-data-table";
import SortingTable from "@/components/examples/sorting-table";
import StickyColumns from "@/components/examples/sticky-columns";
import StyledTable from "@/components/examples/style-table";
import StyledRowsColumnsTable from "@/components/examples/styled-rows-columns";

const ExamplesCode = [
  {
    title: "Basic Table",
    description: "Simple static table. keyField optional with 'id'",
    code: `import TableNex from "react-tablenex";
import "react-tablenex/style.css";

const BasicTable = () => {
  const data = [
    { repId: "SR001", salesRep: "Michael Carter", region: "North America", totalSales: 125400, dealsClosed: 18 },
    { repId: "SR002", salesRep: "Emily Davis", region: "Europe", totalSales: 98000, dealsClosed: 15 },
  ];
  return (
    <TableNex
      data={data}
      keyField="repId" // Unique identifier for each row, optional if column 'id' is present
    />
  );
};

export default BasicTable;
`,
    component: <BasicTable />,
  },
  {
    title: "Hiding Key Column",
    description: "Table with hidden key column",
    code: `import TableNex from "react-tablenex";
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
      keyField={{ keyId: "taskId", isVisible: false }} // Hides the UUID-based taskId column
    />
  );
};

export default HidingKeyColumn;`,
    component: <HidingKeyColumn />,
  },
  {
    title: "Custom Styles",
    description:
      "Basic table with custom styles for spacing, borders, and font size",
    code: `import TableNex from "react-tablenex";
import "react-tablenex/style.css";

const StyledTable = () => {
  const data = [
    { sku: "PRD-4567", product: "Wireless Headphones", category: "Electronics", stock: 142, price: 89.99 },
    { sku: "PRD-8901", product: "Leather Notebook", category: "Stationery", stock: 75, price: 12.50 },
  ];
  return (
    <TableNex
      data={data}
      keyField="sku"
      colorScheme={{
        PRIMARY: "var(--primary)",
        SECONDARY: "var(--secondary)",
        ACCENT: "#60a5fa", // A nice blue accent to highlight headers or hover effects
        BORDER: "var(--border-accent)",
      }}
      styles={{
        rounded: "lg", // Large rounded corners for a modern look
        spacing: "lg", // Large spacing for readability
        columnBorder: "md", // Medium column borders to separate data
        rowBorder: "md", // Medium row borders for clear row distinction
        fontSize: "0.8rem", // Compact font size for a dense table
      }}
    />
  );
};

export default StyledTable;`,
    component: <StyledTable />,
  },
  {
    title: "Custom Columns",
    description: "Basic table with custom column data",
    code: `import { FaPhoneAlt, FaUser } from "react-icons/fa";
import TableNex from "react-tablenex";
import "react-tablenex/style.css";

const MultiSelectTable = () => {
  const data = [
    {
      id: "EMP-001",
      employee: (
        <div className="flex items-center gap-1">
          <img
            className="w-8 h-8 rounded-full aspect-square object-cover border border-slate-500"
            src="https://img.icons8.com/officel/80/person-male-skin-type-3.png"
          />{" "}
          Michael Carter
        </div>
      ),
      department: "Sales",
      contact: "415-555-1234",
    },
    {
      id: "EMP-002",
      employee: (
        <div className="flex items-center gap-1">
          <img
            className="w-8 h-8 rounded-full aspect-square object-cover border border-slate-500"
            src="https://img.icons8.com/officel/80/person-female-skin-type-1-2.png"
          />{" "}
          Sophia Nguyen
        </div>
      ),
      department: "Engineering",
      contact: "510-555-5678",
    },
  ];

  const customColumns = [
    { accessor: "id", header: "Employee ID" },
    {
      accessor: "employee",
      header: (
        <div className="flex items-center gap-1">
          <FaUser /> Employee
        </div>
      ),
    },
    { accessor: "department", header: "Department" },
    {
      accessor: "contact",
      header: (
        <div className="flex items-center gap-1">
          <FaPhoneAlt /> Contact
        </div>
      ),
    },
  ];

  return (
    <TableNex
      data={data}
      columns={customColumns}
    />
  );
};

export default MultiSelectTable;

`,
    component: <CustomColumnsTable />,
  },
  {
    title: "Row Selection",
    description:
      "Table with multi-select checkboxes. Tracks selected rows with state.",
    code: `
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
          onChange={() => {handleSelect(row.taskId); alert("Selected row:"+row.taskId+" has user "+row.assignedTo)}}
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
      />
    </div>
  );
};

export default RowSelection;`,
    component: <RowSelection />,
  },
  {
    title: "Fixed or Sticky Column",
    description:
      "Table with sticky columns. Fixed columns remain visible while scrolling horizontally.",
    code: `import TableNex from "react-tablenex";
import "react-tablenex/style.css";

const StickyColumns = () => {
  const data = [
    {
      orderId: "ORD_001",
      customer: "Michael Carter",
      product: "Wireless Headphones",
      quantity: 2,
      unitPrice: 89.99,
      total: 179.98,
      orderDate: "2025-03-25",
      status: "Shipped",
      tracking: "1Z9999W999999999",
      deliveryDate: "2025-03-28",
    },
    {
      orderId: "ORD_002",
      customer: "Sophia Nguyen",
      product: "Leather Notebook",
      quantity: 5,
      unitPrice: 12.5,
      total: 62.5,
      orderDate: "2025-03-26",
      status: "Processing",
      tracking: "N/A",
      deliveryDate: "Pending",
    },
  ];
  return (
    <div className="max-w-lg">
      <TableNex
        data={data}
        fixedColumns={["orderId", "customer"]} // Sticky columns for quick reference
        styles={{
          columnBorder: "sm",
        }}
      />
    </div>
  );
};

export default StickyColumns;
`,
    component: <StickyColumns />,
  },
  {
    title: "Responsive Table",
    description:
      "Table that adapts to smaller screens. Responsive behavior enabled.",
    code: `import TableNex from "react-tablenex";
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
      responsive={true} // Enables responsive behavior for mobile
    />
  );
};

export default ResponsiveTable;`,
    component: <ResponsiveTable />,
  },
  {
    title: "Styled Rows and Columns",
    description:
      "Table with styled rows and columns. Custom styles applied to specific columns and rows.",
    code: `import TableNex from "react-tablenex";
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
`,
    component: <StyledRowsColumnsTable />,
  },
  {
    title: "Pagination",
    description:
      "Table with pagination. Rows are split into pages with navigation controls.",
    code: `
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

export default PaginationTable; `,
    component: <PaginationTable />,
  },
  {
    title: "Sorting Rows",
    description:
      "Table with sorting. Rows can be sorted by clicking on column headers.",
    code: `
import { useState } from "react";
import { LuArrowUpDown } from "react-icons/lu";
import TableNex from "react-tablenex";
import "react-tablenex/style.css";

// Define the data type
interface RowData {
  productId: string;
  product: string;
  sales: number;
}

const SortingTable = () => {
  const initialData = [
    { productId: "PRD-001", product: "Wireless Headphones", sales: 120 },
    { productId: "PRD-002", product: "Leather Notebook", sales: 85 },
    { productId: "PRD-003", product: "Smart Watch", sales: 150 },
  ];

  const [data, setData] = useState(initialData);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof RowData | null;
    direction: "asc" | "desc";
  }>({
    key: null,
    direction: "asc",
  });

  const handleSort = (key: keyof RowData) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setData(sortedData);
    setSortConfig({ key, direction });
  };

  const columns = [
    {
      accessor: "productId",
      header: (
        <button className="flex items-center gap-1" onClick={() => handleSort("productId")}>
          Product ID
          <LuArrowUpDown />
        </button>
      ),
      width: "120px",
    },
    {
      accessor: "product",
      header: "Product Name",
    },
    {
      accessor: "sales",
      header: (
        <button className="flex items-center gap-1" onClick={() => handleSort("sales")}>
          Sales
          <LuArrowUpDown />
        </button>
      ),
    },
  ];

  return (
    <TableNex
      data={data}
      columns={columns}
      keyField="productId"
    />
  );
};

export default SortingTable;`,
    component: <SortingTable />,
  },
  {
    title: "Empty Table",
    description: "Table with no data. Empty table displayed.",
    code: `import React from "react";
import TableNex from "react-tablenex";
import "react-tablenex/style.css";

const NoDataTable = () => {
  return (
    <TableNex
      data={[]}
      columns={[
        { accessor: "id" },
        { accessor: "name" },
        { accessor: "age" },
        { accessor: "phone" },
        { accessor: "address" },
        { accessor: "city" },
      ]}
      noDataMessage="No data available"
    />
  );
};

export default NoDataTable;
`,
    component: <NoDataTable />,
  },
  {
    title: "Expanded Rows",
    description:
      "Table with expanded rows. Rows can be expanded to show additional details.",
    code: `
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
      columns={columns}
      expandedRows={expandedRows}
    />
  );
};

export default ExpandedRowsTable;`,
    component: <ExpandedRowsTable />,
  },
  {
    title: "Footer Data",
    description: "Table with footer showing total sum and order count",
    code: `
import TableNex from "react-tablenex";
import "react-tablenex/style.css";

const FooterTable = () => {
  const data = [
    { expenseId: "EXP-001", employee: "Michael Carter", amount: 75.50, category: "Travel" },
    { expenseId: "EXP-002", employee: "Sophia Nguyen", amount: 120.25, category: "Supplies" },
  ];

  const totalSum = data.reduce((sum, row) => sum + row.amount, 0);

  const columns = [
    { accessor: "expenseId", header: "Expense ID" },
    { accessor: "employee", header: "Employee" },
    { accessor: "amount", header: "Amount ($)" },
    { accessor: "category", header: "Category" },
  ];

  const footer = [
    {
      cells: [
        { content: "Total Expenses", colSpan: 2 },
        { content: totalSum.toFixed(2) }, // Format to 2 decimal places
        { content: data.length + " entries", style: { fontStyle: "italic" } },
      ],
    },
  ];

  return (
    <TableNex
      data={data}
      keyField="expenseId"
      columns={columns}
      footer={footer}
      styles={{ columnBorder: "sm" }}
    />
  );
};

export default FooterTable;
`,
    component: <FooterTable />,
  },
  {
    title: "Search Row",
    description:
      "Table with search functionality. Rows can be filtered by typing in the search box.",
    code: `
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
        noDataMessage="No matching applications found"
      />
    </div>
  );
};

export default SearchTable;
`,
    component: <SearchTable />,
  },
];
export default ExamplesCode;
