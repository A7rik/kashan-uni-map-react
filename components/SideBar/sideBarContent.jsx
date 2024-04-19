import { Box, Button } from "@mui/material";
import React from "react";
import Link from "next/link";
import SideBarProf from "./sideBarContent/prof";
import SideBarClass from "./sideBarContent/class";

const sideBarContent = ({ content, roomType }) => {
  return (
    <div className="drawer-container">
      {!roomType && (
        <Box>
          <Link href="/room">room</Link>
          <Button
            variant="contained"
            onClick={() => (window.location.href = "/addBuilding")}
          >
            Add Building
          </Button>
          <Button
            variant="contained"
            onClick={() => (window.location.href = "/addFloor")}
          >
            Add Floor
          </Button>
          <Button
            variant="contained"
            onClick={() => (window.location.href = "/addRoomInBuilding")}
          >
            Add Room In Building
          </Button>
        </Box>
      )}
      <SideBarProf content={content} roomType={roomType} />
      <SideBarClass content={content} roomType={roomType} />
    </div>
  );
};

export default sideBarContent;
