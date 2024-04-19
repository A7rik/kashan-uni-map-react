import { Button } from "@mui/material";
import React from "react";

const SideBarProfInfo = ({ content, roomType }) => {
    //console.log("test")
  return (
    <div className="drawer-container">
      {roomType == "PROFINFO" && content.name}
    </div>
  );
};

export default SideBarProfInfo;
