import { Box, Button } from "@mui/material";
import useStore from "../store/store";
import { useRef, useEffect } from "react";
export default function floorBox(props) {
  const setFloor = useStore((state) => state.setFloor);

  const BoxFloorButtonsRef = useRef(null);

  useEffect(() => {
    const BoxFloorButtons = BoxFloorButtonsRef.current;

    if (BoxFloorButtons) {
      const bottomOffset =
        window.innerHeight - BoxFloorButtons.getBoundingClientRect().bottom;
      const topOffset =
        window.innerHeight - BoxFloorButtons.offsetHeight - bottomOffset;
      BoxFloorButtons.style.bottom = "auto";
      BoxFloorButtons.style.top = `${topOffset}px`;
    }
  }, []);

  return (
    <Box
      ref={BoxFloorButtonsRef}
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
      {/* <Button
        variant="contained"
        color="primary"
        className={`floor-button`}
        onClick={() => setFloor(3)}
      >
        3
      </Button> */}
    </Box>
  );
}
