import { Box } from "@mui/material";
import React from "react";
import { Card } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import PhotoIcon from "@mui/icons-material/Photo";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const HorizontalComp = () => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Card
          sx={{
            background: "rgba(255, 255, 255, 255 )",
            display: "flex",
            width: 250,
            height: 30,
            flexDirection: "row",
            borderRadius: 3,
            padding: 2,
            marginTop: 1,
            justifyContent: "space-between",
            ml: 7,
            pb: 4,
          }}
        >
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <MicIcon sx={{}} />
                  <PhotoIcon sx={{ mt: -0.05, ml: 2 }} />
                  <AddReactionIcon sx={{ mt: -0.05, ml: 2 }} />
                  <ListItemText
                    sx={{ mt: -0.05, ml: 2 }}
                    primary="Type message"
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

export default HorizontalComp;
