import React from "react";
import { MapInteractionCSS } from "react-map-interaction";

const MainSVGMap = ({ onClick }) => {
  const handleClick = (event) => {
    const clickedElement = event.target;
    const className = clickedElement.getAttribute("class");
    if (className && className.includes("room")) {
      const name = clickedElement.getAttribute("name");
      const parentName = clickedElement.parentElement.getAttribute("name");
      const combinedName = `${parentName}:${name}`; // Combine parentName and name with ':'
      onClick({ name: combinedName }); // Pass combinedName to the onClick function
    }
  };
  return (
    <div>
      <MapInteractionCSS minScale={1} maxScale={10}>
        <svg
          onClick={handleClick}
          onTouchStart={handleClick}
          className="fullscreen-image"
          width="1080"
          height="1920"
          viewBox="0 0 1080 1920"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{ enableBackground: "new 0 0 1080 1920" }}
          xmlSpace="preserve"
        >
          <style type="text/css">
            {`.st0{fill:none;stroke:#000000;stroke-miterlimit:10;}`}
          </style>
          <polygon
            className="st0"
            points="905.3,742.12 801.43,841.24 655.65,841.24 551.78,742.12 655.65,642.99 705.66,642.99 728.83,616.75 752,642.99 801.43,642.99 "
          />
          <path
            className="st0"
            d="M577.05,1455.82l19.73-19.73l-46.8-46.8l-25.39,23.7h-97.04v-13.11H209.01v13.11h-82.18v-13.11H92.74v92.67 h180.09v73.43H146.06v59.45H65.64v63.82l95.29,1.75v22.73h-13.11v35.84h98.78v5.25h121.51v-31.47h30.6l0.87,41.09h13.11l5.25,23.6 l39.1,17.21v18.64h41.91l28.27-28.27v-40.79v-39.34h-51.58v-27.1H369.86v-30.6h56.82v-12.24h87.53l33.44,34.09l48.62-47.21 l-19.23-19.23V1455.82z M274.57,1698.84H219.5v-37.59h55.07V1698.84z M345.38,1571.21H293.8v-16.61h51.58V1571.21z M345.38,1502.15 H293.8v-19.23h51.58V1502.15z M510.61,1563.34H367.24v-69.06h143.37V1563.34z"
          />
          <g className="rooms" name="oloompaye:room">
            <rect
              x="92.74"
              y="1442.7"
              className="st0 room1"
              width="484.31"
              height="18.36"
              name="1"
            />
            <rect
              x="92.74"
              y="1461.06"
              className="st0 room2"
              width="52.81"
              height="31.47"
              name="2"
            />
            <rect
              x="145.55"
              y="1461.06"
              className="st0"
              width="36.56"
              height="31.47"
            />
            <rect
              x="182.1"
              y="1461.06"
              className="st0"
              width="40.62"
              height="31.47"
            />
            <rect
              x="222.72"
              y="1461.06"
              className="st0"
              width="50.1"
              height="31.47"
            />
            <rect
              x="92.74"
              y="1399.87"
              className="st0"
              width="34.09"
              height="42.84"
            />
            <rect
              x="209.01"
              y="1399.87"
              className="st0"
              width="63.82"
              height="42.84"
            />
            <rect
              x="126.83"
              y="1412.98"
              className="st0"
              width="41.09"
              height="29.72"
            />
            <rect
              x="167.92"
              y="1412.98"
              className="st0"
              width="41.09"
              height="29.72"
            />
          </g>
          <g>
            <rect
              x="639.14"
              y="650.3"
              transform="matrix(0.732 -0.6813 0.6813 0.732 -278.3044 625.0212)"
              className="st0"
              width="32.24"
              height="31.88"
            />
            <rect
              x="615.82"
              y="672.46"
              transform="matrix(0.732 -0.6813 0.6813 0.732 -299.6525 615.0687)"
              className="st0"
              width="32.24"
              height="31.88"
            />
            <rect
              x="592.5"
              y="694.62"
              transform="matrix(0.732 -0.6813 0.6813 0.732 -321.0006 605.1161)"
              className="st0"
              width="32.24"
              height="31.88"
            />
            <rect
              x="569.17"
              y="716.77"
              transform="matrix(0.732 -0.6813 0.6813 0.732 -342.3488 595.1636)"
              className="st0"
              width="32.24"
              height="31.88"
            />
            <rect
              x="677.23"
              y="673.31"
              className="st0"
              width="40.82"
              height="27.41"
            />
            <rect
              x="669.65"
              y="729.29"
              className="st0"
              width="51.9"
              height="31.49"
            />
            <rect
              x="685.39"
              y="794.01"
              className="st0"
              width="15.16"
              height="20.41"
            />
            <rect
              x="755.36"
              y="736.87"
              className="st0"
              width="43.15"
              height="29.74"
            />
            <rect
              x="752.45"
              y="688.47"
              className="st0"
              width="34.4"
              height="13.99"
            />
            <rect
              x="781.02"
              y="790.51"
              className="st0"
              width="25.66"
              height="32.07"
            />
            <rect
              x="719.21"
              y="826.08"
              className="st0"
              width="18.08"
              height="9.33"
            />
            <rect
              x="813.67"
              y="695.47"
              className="st0"
              width="13.99"
              height="24.49"
            />
            <rect
              x="811.92"
              y="736.87"
              className="st0"
              width="26.24"
              height="33.82"
            />
            <rect
              x="851.57"
              y="745.03"
              className="st0"
              width="18.08"
              height="26.82"
            />
          </g>
          <polygon
            className="st0"
            points="477.3,1082.12 373.43,1181.24 227.65,1181.24 123.78,1082.12 227.65,982.99 277.66,982.99 300.83,956.75 324,982.99 373.43,982.99 "
          />
          <g>
            <rect
              x="211.14"
              y="990.3"
              transform="matrix(0.732 -0.6813 0.6813 0.732 -624.6703 424.54)"
              className="st0"
              width="32.24"
              height="31.88"
            />
            <rect
              x="187.82"
              y="1012.46"
              transform="matrix(0.732 -0.6813 0.6813 0.732 -646.0185 414.5875)"
              className="st0"
              width="32.24"
              height="31.88"
            />
            <rect
              x="164.5"
              y="1034.62"
              transform="matrix(0.732 -0.6813 0.6813 0.732 -667.3666 404.635)"
              className="st0"
              width="32.24"
              height="31.88"
            />
            <rect
              x="141.17"
              y="1056.77"
              transform="matrix(0.732 -0.6813 0.6813 0.732 -688.7148 394.6824)"
              className="st0"
              width="32.24"
              height="31.88"
            />
            <rect
              x="249.23"
              y="1013.31"
              className="st0"
              width="40.82"
              height="27.41"
            />
            <rect
              x="241.65"
              y="1069.29"
              className="st0"
              width="51.9"
              height="31.49"
            />
            <rect
              x="257.39"
              y="1134.01"
              className="st0"
              width="15.16"
              height="20.41"
            />
            <rect
              x="327.36"
              y="1076.87"
              className="st0"
              width="43.15"
              height="29.74"
            />
            <rect
              x="324.45"
              y="1028.47"
              className="st0"
              width="34.4"
              height="13.99"
            />
            <rect
              x="353.02"
              y="1130.51"
              className="st0"
              width="25.66"
              height="32.07"
            />
            <rect
              x="291.21"
              y="1166.08"
              className="st0"
              width="18.08"
              height="9.33"
            />
            <rect
              x="385.67"
              y="1035.47"
              className="st0"
              width="13.99"
              height="24.49"
            />
            <rect
              x="383.92"
              y="1076.87"
              className="st0"
              width="26.24"
              height="33.82"
            />
            <rect
              x="423.57"
              y="1085.03"
              className="st0"
              width="18.08"
              height="26.82"
            />
          </g>
        </svg>
      </MapInteractionCSS>
    </div>
  );
};

export default MainSVGMap;
