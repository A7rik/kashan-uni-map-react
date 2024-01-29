import React, { useState, useRef, useEffect } from "react";
import Sidebar from "./sideBar";
import SVGComponent from "./fullScreenMapComponent";

const MapSideBar = () => {
  const [sidebarContent, setSidebarContent] = useState(null);
  const handleSVGClick = (clickedPartInfo) => {
    setSidebarContent(clickedPartInfo);
  };
  return (
    <div>
      <SVGComponent onClick={handleSVGClick}  />
      <Sidebar content={sidebarContent} />
    </div>
  );
};

export default MapSideBar;
