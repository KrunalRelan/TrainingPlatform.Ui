import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useFormik } from "formik";
import * as Yup from "yup";

const trainerValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  location: Yup.string().required("Location is required"),
  experience: Yup.string().required("Experience is required"),
  specialization: Yup.string().required("Specialization is required"),
  pricePerClass: Yup.number()
    .typeError("Price must be a number")
    .required("Price Per Class is required"),
});

const companyValidationSchema = Yup.object().shape({
  enquirerName: Yup.string().required("Enquirer Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  location: Yup.string().required("Location is required"),
  areaOfTraining: Yup.string().required("Area of Training is required"),
  pricePerSession: Yup.number()
    .typeError("Price must be a number")
    .required("Price Per Session is required"),
  maxPax: Yup.number()
    .typeError("Max Pax must be a number")
    .required("Max Pax is required"),
});

const hotelValidationSchema = Yup.object().shape({
  name: Yup.string().required("Hotel Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  location: Yup.string().required("Location is required"),
  maxPax: Yup.number()
    .typeError("Max Pax must be a number")
    .required("Max Pax is required"),
  totalRooms: Yup.number()
    .typeError("Total Rooms must be a number")
    .required("Total Rooms is required"),
  facilities: Yup.string().required("Facilities are required"),
});

export default function SignupPage() {
  const [module, setModule] = useState("trainer");
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const theme = useTheme();

  const validationSchema =
    module === "trainer"
      ? trainerValidationSchema
      : module === "company"
      ? companyValidationSchema
      : hotelValidationSchema;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      location: "",
      experience: "",
      specialization: "",
      pricePerClass: "",
      enquirerName: "",
      areaOfTraining: "",
      pricePerSession: "",
      maxPax: "",
      totalRooms: "",
      facilities: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Data:", values);
      alert(`Registration successful for ${module}!`);
      navigate("/dashboard");
    },
  });

  const fieldData = {
    trainer: {
      0: ["name", "email"],
      1: ["location", "experience"],
      2: ["specialization", "pricePerClass"],
    },
    company: {
      0: ["enquirerName", "email"],
      1: ["location", "areaOfTraining"],
      2: ["pricePerSession", "maxPax"],
    },
    hotel: {
      0: ["name", "email"],
      1: ["location", "maxPax"],
      2: ["totalRooms", "facilities"],
    },
  };

  const handleNext = () => {
    const currentStepFields = fieldData[module][currentStep];
    const errors = currentStepFields.reduce((acc, field) => {
      if (formik.errors[field]) {
        acc[field] = formik.errors[field];
      }
      return acc;
    }, {});

    if (Object.keys(errors).length > 0) {
      console.log("Step Errors:", errors);
      alert("Please fix the validation errors before proceeding.");
      return;
    }

    if (currentStep < Object.keys(fieldData[module]).length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      formik.handleSubmit();
    }
  };

  const handleModuleChange = (e: React.SyntheticEvent, newValue: string) => {
    setModule(newValue);
    setCurrentStep(0);
    formik.resetForm();
  };

  const currentFields = fieldData[module][currentStep];

  return (
    <Grid container sx={{ height: "100vh", backgroundColor: theme.palette.background.default }}>
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
          {module === "trainer" && "Trainer Registration"}
          {module === "company" && "Company Registration"}
          {module === "hotel" && "Hotel Registration"}
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
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
            textAlign: "center",
          }}
        >
          <Tabs
            value={module}
            onChange={handleModuleChange}
            centered
            textColor="primary"
            indicatorColor="primary"
            sx={{ mb: 3 }}
          >
            <Tab label="Trainer" value="trainer" />
            <Tab label="Company" value="company" />
            <Tab label="Hotel" value="hotel" />
          </Tabs>

          {currentFields.map((field, index) => (
            <TextField
              key={index}
              name={field}
              label={field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1")}
              variant="outlined"
              fullWidth
              margin="normal"
              value={formik.values[field]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched[field] && Boolean(formik.errors[field])}
              helperText={formik.touched[field] && formik.errors[field]}
            />
          ))}

          <Button
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
            onClick={handleNext}
          >
            {currentStep === Object.keys(fieldData[module]).length - 1
              ? "Finish"
              : "Next"}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
