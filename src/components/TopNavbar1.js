import React from "react";
import Card from "@mui/material/Card";
import HistoryIcon from "@mui/icons-material/History";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Box } from "@mui/material";

const TopNavbar1 = () => {
  return (
    <div>
      <Box>
        <Card
          sx={{
            background: "rgba(224, 100, 9, 1 )",
            display: "flex",
            width: "90%",
            margin: "auto",
            height: 50,
            marginTop: 3,
            borderRadius: 3,
            border: "solid",
            borderColor: "rgba(255, 255, 255, 0.6 )",
            justifyContent: "space-between",
            pl: 2,
          }}
        >
          <HomeOutlinedIcon
            style={{
              height: "55%",
              color: "black",
              width: "5%",
              background: "rgba(255, 255, 255, 255 )",
              borderRadius: 5,
              padding: 5,
              marginTop: 5,
            }}
          />
          <HistoryIcon
            style={{
              height: "55%",
              color: "black",
              width: "5%",
              padding: 5,
              marginTop: 5,
            }}
          />
          <PeopleOutlineOutlinedIcon
            style={{
              height: "55%",
              color: "black",
              width: "5%",
              padding: 5,
              marginTop: 5,
            }}
          />
          <FolderOpenOutlinedIcon
            style={{
              height: "55%",
              color: "black",
              width: "4%",
              padding: 6,
              marginTop: 5,
            }}
          />
          <BookmarkBorderOutlinedIcon
            style={{
              height: "55%",
              color: "black",
              width: "5%",
              padding: 5,
              marginTop: 5,
            }}
          />
        </Card>
      </Box>
    </div>
  );
};

export default TopNavbar1;
