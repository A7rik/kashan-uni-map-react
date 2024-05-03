// components/Layout.js
import DesktopDrawer from "./desktopDrawer";
import MobileDrawer from "./mobileDrawer";
import useStore from "../../store/store";

const Connector = (props) => {
  const roomData = useStore((state) => state.roomData);
  const roomType = useStore((state) => state.roomType);
  console.log(roomData);
  return (
    <div className="drawer-container">
      <DesktopDrawer content={roomData} roomType={roomType} {...props} />
      <MobileDrawer content={roomData} roomType={roomType} {...props} />
    </div>
  );
};

export default Connector;
