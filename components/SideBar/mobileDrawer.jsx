import * as React from "react";
import { Drawer } from "vaul";
import SideBarContent from "./sideBarContent";
import { useState , useEffect } from "react";
import { clsx } from "clsx";
import Button from "@mui/material/Button";
import useStore from "../../store/store";
import Nav from '../SideBar/navigation'

export default function MyDrawer(props) {
  // const [snap, setSnap] = useState(null);
  // const [open, setOpen] = React.useState(true);
  const { content } = props;
  const openDrawer =useStore((state)=> state.openDrawer)
  const setOpenDrawer =useStore((state)=> state.setOpenDrawer)

  const buttonRef = React.useRef(null);
  useEffect(() => {
    if (content) {
      buttonRef.current.click();
    }
  }, [content]);
  useEffect(() => {
      buttonRef.current.click();
      setOpenDrawer(false);
  }, [openDrawer]);

  return (
    <div>
      <Drawer.Root 
      
      // snapPoints={["148px", "355px", 1]}
      // activeSnapPoint={snap}
      // setActiveSnapPoint={setSnap}
      // open={open} onOpenChange={setOpen}
      // shouldScaleBackground
      >
        <Drawer.Trigger asChild>
          <Button
            style={{ display: "none" }}
            ref={buttonRef}
          >
            Open
          </Button>
        </Drawer.Trigger>
        <Drawer.Portal >
          <Drawer.Overlay className="fixed inset-0 bg-black/40 " />
          <Drawer.Content  className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[93%] mt-24 fixed bottom-0 left-0 right-0 ">
            <div className="p-4 bg-white rounded-t-[10px] flex-1">
              <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
              <div className="max-w-md mx-auto">
                {/* <div
                  className={clsx(
                    "flex flex-col max-w-md mx-auto w-full p-4 pt-5",
                    {
                      "overflow-y-auto": snap === 1,
                      "overflow-hidden": snap !== 1,
                    }
                  )}
                ></div> */}

                <SideBarContent {...props} />
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}
