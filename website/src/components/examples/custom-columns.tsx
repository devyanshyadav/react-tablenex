import { FaPhoneAlt, FaUser } from "react-icons/fa";
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
      colorScheme={{
        PRIMARY: "var(--primary)",
        SECONDARY: "var(--secondary)",
        ACCENT: "var(--accent)",
        BORDER: "var(--border-accent)",
      }}
    />
  );
};

export default MultiSelectTable;
