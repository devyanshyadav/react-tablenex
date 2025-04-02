import TableNex from "react-tablenex";
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
        colorScheme={{
          PRIMARY: "var(--primary)",
          SECONDARY: "var(--secondary)",
          ACCENT: "var(--accent)",
          BORDER: "var(--border-accent)",
        }}
        styles={{
          columnBorder: "sm",
        }}
      />
    </div>
  );
};

export default StickyColumns;
