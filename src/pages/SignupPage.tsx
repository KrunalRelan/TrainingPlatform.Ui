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
import { submitRegistration } from "../api/RegistrationService";
import { useFormik } from "formik";
import {
  trainerValidationSchema,
  companyValidationSchema,
  hotelValidationSchema,
} from "../validations/registrationValidation";

type FormData = {
  [key: string]: string;
};

export default function SignupPage() {
  const [module, setModule] = useState("trainer");
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({}); // Typed formData
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
      password: "",
      updates: false,
    },
    validationSchema, // Attach the schema here
    onSubmit: (values) => {
      console.log("Form Data:", values);
      alert(`Registration successful for ${module}!`);
      navigate("/dashboard"); // Redirect to dashboard after successful submission
    },
  });
  const fieldData: { [key: string]: { [key: number]: string[] } } = {
    trainer: {
      0: ["Name", "Email"],
      1: ["Location", "Experience"],
      2: ["Specialization", "Price Per Class"],
    },
    company: {
      0: ["Company Name", "Enquirer Name"],
      1: ["Location", "Area of Training"],
      2: ["Price Per Session", "Number of People"],
    },
    hotel: {
      0: ["Hotel Name", "Email"],
      1: ["Location", "Max Pax"],
      2: ["Total Rooms", "Facilities"],
    },
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setModule(newValue);
    formik.resetForm(); // Reset form data when switching modules
  };
  const currentFields = fieldData[module][currentStep];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = async () => {
    if (currentStep < Object.keys(fieldData[module]).length - 1) {
      // handleInputChange(module,formData);
      setCurrentStep(currentStep + 1);
    } else {
      await submitRegistration(module, formData);
      alert(`Registration completed for ${module}`);
      navigate("/dashboard");
    }
  };

  const handleModuleChange = (e: React.SyntheticEvent, newValue: string) => {
    setModule(newValue);
    setCurrentStep(0);
    setFormData({});
  };

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
        <Typography variant="subtitle1">
          {currentStep === 0 && "Enter your basic information."}
          {currentStep === 1 && "Provide additional details."}
          {currentStep === 2 && "Finalize your registration."}
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
              label={field}
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData[field] || ""}
              onChange={(e) => handleInputChange(field, e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: theme.palette.divider,
                  },
                  "&:hover fieldset": {
                    borderColor: theme.palette.primary.main,
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: theme.palette.primary.main,
                  },
                },
              }}
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
