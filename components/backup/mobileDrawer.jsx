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
  import SideBarContent from "../SideBar/sideBarContent";
  import TextField from "@mui/material/TextField";
  import useStore from "../../store/store";

  const drawerBleedingClosed = 56;
  const drawerBleeding = 156;
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
  /* const Puller = styled("div")(({ theme }) => ({
    width: "100%",
    height: 40,
    borderRadius: 50,
    position: "absolute",
    top: 8,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
    "& input": {
      width: "50%",
      height: 30,
      borderRadius: 50,
      padding: 5,
      border: "none",
      outline: "none",
      backgroundColor: "transparent",
      color: theme.palette.mode === "light" ? "black" : "white",
    },
  })); */
  function isMobile() {
    return typeof window !== "undefined" && window.innerWidth <= 768;
  }

  function SwipeableEdgeDrawer(props) {
    const setFloor = useStore((state) => state.setFloor);
    const { content } = props;
    const { window } = props;
    const [open, setOpen] = React.useState(false);
    const [closed, setClosed] = React.useState(false);
    const buttonRef = React.useRef(null);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
      //setClosed(!newOpen);
    };
    const toggleDrawerClose = (newClose) => () => {
      console.log(newClose);
      setClosed(newClose);
    };
    useEffect(() => {
      if (content) {
        buttonRef.current.click();
        setClosed(false);
      }
    }, [content]);
    const container =
      window !== undefined ? () => window().document.body : undefined;
    if (true) {
      toggleDrawer(false);
    }
    return (
      <div>
       
        <Root className="mobile-drawer">
          <CssBaseline />
          {isMobile() && (
            <Global
              styles={{
                ".MuiDrawer-root > .MuiPaper-root": {
                  height: `calc(100% - ${drawerBleeding}px)`,
                  overflow: "visible",
                },
              }}
            />
          )}
          <Box className="mobile-drawer" sx={{ textAlign: "center", pt: 1 }}>
            <Button
              style={{ display: "none" }}
              ref={buttonRef}
              onClick={() => {
                toggleDrawer(true)();
                toggleDrawerClose(false)();
              }}
            >
              Open
            </Button>
          </Box>
          <SwipeableDrawer
            className="mobile-drawer"
            container={container}
            anchor="bottom"
            open={open}
            //onClose={toggleDrawer(false)}
            onClose={open ? toggleDrawer(false) : toggleDrawerClose(true)}
            onOpen={!closed ? toggleDrawer(true) : toggleDrawerClose(false)}
            swipeAreaWidth={closed ? drawerBleedingClosed : drawerBleeding}
            disableSwipeToOpen={false}
              ModalProps={{
              keepMounted: true,
            }}
          >
            <StyledBox
              className="mobile-drawer-closedbox"
              sx={{
                position: "absolute", 
                top: closed ? -drawerBleedingClosed : -drawerBleeding,
                //https://stackoverflow.com/questions/70902700/how-to-scoll-swipeabledrawer-mui-in-react
                //baraye ezaf kardan scroll toye drawer
                //position: "relative",
                //marginTop: `${-drawerBleeding}px`,

                //top: -drawerBleeding,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                visibility: "visible",
                right: 0,
                left: 0,
                transition: "top 0.5s",
              }}
              
            >
              <Puller />
              <Box className="Box-mobile-search-box">
                <TextField
                  sx={{
                    "& fieldset": {
                      borderRadius: "50px",
                    backgroundColor: grey[50],
                    },
                  }}
                  id="outlined-search"
                  label="Search"
                  type="search"
                  variant="outlined"
                  size="small"
                />
              </Box>
              <Typography sx={{ p: 2, color: "text.secondary" }}>
                results
              </Typography>
              <Typography sx={{ p: 2, color: "text.secondary" }}>
                results
              </Typography>
            </StyledBox>
            {/* <StyledBox
              sx={{
                px: 2,
                pb: 2,
                height: "100%",
                overflow: "auto",
              }}
            >
              <Skeleton
                variant="rectangular"
                height="100%"
                sx={{ borderRadius: 8 }}
              />
            </StyledBox> */}

            <SideBarContent {...props} />
          </SwipeableDrawer>
        </Root>
      </div>
    );
  }
  export default SwipeableEdgeDrawer;
