import { useEffect } from "react";
import useStore from "../../store/store";
import prisma from "../../lib/prisma";

export default function Room({ data, roomType, error }) {
  const setRoomTypeAndData = useStore((state) => state.setRoomTypeAndData);
  const setDrawer = useStore((state) => state.setDrawer);
  useEffect(() => {
    if (data && roomType) {
      setRoomTypeAndData(roomType, data);
      setDrawer(true);
    }
    
  }, [data, roomType, setRoomTypeAndData, setDrawer]);

  if (error) {
    return <div>{error.message}</div>;
  }

  return <div>Loading...</div>;
}

export async function getStaticPaths() {
  const rooms = await prisma.room.findMany();
  const paths = rooms.map((room) => ({
    params: { id: room.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const roomInfo = await prisma.room.findUnique({
    where: {
      id: parseInt(params.id, 10),
    },
  });

  if (!roomInfo) {
    return {
      notFound: true,
    };
  }

  let data = [];
  if (roomInfo.type === "PROF") {
    data = await prisma.prof.findMany({
      where: {
        roomId: parseInt(params.id, 10),
      },
    });
  } else if (roomInfo.type === "CLASS") {
    data = await prisma.classRoom.findMany({
      where: {
        roomId: parseInt(params.id, 10),
      },
    });
  }

  return {
    props: {
      data,
      roomType: roomInfo.type,
    },
  };
}
