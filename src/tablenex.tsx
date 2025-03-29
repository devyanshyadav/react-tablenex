import React, { useMemo } from "react";
import { ColorScheme, TableProps, TableStyles, TableCell } from "./types";

declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}

// Default Color Scheme and Styles remain unchanged
const DEFAULT_COLOR_SCHEME: ColorScheme = {
  PRIMARY: "#ffffff",
  SECONDARY: "#f9f8fd",
  ACCENT: "#f9f8fd",
  BORDER_ACCENT: "#f2f2f2",
};

const DEFAULT_STYLES: TableStyles = {
  rounded: "sm",
  spacing: "md",
  columnBorder: "none",
  rowBorder: "sm",
  fontSize: "0.9rem",
};

// Utility Functions
const formatCellContent = (value: unknown): React.ReactNode => {
  if (React.isValidElement(value)) return value;
  if (value == null) return "-";
  if (typeof value === "boolean") return value.toString();
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
};

const getCellWidth = (cell: TableCell | string): string => {
  return typeof cell === "string" ? "auto" : cell.width || "auto";
};

const extractCellText = (cell: TableCell | string): string => {
  return typeof cell === "string" ? cell : cell.accessor;
};

const normalizeKey = (key: string): string => key.toLowerCase().trim();

const getRoundedValue = (value: string | undefined): string => {
  const sizes: Record<string, string> = { sm: "4px", md: "8px", lg: "12px" };
  return value && sizes[value] ? sizes[value] : value || "4px";
};

const getSpacingValue = (value: string | undefined): string => {
  const sizes: Record<string, string> = { sm: "8px", md: "16px", lg: "24px" };
  return value && sizes[value] ? sizes[value] : value || "16px";
};

const getBorderValue = (value: string | undefined): string => {
  const sizes: Record<string, string> = {
    none: "0",
    sm: "1px solid",
    md: "2px solid",
  };
  return value && sizes[value] ? sizes[value] : value || "1px solid";
};

