import React, { useState } from "react";
import Image from "next/image";

const SideBarClass = ({ content, roomType }) => {
  return (
    <div className="drawer-container">
      {roomType === "CLASS" &&
        content.map((i) => (
            <div key={i.id}>
              <h2 className="id">id : {i.id}</h2>
              <h2 className="roomd">room id : {i.roomId}</h2>
              <h2 className="capacity">capacity : {i.capacity}</h2>
            </div>
        ))}
    </div>
  );
};

export default SideBarClass;
