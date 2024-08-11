import DesktopDrawer from "./desktopDrawer";
import MobileDrawer from "./mobileDrawer";
import useStore from "../../store/store";
import { useEffect, useState } from "react";

const Connector = (props) => {
  const isMobile = useStore((state) => state.isMobile);

  return (
    <div className="drawer-container">
      {isMobile ? <MobileDrawer {...props} /> : <DesktopDrawer {...props} />}
    </div>
  );
};

export default Connector;
