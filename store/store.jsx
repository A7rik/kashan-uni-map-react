import { create } from 'zustand'

const useStore = create((set) => ({
  roomType: null, 
  roomData: null, 
  mapFloor: 1,
  isMobile: false,
  openDrawer:false,
  setRoomTypeAndData: (newRoomType, newRoomData) => set({ roomType: newRoomType, roomData: newRoomData }), // Action to update the selected room type and data
  setFloor:(newFloor) => set({ mapFloor: newFloor }),
  setIsMobile :(newIsMobile) => set({ isMobile: newIsMobile }),
  setOpenDrawer:(newOpenDrawer)=> set({openDrawer:newOpenDrawer}),
}));


export default useStore;