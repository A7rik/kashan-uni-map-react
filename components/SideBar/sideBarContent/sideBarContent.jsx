import * as React from "react";

import useStore from "../../../store/store";
import Profile from "./3/Profile";
import News from "./1/news";
import { useEffect } from "react";
import AllComments from "./2/allComments";
import Home from "./0/home"
const sideBarContent = ({ content, roomType }) => {
  const navValue = useStore((state) => state.navValue);
  const { stack, push, pop } = useStore();
  useEffect(() => {
    if (navValue === 3) {
      push(Profile);
    }
  }, [navValue]);
  return (
    <div className="drawer-container">
      {navValue == 0 && <Home/>}
      {navValue == 1 && <News />}
      {navValue == 2 && <AllComments />}
      {navValue == 3 && <Profile />}
    </div>
  );
};

export default sideBarContent;
