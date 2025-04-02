import React from "react";
import Title from "@/components/global-cmp/title";
import Heading from "@/components/global-cmp/heading";
import "react-tablenex/style.css";

const Introduction = () => {
  return (
    <>
      <Title
        title="Introduction"
        description={`Welcome to TableNex, a next-generation table component for React designed to simplify your data display needs. It eliminates the pain of managing rows, columns, and <tr><td> chaos. With TableNex, you get a flexible, modern table solution that's easy to use and customize.`}
      />
      <Heading
        title="What Makes TableNex Special?"
        content={
          <ul className="space-y-2">
            <li>
              - <strong>Effortless Setup:</strong> Define your data
              and let TableNex handle the rest—no more manual HTML table
              battles.
            </li>
            <li>
              - <strong>Highly Customizable:</strong> Tailor the look and feel
              with colors, styles, and layouts that match your project.
            </li>
            <li>
              - <strong>Responsive Design:</strong> Works seamlessly on both
              desktop and mobile devices with minimal effort.
            </li>
            <li>
              - <strong>Advanced Features:</strong> Enjoy fixed columns, styled
              rows, expanded content, and footers, all out of the box.
            </li>
            <li>
              - <strong>Developer-Friendly:</strong> Built-in TypeScript support
              and validation logic to catch errors early.
            </li>
          </ul>
        }
      />
      <Heading
        title="Why Use TableNex?"
        content={
          <div>
            <p>
              If you've ever spent hours tweaking table layouts, fighting CSS,
              or debugging row alignments, TableNex is your solution. It's
              perfect for developers who want a reliable, reusable component
              that saves time and delivers a polished result. Whether you're
              building dashboards, data grids, or simple lists, TableNex takes
              you from concept to completion with ease.
            </p>
            <br />
            <p>
              In this documentation, you'll learn how to install, configure, and
              customize TableNex to fit your needs. Let's get started and
              transform the way you build tables in React!
            </p>
          </div>
        }
      />

    </>
  );
};

export default Introduction;
