import "../styles/global.css";
import SVGComponent from "../components/Map/fullScreenMapComponent";
import Connector from "../components/SideBar/sideBarConnector";
import Nav from "../components/SideBar/navigation";
import SearchBox from "../components/searchBox";
import FloorBox from "../components/floorBox";
import useStore from "../store/store";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const setIsMobile = useStore((state) => state.setIsMobile);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check on initial render

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div vaul-drawer-wrapper=""  className="bg-white min-h-[100vh] app">
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