// Main Component
const TableNex: React.FC<TableProps> = ({
  data,
  columns = [],
  fixedColumns = [],
  styledRows = [],
  styledColumns = [],
  expandedRows = [],
  footer = [],
  keyField,
  noDataMessage = "No data found",
  colorScheme = {},
  responsive = false,
  styles = {},
}) => {
  const isDevelopment =
    process.env.NODE_ENV === "development" || !process.env.NODE_ENV;
  const effectiveColorScheme: ColorScheme = {
    ...DEFAULT_COLOR_SCHEME,
    ...colorScheme,
  };
  const effectiveStyles: TableStyles = {
    ...DEFAULT_STYLES,
    ...styles,
  };

  const cellHeaders = useMemo(
    () =>
      columns.length
        ? columns.map(extractCellText)
        : data.length
        ? Object.keys(data[0])
        : [],
    [columns, data]
  );
  const normalizedHeaders = useMemo(
    () => cellHeaders.map(normalizeKey),
    [cellHeaders]
  );
  const effectiveKeyField = keyField || "id";
  const normalizedKeyField = normalizeKey(effectiveKeyField);

  if (isDevelopment && !normalizedHeaders.includes(normalizedKeyField)) {
    throw new Error(
      `For keys, there should be one column with 'keyField' specified as "${effectiveKeyField}" or an "id" column present. Available cells: ${cellHeaders.join(
        ", "
      )}.`
    );
  }

  const styledRowsMap = useMemo(() => {
    const map = new Map<
      string,
      { className: string; style?: React.CSSProperties }
    >();
    styledRows.forEach((sr) => {
      map.set(String(sr.keyValue), {
        className: sr.className || "",
        style: sr.style,
      });
    });
    return map;
  }, [styledRows]);

  const styledColumnsMap = useMemo(() => {
    const map = new Map<
      string,
      { className: string; style?: React.CSSProperties }
    >();
    styledColumns.forEach((sc) => {
      map.set(normalizeKey(sc.columnName), {
        className: sc.className || "",
        style: sc.style,
      });
    });
    return map;
  }, [styledColumns]);

  if (isDevelopment && data.length && styledRows.length) {
    const keyValuesInData = data.map((row) => {
      const key = Object.keys(row).find(
        (k) => normalizeKey(k) === normalizedKeyField
      );
      return key ? String(row[key]) : undefined;
    });
    const invalidStyledRows = styledRows.filter(
      (sr) => !keyValuesInData.includes(String(sr.keyValue))
    );
    if (invalidStyledRows.length) {
      throw new Error(
        `The following keyValues in styledRows do not match any row's "${effectiveKeyField}" value: ${invalidStyledRows
          .map((sr) => `"${sr.keyValue}"`)
          .join(", ")}. Available key values in data: ${keyValuesInData
          .filter(Boolean)
          .join(", ")}.`
      );
    }
  }

  if (isDevelopment && data.length) {
    const keyValues = data.map((row) => {
      const key = Object.keys(row).find(
        (k) => normalizeKey(k) === normalizedKeyField
      );
      return key ? String(row[key]) : undefined;
    });
    const seen = new Set<string>();
    const duplicates = keyValues.filter(
      (kv) => kv && seen.has(kv) && !seen.add(kv)
    );
    if (duplicates.length) {
      throw new Error(
        `Duplicate values found for "${effectiveKeyField}" in rows: ${duplicates.join(
          ", "
        )}. Each row must have a unique key value.`
      );
    }
  }

  const getRowStyles = (row: Record<string, React.ReactNode>) => {
    const key = Object.keys(row).find(
      (k) => normalizeKey(k) === normalizedKeyField
    );
    const keyValue = key ? String(row[key]) : undefined;
    return styledRowsMap.get(keyValue as string) || { className: "" };
  };

  const getCellStyles = (header: string) => {
    return (
      styledColumnsMap.get(normalizeKey(header)) || { className: "", style: {} }
    );
  };

  const renderHeaderCell = (cell: TableCell | string, index: number) => {
    const cellText = extractCellText(cell);
    const displayContent =
      typeof cell === "string" ? cellText : cell.header || cellText;
    const width = getCellWidth(cell);
    const isFixed = fixedColumns.some(
      (fc) => normalizeKey(fc) === normalizeKey(cellText)
    );
    const isLastFixed = isFixed && index === cellHeaders.length - 1;
    const cellStyle = typeof cell !== "string" ? cell.style : undefined;
    const cellClassName = typeof cell !== "string" ? cell.className || "" : "";

    return (
      <th
        key={cellText}
        className={`tablenex_header-cell ${
          isFixed ? "tablenex_cell-sticky" : ""
        } ${
          isLastFixed
            ? "tablenex_cell-sticky-right"
            : isFixed
            ? "tablenex_cell-sticky-left"
            : ""
        } ${cellClassName}`}
        style={{
          "--tablenex-row-border": getBorderValue(effectiveStyles.rowBorder),
          "--tablenex-column-border": getBorderValue(
            effectiveStyles.columnBorder
          ),
          "--tablenex-spacing": getSpacingValue(effectiveStyles.spacing),
          "--tablenex-bg-color": effectiveColorScheme.ACCENT,
          "--tablenex-border-color": effectiveColorScheme.BORDER_ACCENT,
          width,
          maxWidth: width === "auto" ? "none" : width,
          ...cellStyle,
        }}
        role="columnheader"
        aria-label={cellText}
      >
        <div className="tablenex_header-content">
          <span className="tablenex_text-truncate">{displayContent}</span>
        </div>
      </th>
    );
  };

  const renderDataCell = (
    row: Record<string, React.ReactNode>,
    header: string,
    cell: TableCell | string,
    colIndex: number
  ) => {
    const width = getCellWidth(cell);
    const isFixed = fixedColumns.some(
      (fc) => normalizeKey(fc) === normalizeKey(header)
    );
    const isLastFixed = isFixed && colIndex === cellHeaders.length - 1;
    const rowKey = Object.keys(row).find(
      (key) => normalizeKey(key) === normalizeKey(header)
    );
    const value = rowKey ? row[rowKey] : undefined;
    const renderedContent =
      typeof cell !== "string" && cell?.render
        ? cell.render(value, row)
        : formatCellContent(value);

    const { className: columnClassName, style: columnStyle } =
      getCellStyles(header);

    return (
      <td
        key={`${row[effectiveKeyField] || colIndex}-${header}`}
        className={`tablenex_data-cell ${
          isFixed ? "tablenex_cell-sticky" : ""
        } ${
          isLastFixed
            ? "tablenex_cell-sticky-right"
            : isFixed
            ? "tablenex_cell-sticky-left"
            : ""
        } ${columnClassName}`}
        style={{
          "--tablenex-row-border": getBorderValue(effectiveStyles.rowBorder),
          "--tablenex-column-border": getBorderValue(
            effectiveStyles.columnBorder
          ),
          "--tablenex-spacing": getSpacingValue(effectiveStyles.spacing),
          width,
          maxWidth: width === "auto" ? "none" : width,
          borderColor: effectiveColorScheme.BORDER_ACCENT,
          backgroundColor: isFixed ? effectiveColorScheme.SECONDARY : undefined,
          ...columnStyle,
        }}
      >
        <div className="tablenex_cell-content">{renderedContent}</div>
      </td>
    );
  };

  const renderFooter = () => (
    <tfoot
      className="tablenex_footer"
      style={{
        "--tablenex-bg-color": effectiveColorScheme.PRIMARY,
        "--tablenex-border-color": effectiveColorScheme.BORDER_ACCENT,
      }}
    >
      {footer.map((footerRow, rowIndex) => (
        <tr
          key={`footer-row-${rowIndex}`}
          className={`tablenex_footer-row ${footerRow.className || ""}`}
          style={{
            "--tablenex-column-border": getBorderValue(
              effectiveStyles.columnBorder
            ),
            "--tablenex-row-border": getBorderValue(effectiveStyles.rowBorder),
            "--tablenex-spacing": getSpacingValue(effectiveStyles.spacing),
            "--tablenex-border-color": effectiveColorScheme.BORDER_ACCENT,
            ...footerRow.style,
          }}
        >
          {footerRow.cells.map((cell, cellIndex) => (
            <td
              key={`footer-cell-${rowIndex}-${cellIndex}`}
              colSpan={cell.colSpan || 1}
              className={`tablenex_footer-cell ${cell.className || ""}`}
              style={{
                "--tablenex-border-color": effectiveColorScheme.BORDER_ACCENT,
                ...cell.style,
              }}
            >
              <div className="tablenex_footer-content">{cell.content}</div>
            </td>
          ))}
        </tr>
      ))}
    </tfoot>
  );

  const renderTable = () => (
    <table className="tablenex_table" role="table" aria-label="Data Table">
      <thead
        className="tablenex_thead"
        style={{
          "--tablenex-bg-color": effectiveColorScheme.PRIMARY,
          "--tablenex-border-color": effectiveColorScheme.BORDER_ACCENT,
        }}
      >
        <tr className="tablenex_thead-row">
          {columns.length
            ? columns.map(renderHeaderCell)
            : cellHeaders.map(renderHeaderCell)}
        </tr>
      </thead>
      <tbody className="tablenex_tbody">
        {data.length ? (
          data.map((row, rowIndex) => {
            const { className, style } = getRowStyles(row);
            const key = Object.keys(row).find(
              (k) => normalizeKey(k) === normalizedKeyField
            );
            const keyValue = key ? row[key] : rowIndex;
            const expandedRowsAfter = expandedRows.filter(
              (er) => String(er.afterRowKey) === String(keyValue)
            );

            return (
              <React.Fragment key={keyValue as React.Key}>
                <tr
                  className={`tablenex_row ${className}`}
                  style={{
                    "--tablenex-bg-hover": effectiveColorScheme.SECONDARY,
                    "--tablenex-row-border": getBorderValue(
                      effectiveStyles.rowBorder
                    ),
                    "--tablenex-bg-color": effectiveColorScheme.PRIMARY,
                    "--tablenex-border-color":
                      effectiveColorScheme.BORDER_ACCENT,
                    ...style,
                  }}
                  role="row"
                >
                  {cellHeaders.map((header, colIndex) =>
                    renderDataCell(
                      row,
                      header,
                      columns[colIndex] || header,
                      colIndex
                    )
                  )}
                </tr>
                {expandedRowsAfter.map((er, index) => (
                  <tr
                    key={`${keyValue}-expanded-${index}`}
                    className="tablenex_expanded-row"
                    style={{
                      "--tablenex-row-border": getBorderValue(
                        effectiveStyles.rowBorder
                      ),
                      "--tablenex-bg-color": effectiveColorScheme.PRIMARY,
                    }}
                    role="row"
                  >
                    <td
                      colSpan={cellHeaders.length}
                      className="tablenex_expanded-cell"
                      style={{
                        "--tablenex-border-color":
                          effectiveColorScheme.BORDER_ACCENT,
                        padding: 0,
                      }}
                    >
                      {er.element}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            );
          })
        ) : (
          <tr className="tablenex_empty-row" role="row">
            <td
              colSpan={cellHeaders.length}
              className="tablenex_empty-cell tablenex_data-cell"
              style={{
                "--tablenex-spacing": getSpacingValue(effectiveStyles.spacing),
              }}
            >
              {noDataMessage}
            </td>
          </tr>
        )}
      </tbody>
      {footer.length > 0 && data.length > 0 && renderFooter()}
    </table>
  );

  const renderMobileFooter = () => (
    <div
      className="tablenex_mobile-footer"
      style={{
        "--tablenex-row-border": getBorderValue(effectiveStyles.rowBorder),
        "--tablenex-rounded": getRoundedValue(effectiveStyles.rounded),
        "--tablenex-bg-color": effectiveColorScheme.PRIMARY,
        "--tablenex-border-color": effectiveColorScheme.BORDER_ACCENT,
      }}
    >
      {footer.map((footerRow, rowIndex) => (
        <div
          key={`mobile-footer-row-${rowIndex}`}
          className={`tablenex_mobile-footer-row ${footerRow.className || ""}`}
          style={{
            "--tablenex-row-border": getBorderValue(effectiveStyles.rowBorder),
            "--tablenex-border-color": effectiveColorScheme.BORDER_ACCENT,
            ...footerRow.style,
          }}
        >
          {footerRow.cells.map((cell, cellIndex) => (
            <div
              key={`mobile-footer-cell-${rowIndex}-${cellIndex}`}
              className={`tablenex_mobile-footer-cell ${cell.className || ""}`}
              style={{
                "--tablenex-spacing": getSpacingValue(effectiveStyles.spacing),
                ...cell.style,
              }}
            >
              <div className="tablenex_mobile-footer-content">
                {cell.content}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  const renderMobileView = () => (
    <div
      className="tablenex_mobile"
      style={{
        "--tablenex-bg-color": effectiveColorScheme.PRIMARY,
      }}
    >
      {data.length ? (
        data.map((row, rowIndex) => {
          const { className, style } = getRowStyles(row);
          const key = Object.keys(row).find(
            (k) => normalizeKey(k) === normalizedKeyField
          );
          const keyValue = key ? row[key] : rowIndex;
          const expandedRowsAfter = expandedRows.filter(
            (er) => String(er.afterRowKey) === String(keyValue)
          );

          return (
            <React.Fragment key={keyValue as React.Key}>
              <div
                className={`tablenex_mobile-row ${className}`}
                style={{
                  "--tablenex-container-border": getBorderValue(
                    effectiveStyles.rowBorder
                  ),
                  "--tablenex-rounded": getRoundedValue(
                    effectiveStyles.rounded
                  ),
                  "--tablenex-bg-color": effectiveColorScheme.PRIMARY,
                  "--tablenex-bg-hover": effectiveColorScheme.SECONDARY,
                  "--tablenex-border-color": effectiveColorScheme.BORDER_ACCENT,
                  ...style,
                }}
                role="row"
              >
                {cellHeaders.map((header) => {
                  const rowKey = Object.keys(row).find(
                    (key) => normalizeKey(key) === normalizeKey(header)
                  );
                  const value = rowKey ? row[rowKey] : undefined;
                  const { className: columnClassName, style: columnStyle } =
                    getCellStyles(header);
                  const cellDef = columns.find(
                    (c) => extractCellText(c) === header
                  );
                  const cellStyle = cellDef?.style;
                  const cellClassName = cellDef?.className || "";

                  return (
                    <div
                      key={`${row[effectiveKeyField] || rowIndex}-${header}`}
                      className="tablenex_mobile-cell"
                      role="cell"
                      style={{
                        "--tablenex-row-border": getBorderValue(
                          effectiveStyles.rowBorder
                        ),
                        "--tablenex-border-color":
                          effectiveColorScheme.BORDER_ACCENT,
                        borderBlock:
                          normalizeKey(header) === normalizedKeyField
                            ? `2px solid ${effectiveColorScheme.BORDER_ACCENT}`
                            : undefined,
                        "--tablenex-bg-color":
                          normalizeKey(header) === normalizedKeyField
                            ? effectiveColorScheme.ACCENT
                            : "transparent",
                      }}
                    >
                      <div
                        className={`tablenex_mobile-cell-header ${columnClassName} ${cellClassName}`}
                        style={{
                          "--tablenex-column-border": getBorderValue(
                            effectiveStyles.columnBorder
                          ),
                          "--tablenex-spacing": getSpacingValue(
                            effectiveStyles.spacing
                          ),
                          "--tablenex-border-color":
                            effectiveColorScheme.BORDER_ACCENT,
                          ...cellStyle,
                          ...columnStyle,
                        }}
                      >
                        {header}
                        {styles.columnBorder === "none" && ": "}
                      </div>
                      <div
                        className={`tablenex_mobile-cell-value ${columnClassName}`}
                        style={{
                          "--tablenex-spacing": getSpacingValue(
                            effectiveStyles.spacing
                          ),
                        }}
                      >
                        {cellDef?.render
                          ? cellDef.render(value, row)
                          : formatCellContent(value)}
                      </div>
                    </div>
                  );
                })}
              </div>
              {expandedRowsAfter.map((er, index) => (
                <div
                  key={`${keyValue}-expanded-${index}`}
                  className="tablenex_mobile-expanded"
                  style={{
                    "--tablenex-rounded": getRoundedValue(
                      effectiveStyles.rounded
                    ),
                    "--tablenex-expanded-border": getBorderValue(
                      effectiveStyles.rowBorder
                    ),
                    "--tablenex-border-color":
                      effectiveColorScheme.BORDER_ACCENT,
                    "--tablenex-bg-color": effectiveColorScheme.PRIMARY,
                    width: "100%",
                  }}
                >
                  {er.element}
                </div>
              ))}
            </React.Fragment>
          );
        })
      ) : (
        <div
          className="tablenex_mobile-empty"
          style={{
            "--tablenex-container-border": getBorderValue(
              effectiveStyles.rowBorder
            ),
            "--tablenex-rounded": getRoundedValue(effectiveStyles.rounded),
            "--tablenex-spacing": getSpacingValue(effectiveStyles.spacing),
            "--tablenex-border-color": effectiveColorScheme.BORDER_ACCENT,
            "--tablenex-bg-color": effectiveColorScheme.PRIMARY,
          }}
          role="status"
        >
          {noDataMessage}
        </div>
      )}
      {footer.length > 0 && data.length > 0 && renderMobileFooter()}
    </div>
  );

  return (
    <div
      className="tablenex_container"
      style={{
        "--tablenex-container-border": getBorderValue(
          effectiveStyles.rowBorder
        ),
        "--tablenex-rounded": getRoundedValue(effectiveStyles.rounded),
        "--tablenex-border-color": effectiveColorScheme.BORDER_ACCENT,
        "--tablenex-bg-color": effectiveColorScheme.PRIMARY,
        "--tablenex-font-size": effectiveStyles.fontSize || "0.9rem", // Fallback to default
      }}
    >
      {responsive ? (
        <>
          <div className="tablenex_desktop">{renderTable()}</div>
          <div className="tablenex_mobile-view">{renderMobileView()}</div>
        </>
      ) : (
        renderTable()
      )}
    </div>
  );
};

export default TableNex;
