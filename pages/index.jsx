import React from 'react';
import MainSVGMap from '../components/fullScreenMapComponent.jsx';
import Drawer from '../components/sideBar.jsx';

const Home = () => {
  return (
    <div>
      <MainSVGMap />
      <Drawer/>
    </div>
  );
};

export default Home;
