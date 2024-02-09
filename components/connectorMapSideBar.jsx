import React, { useState, useEffect } from "react";
import Sidebar from "./sideBarConnector";
import SVGComponent from "./fullScreenMapComponent";

const MapSideBar = () => {
  const [value, setValue] = useState(null);
  const [sidebarContent, setSidebarContent] = useState(null);
  const [clickedPartInfo, setClickedPartInfo] = useState(null);

  useEffect(() => {
    const fetchValueFromRedis = async () => {
      try {
        const response = await fetch(`/api/redis?key=${clickedPartInfo.name}`);
        const data = await response.json();
        setValue(data);
      } catch (error) {
        console.error("Error fetching value from Redis:", error);
      }
    };

    if (clickedPartInfo) {
      // Check if clickedPartInfo is not null
      fetchValueFromRedis();
    }
  }, [clickedPartInfo]);

  useEffect(() => {
    if (value) {
      // Check if value is not null
      setSidebarContent(value);
    }
  }, [value]);

  const handleSVGClick = (newClickedPartInfo) => {
    setClickedPartInfo(newClickedPartInfo);
  };

  return (
    <div>
      <SVGComponent onClick={handleSVGClick} />
      <Sidebar content={sidebarContent} />
    </div>
  );
};

export default MapSideBar;
