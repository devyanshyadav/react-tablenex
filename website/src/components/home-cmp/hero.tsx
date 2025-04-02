import Link from "next/link";
import React from "react";
import { FaReact } from "react-icons/fa";
import TableNex, { TableColumn } from "react-tablenex";
import "react-tablenex/style.css";
import CopyClip from "../global-cmp/copy-clip";

// Sample data representing real project tasks
const tableData = [
  {
    id: 1,
    task: "UI Design",
    title: "Redesign Dashboard Interface",
    status: "In Progress",
    priority: "High",
    estHours: 24,
    createdAt: "2025-03-25",
    assignedTo: "John Doe",
  },
  {
    id: 2,
    task: "API Integration",
    title: "Implement Payment Gateway",
    status: "Pending",
    priority: "Medium",
    estHours: 16,
    createdAt: "2025-03-26",
    assignedTo: "Jane Smith",
  },
  {
    id: 3,
    task: "Database",
    title: "Optimize User Queries",
    status: "Completed",
    priority: "Low",
    estHours: 12,
    createdAt: "2025-03-24",
    assignedTo: "Bob Johnson",
  },
  {
    id: 4,
    task: "Testing",
    title: "Conduct Security Audit",
    status: "In Progress",
    priority: "High",
    estHours: 20,
    createdAt: "2025-03-27",
    assignedTo: "Alice Brown",
  },
];

const Hero = () => {
  const columns: TableColumn[] = [
    {
      accessor: "select",
      width: "60px",
      header: <input type="checkbox" style={{ cursor: "pointer" }} />,
      render: () => <input type="checkbox" style={{ cursor: "pointer" }} />,
    },
    {
      accessor: "id",
    },
    {
      accessor: "task",
    },
    {
      accessor: "title",
    },
    {
      accessor: "status",
    },
    {
      accessor: "priority",
    },
    {
      accessor: "estHours",
      header: "Est. Hours",
    },
    {
      accessor: "createdAt",
      header: "Created Date",
    },
    {
      accessor: "assignedTo",
      header: "Assigned To",
    },
  ];

  return (
    <section className="w-full heroSection flex items-center p-5 flex-col justify-center">
      <div className="relative w-full z-10 border-t border-border-accent/40">
        <div className="heroGradient z-30 inset-0 absolute grid place-items-center md:place-items-end">
          <div className="w-full flex items-center flex-col justify-end h-52 relative bg-gradient-to-b from-transparent to-primary">
            <FaReact className="text-8xl opacity-10 absolute bottom-10" />
            <div className="z-10 relative text-center grid place-items-center">
              <h1 className="text-5xl md:text-6xl font-medium">TableNex</h1>
              <p className="ml-3">Next-gen table component for React.</p>
            </div>
          </div>
        </div>
        <TableNex
          data={tableData}
          colorScheme={{
            PRIMARY: "var(--primary)",
            SECONDARY: "var(--secondary)",
            ACCENT: "var(--accent)",
            BORDER: "var(--border-accent)",
          }}
          styles={{
            columnBorder: "sm",
          }}
          noDataMessage="No tasks available"
          columns={columns}
        />
      </div>
      <br />
      <div className="p-1.5 mt-2 lineShadow px-3 bg-gradient-to-tr from-primary to-secondary rounded-md flex items-center gap-6 border border-border-accent">
        <code>npm i react-tablenex</code>
        <CopyClip textClip="npm i react-tablenex" />
      </div>
      <Link href="/docs/introduction" className="underline text-sm font-light mt-2">
        Documentation
      </Link>
    </section>
  );
};

export default Hero;
