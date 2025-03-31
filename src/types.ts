// Type Definitions

/**
 * Represents an individual cell's content and styling.
 */
export interface TableCell {
  accessor: string; // Changed from "cell" to "accessor" for consistency with table libraries
  header?: React.ReactNode; // Changed from "customElement" to "header" for clarity
  width?: string;
  style?: React.CSSProperties;
  className?: string;
  render?: (
    value: React.ReactNode,
    row: Record<string, React.ReactNode>
  ) => React.ReactNode; // Custom render function for cell content
}

/**
 * Represents a column definition for the table.
 */
export interface TableColumn {
  accessor: string; // Key to access data (replaces "cell")
  header?: React.ReactNode; // Column header content (replaces "customElement")
  width?: string; // Column width
  style?: React.CSSProperties; // Inline styles for the column
  className?: string; // Custom CSS class for the column
  render?: (
    value: React.ReactNode,
    row: Record<string, React.ReactNode>
  ) => React.ReactNode; // Custom render function for cell content
}

/**
 * Represents a row in the table footer.
 */
export interface FooterRow {
  cells: {
    content: React.ReactNode;
    colSpan?: number;
    className?: string;
    style?: React.CSSProperties;
  }[];
  className?: string;
  style?: React.CSSProperties;
  
}

/**
 * Defines styling for a specific row based on its key value.
 */
export interface StyledRow {
  keyValue: string | number; // Unique identifier for the row
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Defines styling for a specific column based on its accessor.
 */
export interface StyledColumn {
  columnName: string; // Matches the accessor of the column
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Represents an expandable sub-row that appears after a specific row.
 */
export interface ExpandedRow {
  afterRowKey: string | number; // Key of the row after which this expands
  element: React.ReactNode; // Content to display in the sub-row
}

/**
 * Defines the color scheme for the table.
 */
export interface ColorScheme {
  PRIMARY: string; // Main background color
  SECONDARY: string; // Secondary background (e.g., fixed columns)
  ACCENT: string; // Highlight color (e.g., headers)
  BORDER: string; // Border color
}

/**
 * Size options for styling properties.
 */
export type SizeOption = "none" | "sm" | "md" | "lg" | "xl";

/**
 * Styling options for the table's appearance.
 */
export interface TableStyles {
  rounded?: SizeOption;
  spacing?: SizeOption;
  columnBorder?: SizeOption;
  rowBorder?: SizeOption;
  fontSize?: string;
}

/**
 * Props for the TableNex component.
 */
export interface TableProps {
  data: Record<string, React.ReactNode>[]; // Table data rows
  columns?: TableColumn[]; // Column definitions
  fixedColumns?: string[]; // Columns to be fixed (sticky)
  styledRows?: StyledRow[]; // Custom styles for specific rows
  styledColumns?: StyledColumn[]; // Custom styles for specific columns
  expandedRows?: ExpandedRow[]; // Expandable sub-rows
  footer?: FooterRow[]; // Footer rows with cells
  keyField?: string; // Unique key field for rows
  noDataMessage?: React.ReactNode; // Message when no data is present
  colorScheme?: Partial<ColorScheme>; // Optional color overrides
  responsive?: boolean; // Enable responsive layout
  styles?: Partial<TableStyles>; // Optional style overrides
}