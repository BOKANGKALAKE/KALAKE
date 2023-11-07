import React from "react";
import Card from "@mui/material/Card";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { Box } from "@mui/material";

const HorizontalComp1 = () => {
  return (
    <div style={{ justifyContent: "space-between" }}>
      <Box>
        <Card
          sx={{
            marginTop: 2,
            background: "rgba(255, 255, 255, 255 )",
            display: "flex",
            width: 370,
            height: 80,
            borderRadius: 3,
            border: "solid",
            borderColor: "rgba(255, 255, 255, 0.6 )",
            justifyContent: "space-between",
            ml: 6,
          }}
        >
          <Box sx={{ justifyContent: "space-between" }}>
            <List>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <HomeOutlinedIcon
                      sx={{
                        mt: -0.05,
                        ml: -1,
                        bgcolor: "rgba(224, 100, 9, 1 )",
                        borderRadius: 1,
                        width: 35,
                        height: 35,
                        color: "white",
                      }}
                    />
                    <HistoryIcon
                      sx={{
                        mt: -0.05,
                        ml: 4.5,
                        width: 35,
                        height: 35,
                      }}
                    />
                    <PeopleOutlineOutlinedIcon
                      sx={{
                        mt: -0.05,
                        ml: 4.5,
                        width: 35,
                        height: 35,
                      }}
                    />
                    <FolderOpenOutlinedIcon
                      sx={{
                        mt: -0.05,
                        ml: 4.5,
                        width: 35,
                        height: 35,
                      }}
                    />
                    <BookmarkBorderOutlinedIcon
                      sx={{
                        mt: -0.05,
                        ml: 4.5,
                        width: 35,
                        height: 35,
                      }}
                    />
                    <ListItemText />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Card>
      </Box>
    </div>
  );
};

export default HorizontalComp1;
