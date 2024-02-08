import * as React from "react";
import {useEffect} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from '@mui/material/Button';

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const drawerBleeding = 56;
const drawerWidth = "22%";
function isMobile() {
  return typeof window !== "undefined" && window.innerWidth <= 576;
}
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
  visibility: isMobile() ? "visible" : "hidden",
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default function sideBar(props) {
  const { content } = props;
  const { window } = props;
  const [open, setOpen] = React.useState(false);
  const buttonRef = React.useRef(null);  // Create a ref for the button

  useEffect(() => {  // Add an effect that runs when content changes
    if (content) {
      buttonRef.current.click();  // Simulate a click on the button
    }
  }, [content]);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Root >
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(90% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
          "@media (min-width: 576px)": {
            ".MuiDrawer-root > .MuiPaper-root": {
              height: "100%",
            },
          },
        }}
      />
              <Button style={{ display: 'none' }} ref={buttonRef} onClick={toggleDrawer(true)}>Open</Button>

      <SwipeableDrawer
        sx={{
          width: isMobile() ? undefined : drawerWidth,
          flexShrink: isMobile() ? undefined : 0,
          "& .MuiDrawer-paper": {
            width: isMobile() ? undefined : drawerWidth,
            boxSizing: isMobile() ? undefined : "border-box",
          },
        }}
        variant={isMobile() ? undefined : "temporary"}
        container={container}
        anchor={isMobile() ? "bottom" : "right"}
        open={isMobile() ? open : true}
        toggleDrawer={true}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
          hideBackdrop: isMobile() ? false : true,
          
        }}
      >
        <StyledBox
          sx={{
            position: isMobile() ? "absolute" : "relative",
            top: isMobile() ? -drawerBleeding : 0,
            borderTopLeftRadius: isMobile() ? 8 : 0,
            borderTopRightRadius: isMobile() ? 8 : 0,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: "text.secondary" }}>
            51 results
          </Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          {content && (
            <div>
              <h3>{content.name}</h3>
            </div>
          )}
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
 
}
