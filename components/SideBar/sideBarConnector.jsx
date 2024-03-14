// components/Layout.js
import DesktopDrawer from "./desktopDrawer";
import MobileDrawer from "./mobileDrawer";

const Connector = ({ content }) => {
  return (
    <div className="drawer-container">
      <DesktopDrawer content={content} />
      <MobileDrawer content={content} />
    </div>
  );
};

export default Connector;
