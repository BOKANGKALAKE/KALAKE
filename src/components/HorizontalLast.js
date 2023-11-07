import React from "react";
import { Card } from "@mui/material";
import { Box } from "@mui/material";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import Tune from "@mui/icons-material/Tune";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const HorizontalLast = () => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Card
          sx={{
            background: "rgba(255, 255, 255, 255 )",
            display: "flex",
            width: 250,
            height: 90,
            marginTop: 1,
            borderRadius: 3,
            flexDirection: "column",
            padding: 2,
            justifyContent: "space-between",
            ml: 7,
            pb: 8,
          }}
        >
          <Box>
            <List>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <ListItemText sx={{}} primary="Text" />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </List>
            <List>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <UndoOutlinedIcon sx={{}} />
                    <Tune sx={{ mt: -0.05, ml: 2 }} />
                    <ListItemText sx={{ mt: -0.05, ml: 2 }} primary="Explain" />
                    <ThumbUpIcon sx={{ mt: -0.05, ml: 2 }} />
                    <ThumbDownIcon sx={{ mt: -0.05, ml: 2 }} />
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

export default HorizontalLast;
