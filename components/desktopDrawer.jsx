import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import SideBarContent from "./sideBarContent";

const drawerWidth = 240;
export default function PermanentDrawerRight(props) {
  const { content } = props;
  return (
    <Box sx={{ display: "flex" }} className="desktop-drawer">
      <Drawer
        className="desktop-drawer"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <SideBarContent content={content} />
      </Drawer>
    </Box>
  );
}
