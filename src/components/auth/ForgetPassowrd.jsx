import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import { Description as DescriptionIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset password for:", email);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const textFieldSX = {
    "& .MuiOutlinedInput-root": {
      borderRadius: 1,
      backgroundColor: "#fff",
      border: "1px solid #cbd5e0",
      "&:hover": { borderColor: "#2563eb" },
      "&.Mui-focused": {
        borderColor: "#2563eb",
        boxShadow: "0 0 0 2px rgba(37, 99, 235, 0.1)",
      },
      "& fieldset": { border: "none" },
    },
    "& .MuiInputLabel-root": {
      fontSize: "0.8rem",
      "&.Mui-focused": { color: "#2563eb" },
    },
    "& .MuiInputBase-input": { fontSize: "0.85rem", padding: "10px 12px" },
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        background: "#f5f7fa",
      }}>
      {/* Left Side - Form */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 3,
        }}>
        <Box sx={{ width: "100%", maxWidth: 400 }}>
          <Card
            elevation={0}
            sx={{
              borderRadius: 1,
              border: "1px solid #e2e8f0",
              p: 3,
              boxShadow: "0 6px 16px rgba(0,0,0,0.05)",
              backgroundColor: "#fff",
            }}>
            <CardContent sx={{ p: 2 }}>
              <Typography
                variant='h5'
                component='h1'
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  textAlign: "center",
                  mb: 1,
                }}>
                Forgot Password
              </Typography>
              <Typography
                variant='body2'
                sx={{
                  color: "#64748b",
                  fontSize: "0.8rem",
                  textAlign: "center",
                  mb: 2,
                }}>
                Enter your email to receive a password reset link
              </Typography>

              <Box
                component='form'
                onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label='Email Address'
                  name='email'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='you@company.com'
                  margin='dense'
                  required
                  sx={{
                    mt: 2,
                    "& .MuiInputBase-input": {
                      fontSize: "12px",
                      // padding: "10px 14px",
                    },
                  }}
                />
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  sx={{
                    py: 1.25,
                    borderRadius: 1,
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    textTransform: "none",
                    background: "#2563eb",
                    "&:hover": { background: "#1d4ed8" },
                    mb: 2,
                    mt: 1.5,
                  }}>
                  Send Reset Link
                </Button>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant='body2'
                    sx={{ fontSize: "0.75rem", color: "#4a5568" }}>
                    Remember your password?{" "}
                    <Link
                      component='button'
                      onClick={handleLoginClick}
                      sx={{ color: "#2563eb", fontWeight: 600 }}>
                      Sign In
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* Right Side - Promotional Content */}
      {/* <Box
        sx={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#e6f2ff",
          p: 4,
        }}>
        <Box sx={{ textAlign: "center", maxWidth: 300 }}>
          <Box
            sx={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
              boxShadow: "0 6px 24px rgba(0,0,0,0.1)",
            }}>
            <DescriptionIcon sx={{ fontSize: 50, color: "#2563eb" }} />
          </Box>

          <Typography
            variant='h6'
            sx={{
              fontWeight: 700,
              mb: 1,
              fontSize: "1.4rem",
              color: "#1a202c",
            }}>
            RFP Pro
          </Typography>

          <Typography
            variant='subtitle1'
            sx={{ fontWeight: 600, mb: 1, fontSize: "1rem", color: "#2d3748" }}>
            Streamline Your RFP Response Process
          </Typography>

          <Typography
            variant='body2'
            sx={{ fontSize: "0.85rem", color: "#4a5568", lineHeight: 1.4 }}>
            Quickly reset your password and get back to managing proposals
            efficiently.
          </Typography>
        </Box>
      </Box> */}
    </Box>
  );
};

export default ForgotPasswordPage;
