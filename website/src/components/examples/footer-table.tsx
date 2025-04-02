"use client";
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
        { content: `${data.length} entries`, style: { fontStyle: "italic" } },
      ],
    },
  ];

  return (
    <TableNex
      data={data}
      keyField="expenseId"
      colorScheme={{
        PRIMARY: "var(--primary)",
        SECONDARY: "var(--secondary)",
        ACCENT: "var(--accent)",
        BORDER: "var(--border-accent)",
      }}
      columns={columns}
      footer={footer}
      styles={{ columnBorder: "sm" }}
    />
  );
};

export default FooterTable;