import TableNex from "react-tablenex";
import "react-tablenex/style.css";

const BasicTable = () => {
  const data = [
    { repId: "SR001", salesRep: "Michael Carter", region: "North America", totalSales: 125400, dealsClosed: 18 },
    { repId: "SR002", salesRep: "Emily Davis", region: "Europe", totalSales: 98000, dealsClosed: 15 },
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
      keyField="repId" // Unique identifier for each row
    />
  );
};

export default BasicTable;