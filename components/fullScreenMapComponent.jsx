import React from 'react';
import { MapInteractionCSS } from 'react-map-interaction';

const MySVGComponent = () => {
  return (
    <div >
  <MapInteractionCSS
   minScale={1}
   maxScale={10}>

          <img
          className="fullscreen-image"
            src="/temp-kashan-uni.svg"
            alt="Temp Kashan Uni SVG"
          />
        </MapInteractionCSS>

    </div>
  );
};

export default MySVGComponent;
