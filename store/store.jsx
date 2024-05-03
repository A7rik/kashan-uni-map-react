import { create } from 'zustand'

const useStore = create((set) => ({
  roomType: null, 
  roomData: null, 
  mapFloor: 1,
  setRoomTypeAndData: (newRoomType, newRoomData) => set({ roomType: newRoomType, roomData: newRoomData }), // Action to update the selected room type and data
  setFloor:(newFloor) => set({ mapFloor: newFloor }),
}));


export default useStore;