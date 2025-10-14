/* eslint-disable no-duplicate-imports */
/**
 * =====================================================
 *  NAME    : Grid.tsx
 *  DATE      : 08/10/2025
 *  DATE_MODIFY       : 14/10/2025
 *  DESCRIPTION: GRID CONTAINER GENERATOR
 * =====================================================
 */

// DEPENDENCIES
import type { JSX } from "react";
import React from "react";

// LOGIC
interface GridSelectorProps {
  type?: {
    columns?: Array<string>;
    rows?: Array<string>;
  };
  className?: string;
  children: React.ReactNode;
}

// COMPONENT
const GridSelector = ({
  type,
  className = "",
  children,
}: GridSelectorProps): JSX.Element => {
  const childrenArray = React.Children.toArray(children);
  const columns = type?.columns ? type.columns.join(" ") : "1fr";
  const rows = type?.rows ? type.rows.join(" ") : "1fr";
  const style: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: columns,
    gridTemplateRows: rows,
  };
  return (
    <div className={className} style={style}>
      {" "}
      {childrenArray.map((child, index) => (
        <React.Fragment key={index}>{child}</React.Fragment>
      ))}{" "}
    </div>
  );
};
export default React.memo(GridSelector);
