import React from "react";
import Card from "@mui/material/Card";

const VerticalLong = () => {
  return (
    <div>
      <Card
        sx={{
          background: "rgba(255, 255, 255, 255 )",
          display: "flex",
          width: "25%",
          margin: "auto",
          height: 300,
          marginTop: 2,
          marginLeft: 78,
          borderRadius: 4,
          border: "solid",
          borderColor: "rgba(255, 255, 255, 0.6 )",
          justifyContent: "space-between",
        }}
      ></Card>
    </div>
  );
};

export default VerticalLong;
