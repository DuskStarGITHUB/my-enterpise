/**
 * =====================================================
 *  NAME    : Grid.tsx
 *  DATE      : 08/10/2025
 *  DATE_MODIFY       : 08/10/2025
 *  DESCRIPTION: GRID CONTAINER GENERATOR
 * =====================================================
 */

// DEPENDENCIES
import React from "react";

// LOGIC
interface GridConfig {
  [key: string]: {
    className: string;
    maxChildren: number;
    render?: (children: React.ReactNode[]) => JSX.Element;
  };
}

// COMPONENT
const GridSelector = ({
  type = "default",
  className = "",
  children,
}: {
  type?: string;
  className?: string;
  children: React.ReactNode;
}) => {
  const childrenArray = React.Children.toArray(children);
  let gridClass = "";
  let maxChildren = 0;
  let render: ((children: React.ReactNode[]) => JSX.Element) | null = null;
  if (type.match(/^\d+$/)) {
    const cols = parseInt(type);
    gridClass = `grid grid-cols-${cols}`;
    maxChildren = cols;
  } else if (type.match(/^\d+-\d+$/)) {
    const [cols, rows] = type.split("-").map(Number);
    gridClass = `grid grid-cols-${cols} grid-rows-${rows}`;
    maxChildren = cols * rows;
  } else {
    const gridConfig: GridConfig = {
      default: {
        className: "grid grid-cols-2 grid-rows-1",
        maxChildren: 2,
        render: (children) => (
          <>
            <aside>{children[0]}</aside>
            <article>{children[1]}</article>
          </>
        ),
      },
      dashboard: {
        className: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4",
        maxChildren: 4,
        render: (children) => (
          <>
            <header>{children[0]}</header>
            <aside>{children[1]}</aside>
            <article>{children[2]}</article>
            <footer>{children[3]}</footer>
          </>
        ),
      },
      cards: {
        className:
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        maxChildren: 12,
      },
    };
    const config = gridConfig[type];
    if (!config) {
      return (
        <div className="flex justify-center items-center h-screen w-screen z-50 bg-red-500 text-white">
          <span>Error: Invalid grid type</span>
        </div>
      );
    }
    gridClass = config.className;
    maxChildren = config.maxChildren;
    render = config.render as
      | ((children: React.ReactNode) => JSX.Element)
      | null;
  }
  if (childrenArray.length > maxChildren) {
    return (
      <div className="flex justify-center items-center h-screen w-screen z-50 bg-red-500 text-white">
        <span>
          Error: Elements number exceeded. Fix: Reduce elements inside component
          our Generate a Grid more Big.
        </span>
      </div>
    );
  }
  gridClass += ` ${className}`;
  return (
    <div className={`${gridClass}`}>
      {render
        ? render(childrenArray)
        : childrenArray.map((child, index) => (
            <div key={index}>
              {child}
            </div>
          ))}
    </div>
  );
};
export default React.memo(GridSelector);
