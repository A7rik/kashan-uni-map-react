import { Box, Button } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import SideBarProf from "./sideBarContent/prof";
import SideBarClass from "./sideBarContent/class";
import useStore from "../../store/store";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { Container, Tabs, Tab, Typography } from "@mui/material";
import TextField from "@mui/material";
import EditInfo from "./sideBarContent/Profile tabs/EditInfo";
import Comments from "./sideBarContent/Profile tabs/Comments";
import Collaborate from "./sideBarContent/Profile tabs/Collaborate";

const sideBarContent = ({ content, roomType }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const navValue = useStore((state) => state.navValue);

  const ref = React.useRef(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());

  React.useEffect(() => {
    // ref.current.ownerDocument.body.scrollTop = 0;
    setMessages(refreshMessages());
  }, [navValue, setMessages]);
  return (
    <div className="drawer-container">
      {navValue == 0 && (
        <div>
          {!roomType && (
            <Box>
              <Link href="/room">room</Link>
              <Button
                variant="contained"
                onClick={() => (window.location.href = "/addBuilding")}
              >
                Add Building
              </Button>
              <Button
                variant="contained"
                onClick={() => (window.location.href = "/addFloor")}
              >
                Add Floor
              </Button>
              <Button
                variant="contained"
                onClick={() => (window.location.href = "/addRoomInBuilding")}
              >
                Add Room In Building
              </Button>
            </Box>
          )}
          <SideBarProf content={content} roomType={roomType} />
          <SideBarClass content={content} roomType={roomType} />
        </div>
      )}
      {navValue == 1 && (
        <Box sx={{ pb: 7 }} ref={ref}>
          <CssBaseline />
          <List>
            {messages.map(({ primary, secondary, person }, index) => (
              <ListItemButton key={index + person}>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={person} />
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      )}
      {navValue == 2 && <div>2</div>}
      {navValue == 3 && (
        <Container>
          <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
            <Avatar
              alt="Profile Picture"
              src="/profile-pic.jpg"
              sx={{ width: 100, height: 100 }}
            />
            <Typography variant="h4" mt={2}>
              Your Name
            </Typography>
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              aria-label="profile tabs"
              sx={{ mt: 4 }}
            >
              <Tab label="Edit Info" />
              <Tab label="Comments" />
              <Tab label="Collaborate" />
            </Tabs>
            {selectedTab === 0 && <EditInfo />}
            {selectedTab === 1 && <Comments />}
            {selectedTab === 2 && <Collaborate />}
          </Box>
        </Container>
      )}
    </div>
  );
};

export default sideBarContent;

function refreshMessages() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  return Array.from(new Array(50)).map(
    () => messageExamples[getRandomInt(messageExamples.length)]
  );
}

const messageExamples = [
  {
    primary: "Brunch this week?",
    secondary:
      "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: "/static/images/avatar/5.jpg",
  },
  {
    primary: "Birthday Gift",
    secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
    person: "/static/images/avatar/1.jpg",
  },
  {
    primary: "Recipe to try",
    secondary:
      "I am try out this new BBQ recipe, I think this might be amazing",
    person: "/static/images/avatar/2.jpg",
  },
  {
    primary: "Yes!",
    secondary: "I have the tickets to the ReactConf for this year.",
    person: "/static/images/avatar/3.jpg",
  },
  {
    primary: "Doctor's Appointment",
    secondary:
      "My appointment for the doctor was rescheduled for next Saturday.",
    person: "/static/images/avatar/4.jpg",
  },
  {
    primary: "Discussion",
    secondary: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
    person: "/static/images/avatar/5.jpg",
  },
  {
    primary: "Summer BBQ",
    secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
    person: "/static/images/avatar/1.jpg",
  },
];
