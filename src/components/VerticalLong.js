import React from "react";
import Card from "@mui/material/Card";
import {
  Box,
  Divider,
  Input,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import WrapTextIcon from "@mui/icons-material/WrapText";
import ListIcon from "@mui/icons-material/List";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
import Tune from "@mui/icons-material/Tune";

const VerticalLong = () => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Card
          sx={{
            background: "rgba(255, 255, 255, 255 )",
            display: "flex",
            width: 250,
            height: 610,
            marginTop: 1,
            borderRadius: 3,
            flexDirection: "column",
            border: "solid",
            borderColor: "rgba(255, 255, 255, 0.6 )",
            justifyContent: "space-between",
            ml: 15,
            mt: 2,
          }}
        >
          <Box>
            <List>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <SearchIcon sx={{}} />
                    <Input
                      placeholder="   Search..."
                      sx={{
                        width: 160,
                        ml: 1,
                        bgcolor: "whitesmoke",
                        borderRadius: 4,
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
                  <ListItemIcon
                    sx={{
                      display: "flex",
                      alignItems: "centers",
                    }}
                  >
                    <ListIcon />
                    <ListItemText sx={{ mt: -0.05, ml: 2 }} primary="Text" />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </List>
            <Divider sx={{ width: 190, ml: 4 }} />
            <List>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <ArrowUpwardIcon
                      sx={{
                        display: "flex",
                        alignItems: "centers",
                      }}
                    />
                    <ListItemText
                      sx={{ mt: -0.05, ml: 2 }}
                      primary="sort ascending"
                    />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </List>
            <List>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <ArrowDownwardIcon sx={{}} />
                    <ListItemText
                      sx={{ mt: -0.05, ml: 2 }}
                      primary="sort discending"
                    />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </List>
            <List>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <FilterAltIcon sx={{}} />
                    <ListItemText sx={{ mt: -0.05, ml: 2 }} primary="Filter" />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </List>
            <Divider sx={{ width: 190, ml: 4 }} />
            <List>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <VisibilityOffIcon sx={{}} />
                    <ListItemText
                      sx={{ mt: -0.05, ml: 2 }}
                      primary="Hide in view"
                    />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </List>
            <List>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <WrapTextIcon sx={{}} />
                    <ListItemText
                      sx={{ mt: -0.05, ml: 2 }}
                      primary="Wrap Column"
                    />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </List>
            <Divider sx={{ width: 190, ml: 4 }} />
            <List>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <DeleteOutlined sx={{}} />
                    <ListItemText
                      sx={{ mt: -0.05, ml: 2 }}
                      primary="Delete property"
                    />
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

export default VerticalLong;
