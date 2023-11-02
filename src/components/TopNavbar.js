import React from "react";
import Card from "@mui/material/Card";
import HistoryIcon from "@mui/icons-material/History";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HorizontalComp1 from "./HorizontalComp1";
import TopNavbar2 from "./TopNavbar2";
import { Box } from "@mui/material";

const topNavbar = () => {
  return (
    <div>
      <Card
        sx={{
          background: "rgba(224, 100, 9, 1 )",
          display: "flex",
          width: "90%",
          margin: "auto",
          height: 50,
          marginTop: 3,
          borderRadius: 4,
          border: "solid",
          borderColor: "rgba(255, 255, 255, 0.6 )",
          justifyContent: "space-between",
        }}
      >
        <HomeOutlinedIcon
          style={{ height: "auto", color: "black", width: "5%" }}
        />
        <HistoryIcon style={{ height: "auto", color: "black", width: "5%" }} />
        <PeopleOutlineOutlinedIcon
          style={{ height: "auto", color: "black", width: "5%" }}
        />
        <FolderOpenOutlinedIcon
          style={{ height: "auto", color: "black", width: "5%" }}
        />
        <BookmarkBorderOutlinedIcon
          style={{ height: "auto", color: "black", width: "5%" }}
        />
      </Card>

      <Box sx={{ pdd: "auto" }}>
        <TopNavbar2 />
        <HorizontalComp1 />
      </Box>
    </div>
  );
};

export default topNavbar;
