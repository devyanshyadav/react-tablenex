import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import TableNex from "react-tablenex";
import "react-tablenex/style.css"; // Ensure this is imported for styling
import CopyClip from "../global-cmp/copy-clip";

const tableData = [
  {
    id: "CRS-001",
    course: "Introduction to Python",
    enrolled: 45,
    instructor: "Dr. Emily Stone",
    startDate: "2025-05-01",
  },
  {
    id: "CRS-002",
    course: "Advanced Data Science",
    enrolled: 28,
    instructor: "Prof. Mark Rivera",
    startDate: "2025-05-03",
  },
  {
    id: "CRS-003",
    course: "Web Development Basics",
    enrolled: 60,
    instructor: "Sarah Kim",
    startDate: "2025-04-29",
  },
  {
    id: "CRS-004",
    course: "Machine Learning Fundamentals",
    enrolled: 35,
    instructor: "Dr. Alan Chen",
    startDate: "2025-05-05",
  },
];

const usageCode = `
   import TableNex from "react-tablenex";
   import "react-tablenex/style.css";

   const tableData = [
     { id: "CRS-001", course: "Introduction to Python", enrolled: 45, instructor: "Dr. Emily Stone", startDate: "2025-05-01" },
     { id: "CRS-002", course: "Advanced Data Science", enrolled: 28, instructor: "Prof. Mark Rivera", startDate: "2025-05-03" },
     { id: "CRS-003", course: "Web Development Basics", enrolled: 60, instructor: "Sarah Kim", startDate: "2025-04-29" },
     { id: "CRS-004", course: "Machine Learning Fundamentals", enrolled: 35, instructor: "Dr. Alan Chen", startDate: "2025-05-05" },
   ];

   const UsageCode = () => {
     return <TableNex data={tableData} />
   }

   export default UsageCode;
`;

const Usage = () => {
  return (
    <section className="border grid md:grid-cols-[35%_65%] overflow-hidden gap-2 m-2 rounded-md border-border-accent">
      <div className="bg-secondary border-b md:border-b-0 text-sm border-r relative border-border-accent p-3 flex items-center">
        <div className="absolute z-10 lineShadow top-3 right-3 border border-border-accent bg-primary rounded-sm p-1 grid place-items-center aspect-square">
          <CopyClip textClip={usageCode} />
        </div>
        <code className="overflow-hidden opacity-80 font-mono">
          <pre className="overflow-hidden">{usageCode}</pre>
        </code>
      </div>
      <div className="bg-primary p-2 md:p-10 grid place-items-center bg-gradient-to-tr from-primary to-secondary">
        <TableNex
          data={tableData}
        />
        <Link
          href="/docs/examples"
          className="hover:underline px-2 text-left text-sm w-full flex items-center gap-1 justify-end"
        >
          See More Examples <IoIosArrowForward />
        </Link>
      </div>
    </section>
  );
};

export default Usage;
