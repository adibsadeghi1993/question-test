import React from "react";

const ErrorMessage = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        padding: 10,
        background: "red",
        textAlign: "center",
        color:"white",
        textTransform:"capitalize",
        marginBottom:10,
        borderRadius:"5px",
        marginTop:"10px"
      }}
    >
        {children}
    </div>
  );
};

export default ErrorMessage;
