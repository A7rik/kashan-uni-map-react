import React, { useState, useEffect } from "react";
import Sidebar from "./SideBar/sideBarConnector";
import SVGComponent from "./Map/fullScreenMapComponent";

const MapSideBar = () => {
  const [sidebarContent, setSidebarContent] = useState(null);
  const [clickedPartInfo, setClickedPartInfo] = useState(null);
  
 /*  const [value, setValue] = useState(null);
  useEffect(() => {
    const fetchValueFromRedis = async () => {
      try {
        const response = await fetch(`/api/redis/keys?folder=${clickedPartInfo.name}`);
        const data = await response.json();
        console.log(clickedPartInfo)
        console.log(data)
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
 */
useEffect(()=>{
  if(clickedPartInfo)
  setSidebarContent(clickedPartInfo)

},[clickedPartInfo]);


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
