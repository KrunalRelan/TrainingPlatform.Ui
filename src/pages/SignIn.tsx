import React from "react";
import {
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
  IconButton,
  InputAdornment,
  Grid,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Grid2 } from "@mui/material";
import { useNavigate } from "react-router-dom"; // For navigation
import { useTheme } from "@mui/material/styles"; // Access theme
import { useState } from "react";

type SignInFormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export default function SignInPage() {
  const [formData, setFormData] = useState<SignInFormData>({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();

  const handleInputChange = (
    field: keyof SignInFormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/dashboard");
  };

  return (
    <Grid
      container
      sx={{
        height: "100vh",
        backgroundColor: theme.palette.background.default,
      }}
    >
      {/* Left Section */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 4,
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome Back!
        </Typography>
        <Typography variant="subtitle1">
          Sign in to continue to your dashboard.
        </Typography>
      </Grid>
  
      {/* Right Section */}
      <Grid
        item
        xs={12}
        md={6}
        component="section"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 400,
            backgroundColor: theme.palette.background.paper,
            borderRadius: 4,
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
            p: 4,
          }}
        >
          <Typography variant="h4" gutterBottom align="center">
            Sign In
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              margin="normal"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              margin="normal"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.rememberMe}
                  onChange={(e) =>
                    handleInputChange("rememberMe", e.target.checked)
                  }
                />
              }
              label="Remember me"
              sx={{ mt: 2 }}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                bgcolor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                "&:hover": {
                  bgcolor: theme.palette.primary.dark,
                },
              }}
            >
              Sign In
            </Button>
          </form>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Don't have an account? <a href="/signup">Sign up</a>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}  
