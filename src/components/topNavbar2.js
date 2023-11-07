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
import { Box } from "@mui/material";
import HorizontalComp1 from "./HorizontalComp1";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const TopNavbar2 = () => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Card
          sx={{
            background: "rgba(255, 255,255, 255 )",
            display: "flex",
            width: 500,
            height: 50,
            margin: 2,
            borderRadius: 3,
            border: "solid",
            borderColor: "rgba(255, 255, 255, 0.6 )",
            justifyContent: "space-between",
            pb: 1,
            ml: 8,
            pl: 23.5,
          }}
        >
          <Box>
            <List>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <UndoOutlinedIcon
                      sx={{
                        mt: -0.05,
                        ml: -23,

                        mr: -2,
                      }}
                    />
                    <RedoOutlinedIcon
                      sx={{
                        mt: -0.05,
                        ml: 3.2,

                        mr: -2,
                      }}
                    />
                    <FormatBoldOutlinedIcon sx={{ mt: -0.05, ml: 9 }} />
                    <FormatColorTextOutlinedIcon sx={{ mt: -0.05, ml: 9 }} />
                    <FormatListBulletedOutlinedIcon sx={{ mt: -0.05, ml: 9 }} />
                    <StrikethroughSOutlinedIcon sx={{ mt: -0.05, ml: 9 }} />
                    <FormatUnderlinedOutlinedIcon sx={{ mt: -0.05, ml: 9 }} />
                    <FormatSizeOutlinedIcon sx={{ mt: -0.05, ml: 9 }} />

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

export default TopNavbar2;
