/**
 * =====================================================
 *  NAME    : Tag.tsx
 *  DATE      : 09/10/2025
 *  DATE_MODIFY       : 09/10/2025
 *  DESCRIPTION: TAG ELEMENT DINAMIC
 * =====================================================
 */

// DEPENDENCIES
import React, { useEffect, useState } from "react";

// LOGIC
type TagProps = {
  text?: string;
  color?: string;
  textType?: string;
  desing?: string;
  border?: string;
  className?: string;
};
const textTypes = [
  "normal",
  "thin",
  "extralight",
  "light",
  "medium",
  "semibold",
  "bold",
  "extrabold",
  "black",
];
const desingsTypes = ["full", "ghost", "void"];
const borderTypes = ["square", "rounded"];

// COMPONENT
const Tag: React.FC<TagProps> = ({
  text = "Tag",
  color = "gray",
  textType = "normal",
  desing = "full",
  border = "square",
  className,
}) => {
  const [textTypeState, useTextType] = useState<string>(textType);
  const [desingSelect, useDesingSelect] = useState<string>(desing);
  const [borderSelect, useBorderSelect] = useState<string>(border);
  useEffect(() => {
    const existTextType = textTypes.find((type) => type === textType);
    if (existTextType) {
      useTextType(textType);
    } else {
      useTextType("normal");
    }
  }),
    [textTypeState, textTypes];
  useEffect(() => {
    const existDesingType = desingsTypes.find((type) => type === desing);
    if (existDesingType) {
      if (desing == "full") {
        useDesingSelect(`border-${color}-500 border-2 bg-${color}-700`);
      }
      if (desing == "ghost") {
        useDesingSelect(`border-none bg-none`);
      }
      if (desing == "void") {
        useDesingSelect(`border-${color}-500 border-2 bg-none`);
      }
    } else {
      useDesingSelect(`border-${color}-500 border-2 bg-${color}-700`);
    }
  }),
    [desingSelect, desingsTypes];
  useEffect(() => {
    const existBorderType = borderTypes.find((type) => type === border);
    if (existBorderType) {
      if (border == "square") {
        useBorderSelect(`rounded-none`);
      }
      if (border == "rounded") {
        useBorderSelect(`rounded-md`);
      }
    } else {
      useBorderSelect("rounded-none");
    }
  }),
    [borderSelect, borderTypes];
  return (
    <div
      className={`${className} flex text-xs contain-content max-w-[20vh] max-h-[6vh] items-center text-center justify-center px-3 py-1 ${desingSelect} ${borderSelect}`}
    >
      <p className={`font-${textTypeState}`}>{text}</p>
    </div>
  );
};
export default Tag;
