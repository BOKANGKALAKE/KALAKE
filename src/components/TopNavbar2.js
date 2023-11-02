import React from "react";
import Card from "@mui/material/Card";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";
import FormatColorTextOutlinedIcon from "@mui/icons-material/FormatColorTextOutlined";
import FormatUnderlinedOutlinedIcon from "@mui/icons-material/FormatUnderlinedOutlined";
import FormatBoldOutlinedIcon from "@mui/icons-material/FormatBoldOutlined";
import StrikethroughSOutlinedIcon from "@mui/icons-material/StrikethroughSOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import FormatSizeOutlinedIcon from "@mui/icons-material/FormatSizeOutlined";
import TopNavbar3 from "./TopNavbar3";
const TopNavbar2 = () => {
  return (
    <div>
      <Card
        sx={{
          background: "rgba(255, 255,255, 255 )",
          display: "flex",
          width: "50%",
          margin: "auto",
          height: 40,
          marginTop: 2,
          marginLeft: 77,
          borderRadius: 4,
          border: "solid",
          borderColor: "rgba(255, 255, 255, 0.6 )",
          justifyContent: "space-between",
        }}
      >
        <UndoOutlinedIcon
          style={{ height: "auto", color: "black", width: "4%" }}
        />
        <RedoOutlinedIcon
          style={{ height: "auto", color: "black", width: "4%" }}
        />
        <FormatSizeOutlinedIcon
          style={{ height: "auto", color: "black", width: "4%" }}
        />
        <FormatBoldOutlinedIcon
          style={{ height: "auto", color: "black", width: "4%" }}
        />
        <FormatColorTextOutlinedIcon
          style={{ height: "auto", color: "black", width: "4%" }}
        />
        <StrikethroughSOutlinedIcon
          style={{ height: "auto", color: "black", width: "4%" }}
        />
        <FormatUnderlinedOutlinedIcon
          style={{ height: "auto", color: "black", width: "4%" }}
        />
        <FormatListBulletedOutlinedIcon
          style={{ height: "auto", color: "black", width: "4%" }}
        />
      </Card>
      <TopNavbar3 />
    </div>
  );
};

export default TopNavbar2;
