import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Link,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Description as DescriptionIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup submitted:", formData);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  // Shared style for boxy text fields
  const textFieldSX = {
    "& .MuiOutlinedInput-root": {
      borderRadius: 1,
      backgroundColor: "#fff",
      border: "1px solid #cbd5e0",
      "&:hover": {
        borderColor: "#2563eb",
      },
      "&.Mui-focused": {
        borderColor: "#2563eb",
        boxShadow: "0 0 0 2px rgba(37, 99, 235, 0.1)",
      },
      "& fieldset": {
        border: "none",
      },
    },
    "& .MuiInputLabel-root": {
      fontSize: "0.8rem",
      "&.Mui-focused": {
        color: "#2563eb",
      },
    },
    "& .MuiInputBase-input": {
      fontSize: "0.85rem",
      padding: "10px 12px",
    },
  };

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
      {/* Left Side - Form */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 3,
        }}>
        <Box sx={{ width: "100%", maxWidth: 450 }}>
          <Card
            elevation={0}
            sx={{
              borderRadius: 1,
              border: "1px solid #e2e8f0",
              boxShadow: "0 6px 16px rgba(0,0,0,0.05)",
              backgroundColor: "#fff",
              p: 3,
            }}>
            <CardContent sx={{ p: 2 }}>
              <Typography
                variant='h5'
                component='h1'
                gutterBottom
                sx={{
                  fontWeight: 700,
                  color: "#1a202c",
                  mb: 1,
                  fontSize: "1.5rem",
                  textAlign: "center",
                }}>
                Create Account
              </Typography>

              <Typography
                variant='body2'
                sx={{
                  color: "#64748b",
                  mb: 2,
                  fontSize: "0.9rem",
                  textAlign: "center",
                }}>
                Join RFP Pro and streamline your RFP process
              </Typography>

              <Box
                component='form'
                onSubmit={handleSubmit}>
                <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
                  <TextField
                    fullWidth
                    label='First Name'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    sx={textFieldSX}
                  />
                  <TextField
                    fullWidth
                    label='Last Name'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    sx={textFieldSX}
                  />
                </Box>

                <TextField
                  fullWidth
                  label='Email'
                  name='email'
                  type='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  sx={{ ...textFieldSX, mb: 1 }}
                />

                <TextField
                  fullWidth
                  label='Company'
                  name='company'
                  value={formData.company}
                  onChange={handleChange}
                  required
                  sx={{ ...textFieldSX, mb: 1 }}
                />

                <TextField
                  fullWidth
                  label='Password'
                  name='password'
                  type='password'
                  value={formData.password}
                  onChange={handleChange}
                  required
                  sx={{ ...textFieldSX, mb: 1 }}
                />

                <TextField
                  fullWidth
                  label='Confirm Password'
                  name='confirmPassword'
                  type='password'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  sx={{ ...textFieldSX, mb: 1 }}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      name='agreeToTerms'
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      required
                      sx={{
                        color: "#cbd5e0",
                        "&.Mui-checked": { color: "#2563eb" },
                      }}
                    />
                  }
                  label={
                    <Typography
                      variant='body2'
                      sx={{ fontSize: "0.75rem", color: "#4a5568" }}>
                      I agree to the{" "}
                      <Link
                        href='#'
                        sx={{ color: "#2563eb", textDecoration: "none" }}>
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        href='#'
                        sx={{ color: "#2563eb", textDecoration: "none" }}>
                        Privacy Policy
                      </Link>
                    </Typography>
                  }
                  sx={{ mb: 2 }}
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
                  }}>
                  Create Account
                </Button>

                <Box sx={{ textAlign: "center", mt: 1 }}>
                  <Typography
                    variant='body2'
                    sx={{ fontSize: "0.75rem", color: "#4a5568" }}>
                    Already have an account?{" "}
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
      <Box
        sx={{
          width: { xs: "0%", md: "50%" },
          height: "100vh",
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "center",
          background: "#e6f2ff",
          padding: 4,
        }}>
        <Box sx={{ textAlign: "center", maxWidth: 400 }}>
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
            Create, evaluate, and package winning proposals with our intuitive
            vendor platform. Score your responses and collaborate with your team
            efficiently.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SignupPage;
