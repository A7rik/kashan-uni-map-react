import { Button } from "@mui/material";
import React, { useState } from "react";
import SideBarProfInfo from "./profinfo";
import Image from "next/image";

const SideBarProf = ({ content, roomType }) => {
  const [selectedProfIndex, setSelectedProfIndex] = useState(null);

  const handleProfClick = (index) => {
    setSelectedProfIndex(index);
  };

  const renderProfInfo = (index) => {
    if (index !== null && index >= 0 && index < content.length) {
      if (roomType === "PROF") {
        const selectedProf = content[index];
        return (
          <div key={selectedProf.id}>
            <Image
              src={`/images/${selectedProf.id}.jpg`}
              width={80}
              height={80}
              alt="Picture of the author"
            />
            <h2>{selectedProf.name}</h2>
            <p>{selectedProf.email}</p>
          </div>
        );
      }
    }
    return null;
  };
  return (
    <div className="drawer-container">
      {roomType === "PROF" &&
        content.map((i, index) => (
          <div className="button-container" key={i.id}>
            <Button
              variant="contained"
              onClick={() => handleProfClick(index)}
              selected={selectedProfIndex === index}
            >
              {i.name}
            </Button>
          </div>
        ))}

      {renderProfInfo(selectedProfIndex)}
    </div>
  );
};

export default SideBarProf;
