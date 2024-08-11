import styles from "../styles/global.css";
import SVGComponent from "../components/Map/fullScreenMapComponent";
import Connector from "../components/SideBar/sideBarConnector";
import Nav from "../components/SideBar/navigation";
import SearchBox from "../components/searchBox";
import FloorBox from "../components/floorBox";
import useStore from "../store/store";
import { useState, useEffect } from "react";
import axios from "axios";

function MyApp({ Component, pageProps }) {
  const setIsMobile = useStore((state) => state.setIsMobile);

  ///////////////////////////////////////////////////
  //check if there logged in
  const setProfile = useStore((state) => state.setProfile);
  const setIsLoggedIn = useStore((state) => state.setIsLoggedIn);
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsLoggedIn(false);
        return;
      }

      try {
        const res = await axios.get("/api/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(res.data);
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setIsLoggedIn(false);
      }
    };

    fetchProfile();
  }, [isLoggedIn]);
  ///////////////////////////////////////////////////

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div vaul-drawer-wrapper="" className="bg-white min-h-[100vh] app">
      <Nav />
      <SVGComponent />
      <Connector />
      <SearchBox />
      <FloorBox />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
