import React from "react";
import Card from "@mui/material/Card";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HistoryIcon from "@mui/icons-material/History";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import HorizontalComp2 from "./HorizontalComp2";

const HorizontalComp1 = () => {
  return (
    <div>
      <Card
        sx={{
          background: "rgba(255, 255, 255, 255 )",
          display: "flex",
          width: "32%",
          margin: "auto",
          height: 70,
          marginTop: 2,
          marginRight: 110,
          borderRadius: 4,
          border: "solid",
          borderColor: "rgba(255, 255, 255, 0.6 )",
          justifyContent: "space-between",
        }}
      >
        <HomeOutlinedIcon
          style={{ height: "auto", color: "black", width: "10%" }}
        />
        <HistoryIcon style={{ height: "auto", color: "black", width: "10%" }} />
        <PeopleOutlineOutlinedIcon
          style={{ height: "auto", color: "black", width: "10%" }}
        />
        <FolderOpenOutlinedIcon
          style={{ height: "auto", color: "black", width: "10%" }}
        />
        <BookmarkBorderOutlinedIcon
          style={{ height: "auto", color: "black", width: "10%" }}
        />
      </Card>
      <HorizontalComp2 />
    </div>
  );
};

export default HorizontalComp1;
