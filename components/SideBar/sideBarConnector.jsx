// components/Layout.js
import DesktopDrawer from "./desktopDrawer";
import MobileDrawer from "./mobileDrawer";

const Connector = (props) => {
  return (
    <div className="drawer-container">
      <DesktopDrawer {...props} />
      <MobileDrawer {...props} />
    </div>
  );
};

export default Connector;
