import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Link,
  Avatar,
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import { useNavigate, Link as RouterLink } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
  };

  const handleSignUpClick = () => navigate("/signup");
  const handleSignInClick = () => navigate("/Dashboard");

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        display: "flex",
        background: "#f5f7fa",
        position: "fixed",
        top: 0,
        left: 0,
      }}>
      {/* Left Side - Login Form */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
          backgroundColor: "#f5f7fa",
        }}>
        <Box sx={{ textAlign: "center" }}>
          <Avatar
            sx={{
              bgcolor: "#2563eb",
              width: 48,
              height: 48,
              mx: "auto",
              mb: 1,
              borderRadius: "15%",
            }}>
            <DescriptionIcon sx={{ fontSize: 28, color: "#fff" }} />
          </Avatar>
          <Typography
            variant='h6'
            sx={{ fontWeight: 700, mb: 0.5 }}>
            RFP Pro
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{ mb: 3 }}>
            Vendor Response Platform
          </Typography>

          <Card
            elevation={2}
            sx={{
              width: 400,
              borderRadius: 2,
              p: 2,
            }}>
            <CardContent sx={{ p: 2 }}>
              <Box
                component='form'
                onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label='Email Address'
                  name='email'
                  type='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='you@company.com'
                  margin='dense'
                  required
                  sx={{
                    mt: 2,
                    "& .MuiInputBase-input": {
                      fontSize: "12px",
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label='Password'
                  name='password'
                  type='password'
                  value={formData.password}
                  onChange={handleChange}
                  placeholder='Enter your password'
                  margin='dense'
                  required
                  sx={{
                    mt: 2,
                    "& .MuiInputBase-input": {
                      fontSize: "12px",
                    },
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    mt: 0.5,
                    mb: 1.5,
                  }}>
                  <Link
                    component={RouterLink}
                    to='/forgot-password'
                    underline='hover'
                    fontSize={12}>
                    Forgot Password?
                  </Link>
                </Box>
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  onClick={handleSignInClick}
                  sx={{ mb: 1, py: 1, fontSize: 14, textTransform: "none" }}>
                  Sign In
                </Button>
                <Typography
                  variant='body2'
                  sx={{ textAlign: "center", mt: 1 }}>
                  Don't have an account?{" "}
                  <Link
                    component='button'
                    onClick={handleSignUpClick}
                    sx={{ fontWeight: 600 }}>
                    Sign Up
                  </Link>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* Right Side - Promo Content */}
      <Box
        sx={{
          width: { xs: "0%", md: "50%" },
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#e6f2ff",
          p: 4,
        }}>
        <Box sx={{ textAlign: "center" }}>
          <Avatar
            sx={{
              bgcolor: "#fff",
              width: 96,
              height: 96,
              mx: "auto",
              mb: 2,
            }}>
            <DescriptionIcon sx={{ fontSize: 48, color: "#2563eb" }} />
          </Avatar>
          <Typography
            variant='h6'
            sx={{ fontWeight: 600, mb: 1 }}>
            Streamline Your RFP Response Process
          </Typography>
          <Typography
            variant='body2'
            sx={{ maxWidth: 280, mx: "auto", color: "text.secondary" }}>
            Create, evaluate, and package winning proposals with our intuitive
            vendor platform. Score your responses and collaborate with your team
            efficiently.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
