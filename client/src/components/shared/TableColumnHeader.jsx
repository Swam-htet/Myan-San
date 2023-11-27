import React from "react";

const TableColumnHeader = ({children,}) => {
    return (
        <p
            style={{
                fontSize: "14px",
                fontWeight: "500",
                whiteSpace: "nowrap",
                margin: "12px 0",
            }}
        >
            {children}
        </p>
    );
};

export default TableColumnHeader;
