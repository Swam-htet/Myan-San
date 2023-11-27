import React from "react";

const TableCell = ({children, className}) => {
    return (
        <span className={`text-sm whitespace-nowrap ${className}`}>
      {children || "-"}
    </span>
    );
};

export default TableCell;
