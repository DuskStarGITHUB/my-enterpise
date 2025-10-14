/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-duplicate-imports */
/**
 * =====================================================
 *  NAME    : Tag.tsx
 *  DATE    : 09/10/2025
 *  DATE_MODIFY : 13/10/2025
 *  DESCRIPTION : TAG ELEMENT DYNAMIC
 * =====================================================
 */

// DEPENDENCIES
import type React from "react";
import { useEffect, useState } from "react";

// LOGIC
type TagProps = {
  text?: string;
  color?: keyof typeof colorMap;
  textType?:
    | "normal"
    | "thin"
    | "extralight"
    | "light"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
  desing?: "full" | "ghost" | "void";
  border?: "square" | "rounded";
  className?: string;
};
const colorMap: Record<string, { bg: string; border: string }> = {
  gray: { bg: "bg-gray-700", border: "border-gray-500" },
  green: { bg: "bg-green-700", border: "border-green-500" },
  red: { bg: "bg-red-700", border: "border-red-500" },
  blue: { bg: "bg-blue-700", border: "border-blue-500" },
  yellow: { bg: "bg-yellow-700", border: "border-yellow-500" },
  black: { bg: "bg-black", border: "border-black" },
};
const textTypeMap: Record<string, string> = {
  normal: "font-normal",
  thin: "font-thin",
  extralight: "font-extralight",
  light: "font-light",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black",
};
const desingTypes = ["full", "ghost", "void"];

// COMPONENT
const Tag: React.FC<TagProps> = ({
  text = "Tag",
  color = "gray",
  textType = "normal",
  desing = "full",
  border = "square",
  className,
}) => {
  const [desingSelect, setDesingSelect] = useState("");
  const [borderSelect, setBorderSelect] = useState("");
  useEffect(() => {
    const colors = colorMap[color] || colorMap.gray;
    if (desingTypes.includes(desing)) {
      if (desing === "full")
        setDesingSelect(`${colors.border} border-2 ${colors.bg}`);
      else if (desing === "ghost") setDesingSelect("border-none bg-none");
      else if (desing === "void")
        setDesingSelect(`${colors.border} border-2 bg-none`);
    } else setDesingSelect(`${colors.border} border-2 ${colors.bg}`);
    setBorderSelect(border === "rounded" ? "rounded-full" : "rounded-none");
  }, [color, desing, border]);
  return (
    <div
      className={[
        className,
        "flex text-xs contain-content max-w-[20vh] max-h-[6vh] items-center text-center justify-center px-3 py-1",
        desingSelect,
        borderSelect,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <p className={[textTypeMap[textType] || "font-normal"].join(" ")}>
        {text}
      </p>
    </div>
  );
};
export default Tag;
