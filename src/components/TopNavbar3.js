import React from "react";
import Card from "@mui/material/Card";
import CachedIcon from "@mui/icons-material/Cached";
import TuneIcon from "@mui/icons-material/Tune";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DoneIcon from "@mui/icons-material/Done";
import VerticalLong from "./VerticalLong";

const TopNavbar3 = () => {
  return (
    <div>
      <Card
        sx={{
          background: "rgba(255, 255,255,255 )",
          display: "flex",
          width: "50%",
          marginLeft: 77,
          height: 40,
          marginTop: 2,
          borderRadius: 4,
          border: "solid",
          borderColor: "rgba(255, 255, 255, 0.6 )",
          justifyContent: "space-between",
        }}
      >
        <DoneIcon style={{ height: "auto", color: "black", width: "4%" }} />
        <TuneIcon style={{ height: "auto", color: "black", width: "4%" }} />
        <CachedIcon style={{ height: "auto", color: "black", width: "4%" }} />
        <DeleteOutlinedIcon
          style={{ height: "auto", color: "black", width: "auto" }}
        />
      </Card>
      <VerticalLong />
    </div>
  );
};

export default TopNavbar3;
