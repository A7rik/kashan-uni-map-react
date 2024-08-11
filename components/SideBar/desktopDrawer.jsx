import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import SideBarContent from "./sideBarContent/sideBarContent";

export default function PermanentDrawerRight(props) {
  return (
    <div>
      <Box sx={{ display: "flex" }} className="desktop-drawer">
        <Drawer className="desktop-drawer" variant="permanent" anchor="right">
          <SideBarContent {...props} />
        </Drawer>
      </Box>
    </div>
  );
}
