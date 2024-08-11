import { Box, Button } from "@mui/material";
import Link from "next/link";
import SideBarProf from "./prof";
import SideBarClass from "./class";
import Comments from "./Comments";
import useStore from "../../../../store/store";



const Home = () => {
  const roomData = useStore((state) => state.roomData);
  const roomType = useStore((state) => state.roomType);
  console.log(roomData);
  
  return (
    <div>
      {!roomType ? (
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
      ) : (
        <Comments />
      )}
      <SideBarProf content={roomData} roomType={roomType} />
      <SideBarClass content={roomData} roomType={roomType} />
    </div>
  );
};
export default Home;