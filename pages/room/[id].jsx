import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import Connector from "../../components/SideBar/sideBarConnector";
import useStore from "../../store/store";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
export default function Home({ data, roomType }) {
  const setRoomTypeAndData = useStore((state )=> state.setRoomTypeAndData);
  setRoomTypeAndData(roomType,data);
}

export async function getStaticPaths() {
  // Fetch all IDs from the database
  const data = await prisma.room.findMany();
  const paths = data.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return {
    paths,
    fallback: false, // or true if you want to handle cases where the data is not available yet
  };
}

export async function getStaticProps({ params }) {
  const roomInfo = await prisma.room.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  const roomType = roomInfo.type;
  if (roomType == "PROF") {
    const data = await prisma.prof.findMany({
      where: {
        roomId: parseInt(params.id),
      },
    });
    return {
      props: {
        data,
        roomType,
      },
    };
  } else if (roomType == "CLASS") {
    const data = await prisma.classRoom.findMany({
      where: {
        roomId: parseInt(params.id),
      },
    });
    return {
      props: {
        data,
        roomType,
      },
    };
  } else {
    return {
      props: {
        error: { message: "Failed to fetch data" },
      },
    };
  }

  /* 
  try {
    // Fetch data based on the ID
    const data = await prisma.prof.findMany({
      where: {
        roomId: parseInt(params.id)
      }
    });
    return {
      props: {
        data
      }
    };
  } catch (error) {
    return {
      props: {
        error: { message: "Failed to fetch data" }
      }
    };
  } */
}
