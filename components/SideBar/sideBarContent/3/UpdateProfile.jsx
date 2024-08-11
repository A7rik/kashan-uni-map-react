import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Box, TextField, Typography } from "@mui/material";
import useStore from '../../../../store/store';
import { useRouter } from 'next/router';
const UpdateProfile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState("");
  const { stack, push, pop } = useStore();
  // console.log(stack);
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('/api/profile', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsername(res.data.username);
      setEmail(res.data.email);
    };

    fetchProfile();
    // router.push('/update-profile', undefined, { shallow: true });
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const res = await axios.put(
        '/api/profile',
        { username, email },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log('Profile updated', res.data);
      setResponse("Profile updated");
    } catch (error) {
      console.error('Update failed', error);
      setResponse(error.response?.data?.error || "Update failed");
    }
  };

  return (
    <Box
    sx={{
      mt: 5,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <Typography variant="h6">Update Profile</Typography>
    <form
      onSubmit={handleUpdate}
      style={{
        padding:20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TextField
        label="Username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        sx={{ mt: 2 }}
      />
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        sx={{ mt: 2 }}
      />
      {/* <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        sx={{ mt: 2 }}
      /> */}
      <Button
        variant="contained"
        type="submit"
        color="primary"
        sx={{ mt: 4 }}
      >
        Update
      </Button>
      <Button
        variant="contained"
        onClick={pop}
        color="primary"
        sx={{ mt: 4 }}
      >
        back
      </Button>
    </form>
    {response && <p style={{ textAlign: "ce nter" }}>{response}</p>}
  </Box>
  );
};

export default UpdateProfile;
