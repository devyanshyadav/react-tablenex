"use client";
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
      colorScheme={{
        PRIMARY: "var(--primary)",
        SECONDARY: "var(--secondary)",
        ACCENT: "var(--accent)",
        BORDER: "var(--border-accent)",
      }}
      styles={{
        rounded: "sm",
        spacing: "md",
        columnBorder: "none",
        rowBorder: "sm",
      }}
    />
  );
};

export default SortingTable;