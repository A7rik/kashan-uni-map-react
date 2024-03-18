import * as React from "react";
import { useEffect } from "react";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import SideBarContent from "./sideBarContent";

const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));
function isMobile() {
  return typeof window !== "undefined" && window.innerWidth <= 576;
}

function SwipeableEdgeDrawer(props) {
  const { content } = props;
  const { window } = props;
  const [open, setOpen] = React.useState(false);
  const buttonRef = React.useRef(null); // Create a ref for the button
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  useEffect(() => {
    // Add an effect that runs when content changes
    if (content) {
      buttonRef.current.click(); // Simulate a click on the button
    }
  }, [content]);
  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;
  if (true) {
    toggleDrawer(false);
  }
  return (
    <Root className="mobile-drawer">
      <CssBaseline />
      {isMobile() && (
        <Global
          styles={{
            ".MuiDrawer-root > .MuiPaper-root": {
              height: `calc(50% - ${drawerBleeding}px)`,
              overflow: "visible",
            },
          }}
        />
      )}
      <Box className="mobile-drawer" sx={{ textAlign: "center", pt: 1 }}>
        <Button
          style={{ display: "none" }}
          ref={buttonRef}
          onClick={toggleDrawer(true)}
        >
          Open
        </Button>
      </Box>
      <SwipeableDrawer
        className="mobile-drawer"
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: "text.secondary" }}>
            results
          </Typography>
        </StyledBox>
        <SideBarContent {...props} />
      </SwipeableDrawer>
    </Root>
  );
}
export default SwipeableEdgeDrawer;
