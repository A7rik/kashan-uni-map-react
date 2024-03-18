import { Box, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import Link from 'next/link'


const sideBarContent = ({ content ,roomPage }) => {
  const [cn, setCn] = useState(content);
  const [value, setValue] = useState(content);
  const [room, setRoom] = useState(false);
  const [home, setHome] = useState(true);
  useEffect(() => {
    setRoom(roomPage);
    setHome(!roomPage);
  }, [value]);
  
  return (
    <div className="drawer-container">
      {home && (
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
      )}
      <Box>
        {room &&
          value.map((i) => (
            <div>
              <Button
                variant="contained"
                onClick={() => (setCn(i))}
              >
                {i.name}
              </Button>
            </div>
          ))}
     </Box>
    </div>
  );
};

export default sideBarContent;
