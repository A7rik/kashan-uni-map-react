import '../styles/global.css';
import SVGComponent from "../components/Map/fullScreenMapComponent";
import Connector from '../components/SideBar/sideBarConnector';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <SVGComponent />
      <Connector  />
      <Component {...pageProps} />
    </>
  );

}

export default MyApp;
