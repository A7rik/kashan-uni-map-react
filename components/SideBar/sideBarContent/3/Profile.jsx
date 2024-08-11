// import EditInfo from "./sideBarContent/Profile tabs/EditInfo";
// import Comments from "./sideBarContent/Profile tabs/Comments";
// import Collaborate from "./sideBarContent/Profile tabs/Collaborate";
// import { Box, Button } from "@mui/material";
// import * as React from "react";
// import Avatar from "@mui/material/Avatar";
// import { Container, Tabs, Tab, Typography } from "@mui/material";

// const Profile = () => {
//   return (
//     <Container>
//       <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
//         <Avatar
//           alt="Profile Picture"
//           src="/profile-pic.jpg"
//           sx={{ width: 100, height: 100 }}
//         />
//         <Typography variant="h4" mt={2}>
//           Your Name
//         </Typography>
//         <Tabs
//           value={selectedTab}
//           onChange={handleTabChange}
//           aria-label="profile tabs"
//           sx={{ mt: 4 }}
//         >
//           <Tab label="Edit Info" />
//           <Tab label="Comments" />
//           <Tab label="Collaborate" />
//         </Tabs>
//         {selectedTab === 0 && <EditInfo />}
//         {selectedTab === 1 && <Comments />}
//         {selectedTab === 2 && <Collaborate />}
//       </Box>
//     </Container>
//   );
// };
// export default Profile;

import { useState, useEffect, Component } from "react";
import axios from "axios";
import { signOut } from "../../../../lib/signout";
import { useRouter } from "next/router";
import Register from "./register";
import Login from "./login";
import { Button } from "@mui/material";
import useStore from "../../../../store/store";
import UpdateProfile from "./UpdateProfile";
import UserComments from "./userComments";
  
const Profile = () => {
  const profile = useStore((state) => state.profile);
  const setProfile = useStore((state) => state.setProfile);
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const setIsLoggedIn = useStore((state) => state.setIsLoggedIn);
  const [showRegister, setShowRegister] = useState(false);
  const [showUpdateProfile, setShowUpdateProfile] = useState(false);
  const { stack, push, pop } = useStore();

  // const router = useRouter();
  const handleLoginRegisterToggle = () => {
    setShowRegister(!showRegister);
  };

  const handleSignOut = () => {
    signOut();
    setIsLoggedIn(false);
    setProfile('');

    // router.push("/login");
  };
  
  const handleShowUpdateProfile = () => {
    setShowUpdateProfile(true);
    push(UpdateProfile);
  };
  useEffect(() => {
    setShowUpdateProfile(false);
  }, [profile]);
  

  if (!isLoggedIn) {
    return (
      <div>
        {showRegister ? (
          <div style={{ textAlign: "center" }}>
            <Register />
            <Button onClick={handleLoginRegisterToggle}>
              Already have an account? Log in
            </Button>
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <Login />
            <Button onClick={handleLoginRegisterToggle}>
              Don't have an account? Register
            </Button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      {profile ? (
        !showUpdateProfile ? (
          <div>
            <h1>{profile.username}</h1>
            <p>{profile.email}</p>
            <UserComments/>
            <Button onClick={handleShowUpdateProfile}>Update Profile</Button>
            <Button onClick={handleSignOut}>Sign Out</Button>
            
          </div>
        ) : (
          <UpdateProfile />
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
