import React from "react";
import { Box } from "@mui/material";
import { Card } from "@mui/material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const VerticalmidComp = () => {
  return (
    <div>
      <Box>
        <Card
          sx={{
            background: "rgba(255, 255, 255, 255 )",
            display: "flex",
            width: 250,
            height: 110,
            marginTop: 1,
            borderRadius: 3,
            flexDirection: "column",
            padding: 2,
            ml: 7,
            pb: 7,
            justifyContent: "space-between",
          }}
        >
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemText sx={{}}>
                    <h5>
                      Ask a question or request,
                      <br /> or
                      <br /> type 'y' for suggestions
                      <br />
                      D/500
                    </h5>
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </Card>
      </Box>
    </div>
  );
};

export default VerticalmidComp;
