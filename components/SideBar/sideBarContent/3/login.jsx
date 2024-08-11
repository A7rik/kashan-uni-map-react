import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Button, Box, Typography, TextField } from "@mui/material";
import useStore from "../../../../store/store";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setIsLoggedIn = useStore((state) => state.setIsLoggedIn);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // router.push("/");
    }
  }, [router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/login", { email, password });
      localStorage.setItem("token", res.data.token);
      setIsLoggedIn(true);
      // router.push("/profile");
    } catch (error) {
      console.error("Login failed", error);
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
      <Typography variant="h6">Login</Typography>
      <form
        onSubmit={handleLogin}
        style={{
          padding:20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          sx={{ mt: 2 }}
        />
        <TextField
          label="password"
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
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
