/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import { Link } from "@builder.io/qwik-city";

import { Button, TextField, Typography, Box } from "@mui/material";

export const LoginPage = qwikify$(() => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Login</h1>
      <form>
        <TextField
          placeholder="Username"
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          placeholder="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
        <Button type="button">Signup</Button>
      </form>
    </Box>
  );
});