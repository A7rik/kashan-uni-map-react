import '../styles/global.css';
import SVGComponent from "../components/Map/fullScreenMapComponent";
import Connector from '../components/SideBar/sideBarConnector';

function MyApp({ Component, pageProps }) {
  return (
    <div className='app'>
      <SVGComponent/> 
      <Connector  />
      <Component {...pageProps} />
    </div>
  );

}

export default MyApp;
