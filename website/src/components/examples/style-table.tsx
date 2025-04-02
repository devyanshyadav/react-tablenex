import TableNex from "react-tablenex";
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

export default StyledTable;