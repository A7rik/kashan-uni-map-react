import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Button, Box, TextField, Typography } from "@mui/material";
import useStore from "../../../../store/store";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const setIsLoggedIn = useStore((state) => state.setIsLoggedIn);

  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/register", {
        username,
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      setIsLoggedIn(true);
      // router.push("/profile");
    } catch (error) {
      setError(error.response?.data?.error || "Registration failed");
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
      <Typography variant="h6">Register</Typography>
      <form
        onSubmit={handleRegister}
        style={{
          padding: 20,
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
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          sx={{ mt: 2 }}
        />
        <Button
          variant="contained"
          type="submit"
          color="primary"
          sx={{ mt: 4 }}
        >
          Register
        </Button>
      </form>
      {error && <p style={{ textAlign: "center" }}>{error}</p>}
    </Box>
  );
};

export default Register;
