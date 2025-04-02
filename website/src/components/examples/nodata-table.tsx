import React from "react";
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
      colorScheme={{
        PRIMARY: "var(--primary)",
        SECONDARY: "var(--secondary)",
        ACCENT: "var(--accent)",
        BORDER: "var(--border-accent)",
      }}
    />
  );
};

export default NoDataTable;
