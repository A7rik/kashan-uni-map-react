import { Box, Button } from "@mui/material";
import useStore from "../store/store";
export default function floorBox(props) {
  const setFloor = useStore((state) => state.setFloor);
  return (
    <Box
      className="BoxFloorButtons"
      sx={{
        position: "absolute",
        transition: "bottom 0.5s",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        className={`floor-button`}
        onClick={() => setFloor(1)}
      >
        1
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={`floor-button`}
        onClick={() => setFloor(2)}
      >
        2
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={`floor-button`}
        onClick={() => setFloor(3)}
      >
        3
      </Button>
    </Box>
  );
}
