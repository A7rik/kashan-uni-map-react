import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import SideBarContent from "./sideBarContent";
import TextField from "@mui/material/TextField";

const drawerWidth = 20;
export default function PermanentDrawerRight(props) {
  return (
    <div>
      <Box sx={{ display: "flex" }} className="desktop-drawer">
        <Drawer
          className="desktop-drawer"
          sx={{
            width: `${drawerWidth}vw`,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: `${drawerWidth}vw`,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="right"
        >
          <SideBarContent {...props} />
        </Drawer>
      </Box>
    </div>
  );
}
