import * as React from "react";
import { Drawer } from "vaul";
import SideBarContent from "./sideBarContent/sideBarContent";
import { useState, useEffect } from "react";
import { clsx } from "clsx";
import Button from "@mui/material/Button";
import useStore from "../../store/store";
import Nav from "./navigation";

export default function MyDrawer(props) {
  // const [snap, setSnap] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [initialized, setInitialized] = useState(false);
  const { content } = props;

  const drawer = useStore((state) => state.drawer);
  const setDrawer = useStore((state) => state.setDrawer);

  useEffect(() => {
    setOpen(drawer);
    setInitialized(true);
  }, [drawer]);

  useEffect(() => {
    if (initialized) {
      setDrawer(open);
    }
  }, [open, initialized]);

  const buttonRef = React.useRef(null);
  return (
    <div>
      <Drawer.Root
        open={open}
        onOpenChange={setOpen}

        // snapPoints={["148px", "355px", 1]}
        // activeSnapPoint={snap}
        // setActiveSnapPoint={setSnap}
        // open={open} onOpenChange={setOpen}
        // shouldScaleBackground
      >
        <Drawer.Trigger asChild>
          <Button style={{ display: "none" }} ref={buttonRef}>
            Open
          </Button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40 " />
          <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[93%] mt-24 fixed bottom-0 left-0 right-0 ">
            <div className="p-4 bg-white rounded-t-[10px] flex-1 overflow-auto">
              <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
              <div className="max-w-md w-full mx-auto flex flex-col overflow-auto p-4 rounded-t-[10px]">
              {/* <div className="max-w-md mx-auto "> */}
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
