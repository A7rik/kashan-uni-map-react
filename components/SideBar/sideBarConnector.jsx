// components/Layout.js
import DesktopDrawer from "./desktopDrawer";
import MobileDrawer from "./mobileDrawer";
import useStore from "../../store/store";
import { useEffect, useState } from "react";

const Connector = (props) => {
  const roomData = useStore((state) => state.roomData);
  const roomType = useStore((state) => state.roomType);
  const isMobile = useStore((state) => state.isMobile);

  
  return (
    <div className="drawer-container">
      {isMobile ? (
        <MobileDrawer content={roomData} roomType={roomType} {...props} />
      ) : (
        <DesktopDrawer content={roomData} roomType={roomType} {...props} />
      )}
    </div>
  );
};

export default Connector;
