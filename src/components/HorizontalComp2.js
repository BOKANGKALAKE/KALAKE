import React from "react";
import Card from "@mui/material/Card";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HistoryIcon from "@mui/icons-material/History";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { Box } from "@mui/material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const HorizontalComp2 = () => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Card
          sx={{
            background: "rgba(255, 255, 255,255 )",
            display: "flex",
            flexDirection: "column",
            width: 200,
            height: 440,
            marginTop: 1,
            borderRadius: 3,
            padding: 1,
            ml: 7,
            mb: 30,
            border: "solid",
            borderColor: "rgba(255, 255, 255, 0.6 )",
            justifyContent: "space-between",
            mb: 5,
          }}
        >
          <List
            sx={{
              background: "rgba(224, 100, 9, 1 )",
              borderRadius: 2,
            }}
          >
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <HomeOutlinedIcon
                    sx={{ width: 35, height: 35, color: "white" }}
                  />
                  <ListItemText
                    sx={{
                      mt: 1.5,
                      ml: 2,
                      color: "white",
                    }}
                    primary="Home"
                  />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <HistoryIcon sx={{ width: 35, height: 35 }} />
                  <ListItemText
                    sx={{
                      mt: 1.5,
                      ml: 2,
                      width: 50,
                      height: 35,
                    }}
                    primary="History"
                  />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <PeopleOutlineOutlinedIcon sx={{ width: 35, height: 35 }} />
                  <ListItemText
                    sx={{
                      mt: 1.5,
                      ml: 2,
                    }}
                    primary="User"
                  />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <FolderOpenOutlinedIcon sx={{ width: 35, height: 35 }} />
                  <ListItemText
                    sx={{
                      mt: 1.5,
                      ml: 2,
                    }}
                    primary="Folder"
                  />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <BookmarkBorderOutlinedIcon sx={{ width: 35, height: 35 }} />
                  <ListItemText
                    sx={{
                      mt: 1.5,
                      ml: 2,
                    }}
                    primary="Bookmark"
                  />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </Card>
      </Box>
    </div>
  );
};

export default HorizontalComp2;
