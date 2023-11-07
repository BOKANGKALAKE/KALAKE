import React from "react";
import { Card } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HistoryIcon from "@mui/icons-material/History";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/material";

const VerticalSmall = () => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Card
          sx={{
            background: "rgba(255, 255, 255, 255 )",
            display: "flex",
            width: 94,
            height: 440,
            marginTop: 1,
            flexDirection: "column",
            borderRadius: 3,
            padding: 1,
            border: "solid",
            borderColor: "rgba(255, 255, 255, 0.2 )",
            justifyContent: "space-between",
            ml: 3,
            mb: 6,
          }}
        >
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <HomeOutlinedIcon
                    sx={{
                      bgcolor: "rgba(224, 100, 9, 1 )",
                      height: 55,
                      width: 42,
                      borderRadius: 2,
                    }}
                  />
                  <ListItemText />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <HistoryIcon />
                  <ListItemText />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <PeopleOutlineOutlinedIcon />
                  <ListItemText />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <FolderOpenOutlinedIcon />
                  <ListItemText />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <BookmarkBorderOutlinedIcon />
                  <ListItemText />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </Card>
      </Box>
    </div>
  );
};

export default VerticalSmall;
