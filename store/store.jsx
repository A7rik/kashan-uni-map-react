import { create } from "zustand";

const useStore = create((set) => ({
  navValue: 0,
  homeContent: null,
  newsContent: null,
  communityContent: null,
  profileContent: null,
  roomType: null,
  roomData: null,
  mapFloor: 1,
  isMobile: false,
  drawer: false,
  setRoomTypeAndData: (newRoomType, newRoomData) =>
    set({ roomType: newRoomType, roomData: newRoomData}),
  setFloor: (newFloor) => set({ mapFloor: newFloor }),
  setIsMobile: (newIsMobile) => set({ isMobile: newIsMobile }),
  setNavValue: (newNavValue) => set({ navValue: newNavValue }),
  setHomeContent: (newContent) => set({ homeContent: newContent }),
  setNewsContent: (newContent) => set({ newsContent: newContent }),
  setCommunityContent: (newContent) => set({ communityContent: newContent }),
  setProfileContent: (newContent) => set({ profileContent: newContent }),
  setDrawer: (newDrawer) => set({ drawer: newDrawer }),
}));

export default useStore;
