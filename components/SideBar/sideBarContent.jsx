import { Box, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import Link from 'next/link'


const sideBarContent = ({ content }) => {
  const [cn, setCn] = useState(content);
  useEffect(() => {
    setCn(content);
  }, [content]);
  const [value, setValue] = useState(null);
  const [home, setHome] = useState(true);
  const [room, setRoom] = useState(false);
  useEffect(() => {
    const fetchValueFromprisma = async () => {
      try {
        const response = await fetch(
          `/api/DBfindMany?table=prof&culomn=roomId&id=${cn.id}`
        );
        const data = await response.json();
        setValue(data);
        setHome(false);
        setRoom(true);
      } catch (error) {
        console.error("Error fetching value from prisma:", error);
      }
    };
    if (cn) {
      fetchValueFromprisma();
    }
  }, [cn]);
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
