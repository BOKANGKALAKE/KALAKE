import React from "react";
import Card from "@mui/material/Card";
import CachedIcon from "@mui/icons-material/Cached";
import TuneIcon from "@mui/icons-material/Tune";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DoneIcon from "@mui/icons-material/Done";
import { Box } from "@mui/material";
import VerticalLong from "./VerticalLong";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const TopNavbar3 = () => {
  return (
    <div>
      <Box>
        <Card
          sx={{
            background: "rgba(255, 255,255,255 )",
            display: "flex",
            width: 387,
            height: 50,
            borderRadius: 3,
            border: "solid",
            marginTop: 1,
            borderColor: "rgba(255, 255, 255, 0.6 )",
            justifyContent: "space-between",
            pb: 1.5,
            pl: 38,
            ml: 60.5,
          }}
        >
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <DoneIcon
                    sx={{
                      ml: -38,
                      mt: 0.4,
                      pr: 1,
                    }}
                  />
                  <ListItemText primary="Keep" />
                  <TuneIcon sx={{ mt: 0.4, ml: 12, pr: 1 }} />
                  <ListItemText primary="Adjust" />
                  <CachedIcon sx={{ mt: 0.4, ml: 12, pr: 1 }} />
                  <ListItemText primary="Regenate" />

                  <DeleteOutlinedIcon sx={{ mt: 0.3, ml: 12, pr: 1 }} />
                  <ListItemText primary="Delete" />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </Card>
      </Box>
    </div>
  );
};

export default TopNavbar3;
